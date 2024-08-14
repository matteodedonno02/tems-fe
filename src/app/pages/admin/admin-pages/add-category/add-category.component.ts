import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Toast } from "bootstrap";
import { CategoriesService } from "../../../../services/categories.service";
import { ToastComponent } from "../../../../components/toast/toast.component";
import { NgTemplateOutlet, TitleCasePipe } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../../../../shared/shared.module";
import { CategoryEditorComponent } from '../../../../components/category-editor/category-editor.component';
import { Category } from '../../../../models/category';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    // FormsModule,
    // ReactiveFormsModule,
    ToastComponent,
    // NgTemplateOutlet,
    // TitleCasePipe,
    // TranslateModule,
    CategoryEditorComponent,
    SharedModule
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {

  addCategoryError: string = ''
  selectedFile: File | null
  categoryForm: FormGroup

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }


  saveCategory(event: { file?: File, category: Category }) {
    this.categoriesService
      .save(event.file, event.category)
      .subscribe({
        next: () => {
          this.router.navigate(['admin', 'categories'])
        },
        error: (resp) => {
          this.addCategoryError = resp.error.message
          new Toast(document.querySelector('#add-category-error-toast')).show()
        }
      })
  }
}
