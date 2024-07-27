import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from "../../pages/login/login.component";
import { debounceTime, Observable, Subscriber } from 'rxjs';

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
export class InfiniteScrollListComponent implements OnInit {

  @Input() title: string
  @Input() structure: TableColumn[]
  @Input() elements: any[] = []
  @Input() showEdit: boolean = false
  @Input() showDelete: boolean = false
  @Input() load: (skip: number, limit: number, searchTerms?: string) => Observable<any[]>
  @Input() delete: (element: any) => Observable<void>

  searchTerms: string

  readonly LIMIT = 20
  readonly DEBOUNCE_TIME = 500

  ngOnInit() {
    this.executeLoad()
  }

  executeLoad() {
    this.load(this.elements.length, this.LIMIT, this.searchTerms)
      .subscribe({
        next: (elements) => {
          this.elements.push(...elements)
        }
      })
  }

  searchTermsChanged() {
    this.load(0, this.LIMIT, this.searchTerms)
      .pipe(debounceTime(this.DEBOUNCE_TIME))
      .subscribe({
        next: (elements) => {
          this.elements = elements
        }
      })
  }

  executeDelete(toDelete: any) {
    this.delete(toDelete).subscribe({
      next: () => {
        this.elements = this.elements.filter(element => element !== toDelete)
      }
    })
  }
}
