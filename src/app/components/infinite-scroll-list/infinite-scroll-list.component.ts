import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from "../../pages/login/login.component";
import { debounceTime, finalize, Observable, Subscriber, Subscription } from 'rxjs';
import { AppEvent, BrokerService } from '../../services/broker.service';

export class TableColumn {
  columnName: string
  titlecase?: boolean = false
}

@Component({
  selector: 'app-infinite-scroll-list',
  standalone: true,
  imports: [
    SharedModule,
    LoginComponent
  ],
  templateUrl: './infinite-scroll-list.component.html',
  styleUrl: './infinite-scroll-list.component.scss'
})
export class InfiniteScrollListComponent implements OnInit, OnDestroy {

  @Input() title: string
  @Input() structure: TableColumn[]
  @Input() elements: any[] = []
  @Input() showEdit: boolean = false
  @Input() showDelete: boolean = false
  @Input() load: (skip: number, limit: number, searchTerms?: string) => Observable<any[]>
  @Input() update: (element: any) => void
  @Input() delete: (element: any) => void

  searchTerms: string

  onElementDeletedSubscription: Subscription

  loading: boolean = true

  readonly LIMIT = 20
  readonly DEBOUNCE_TIME = 2000

  constructor(
    private brokerService: BrokerService
  ) { }

  ngOnInit() {
    this.executeLoad()

    this.onElementDeletedSubscription = this.brokerService.subscribe(AppEvent.OnElementDeleted, (value) => {
      this.elements = this.elements.filter((element) => element !== value)
    })
  }

  ngOnDestroy() {
    this.onElementDeletedSubscription?.unsubscribe()
  }

  executeLoad() {
    this.loading = true
    this.load(this.elements.length, this.LIMIT, this.searchTerms)
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: (elements) => {
          this.elements.push(...elements)
        }
      })
  }

  searchTermsChanged() {
    this.loading = true
    this.load(0, this.LIMIT, this.searchTerms)
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (elements) => {
          this.elements = elements
        }
      })
  }

  executeDelete(toDelete: any) {
    this.delete(toDelete)
  }

  executeUpdate(toUpdate: any) {
    this.update(toUpdate)
  }
}
