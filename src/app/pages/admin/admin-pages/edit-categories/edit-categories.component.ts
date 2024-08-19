import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { AppEvent, BrokerService } from '../../../../services/broker.service';
import { Subscription } from 'rxjs';
import { Category } from '../../../../models/category';
import { CategoryEditorComponent } from '../../../../components/category-editor/category-editor.component';
import { CategoriesService } from '../../../../services/categories.service';
import { ToastComponent } from '../../../../components/toast/toast.component';
import { Router } from '@angular/router';
import { Toast } from 'bootstrap';

//TODO: This page has to use generic category editor
@Component({
  selector: 'app-edit-categories',
  standalone: true,
  imports: [
    SharedModule,
    ToastComponent,
    CategoryEditorComponent
  ],
  templateUrl: './edit-categories.component.html',
  styleUrl: './edit-categories.component.scss'
})
export class EditCategoriesComponent implements OnInit {

  onEditElementSubscription: Subscription

  editableCategory: Category

  editCategoryError: string

  constructor(
    private brokerService: BrokerService,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onEditElementSubscription = this.brokerService.subscribe<Category>(AppEvent.OnEditElement, (value) => {
      this.editableCategory = value
    })
  }

  update(event: { file?: File, category: Category }) {
    this.categoriesService
      .update(event.file, event.category)
      .subscribe({
        next: () => {
          this.router.navigate(['admin', 'categories'])
        },
        error: (resp) => {
          this.editCategoryError = resp.error.message
          new Toast(document.querySelector('#edit-category-error-toast')).show()
        }
      })
  }
}
