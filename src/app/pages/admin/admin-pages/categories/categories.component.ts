import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Category } from '../../../../models/category';
import { CategoriesService } from '../../../../services/categories.service';
import { InfiniteScrollListComponent, TableColumn } from '../../../../components/infinite-scroll-list/infinite-scroll-list.component';
import { ActionButton, ToastComponent } from "../../../../components/toast/toast.component";
import { AppEvent, BrokerService } from '../../../../services/broker.service';
import { Modal, Toast } from 'bootstrap';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    SharedModule,
    InfiniteScrollListComponent,
    ModalComponent
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

  selectedCategory: Category
  modalTitle: string
  modalConfirm: () => void

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private brokerService: BrokerService
  ) { }

  loadCategories(skip: number, limit: number, searchTerms?: string) {
    return this.categoriesService.getPaged(skip, limit, searchTerms)
  }

  updateCategory(category: Category) {
    this.router.navigate(['admin', 'editCategory'])
    this.brokerService.send(AppEvent.OnEditElement, category)
  }

  deleteCategory(category: Category) {
    this.selectedCategory = category
    this.modalTitle = 'confirm_category_deletion'
    this.modalConfirm = () => {
      this.categoriesService.deleteCategory(category.idCategory)
        .subscribe({
          next: () => {
            this.brokerService.send<Category>(AppEvent.OnElementDeleted, category)
          }
        })
    }

    // new Toast(`#confirmCategoryDeletion`).show()
    new Modal('#confirmCategoryDeletion').show()
  }
}
