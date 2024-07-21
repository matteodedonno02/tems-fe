import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Category } from '../../../../models/category';
import { CategoriesService } from '../../../../services/categories.service';
import { environment } from '../../../../../environments/environment';
import { InfiniteScrollListComponent, TableColumn } from '../../../../components/infinite-scroll-list/infinite-scroll-list.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    SharedModule,
    InfiniteScrollListComponent
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  tableStructure: TableColumn[] = [{
    columnName: 'name',
  }, {
    columnName: 'disabled',
    titlecase: true
  }]

  constructor(
    private categoriesService: CategoriesService
  ) { }

  loadCategories(skip: number, limit: number) {
    return this.categoriesService.getPaged(skip, limit)
  }
}
