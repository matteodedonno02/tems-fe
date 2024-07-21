import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from "../../pages/login/login.component";
import { Observable, Subscriber } from 'rxjs';

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

  @Input() structure: TableColumn[]
  @Input() elements: any[] = []
  @Input() showEdit: boolean = false
  @Input() showDelete: boolean = false
  @Input() load: (skip: number, limit: number) => Observable<any[]>

  readonly LIMIT = 10

  ngOnInit() {
    this.executeLoad()
  }

  executeLoad() {
    this.load(this.elements.length, this.LIMIT)
      .subscribe({
        next: (elements) => {
          this.elements.push(...elements)
        }
      })
  }
}
