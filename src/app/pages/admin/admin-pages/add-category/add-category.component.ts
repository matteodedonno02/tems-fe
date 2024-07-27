import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UsersService} from "../../../../services/users.service";
import {Router} from "@angular/router";
import {Toast} from "bootstrap";
import {CategoriesService} from "../../../../services/categories.service";
import {ToastComponent} from "../../../../components/toast/toast.component";
import {NgTemplateOutlet, TitleCasePipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "../../../../shared/shared.module";

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToastComponent,
    NgTemplateOutlet,
    TitleCasePipe,
    TranslateModule,
    SharedModule
  ],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent implements OnInit {
  addCategoryError: string = ''
  selectedFile: File | null
  categoryForm: FormGroup;
  object = Object

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1), Validators.pattern(/^[\wàèéìòù0-9 ]*$/)]],
      image: [null]
    })
  }

  onImagePicked(event: any) {
    this.selectedFile = event.target.files[0];
  }


  saveCategory() {
    this.categoriesService
      .saveOrUpdate(this.selectedFile, {
        name: this.categoryForm.value.name,
        disabled: false,
        //TODO: manage article add
        articles: []
      })
      .subscribe({
        next: () => {
          this.router.navigate(['/categories'])
        },
        error: (resp) => {
          this.addCategoryError = resp.error.message
          new Toast(document.querySelector('#add-category-error-toast')).show()
        }
      })
  }
}
