import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from "../../shared/shared.module";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories.service';
import { CustomFile } from '../../models/file';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-category-editor',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './category-editor.component.html',
  styleUrl: './category-editor.component.scss'
})
export class CategoryEditorComponent implements OnInit {

  @Input() category?: Category
  @Output() onSave: EventEmitter<{ file?: File, category: Category }> = new EventEmitter()

  selectedFile: File | null
  categoryForm: FormGroup

  imageUrl?: string

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1), Validators.pattern(/^[\wàèéìòù0-9 ]*$/)]],
      image: [null]
    })

    if (this.category) {
      this.categoryForm.get('name').setValue(this.category.name)

      this.categoriesService.getImage(this.category.idCategory)
        .subscribe({
          next: (image: CustomFile) => {
            this.imageUrl = `${environment.baseApi}/file/${image.uuid}`
          }
        })
    }
  }

  onImagePicked(event: any) {
    this.selectedFile = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result
    }
    reader.readAsDataURL(this.selectedFile)
  }

  executeOnSave() {
    const category: Category = {
      idCategory: this?.category?.idCategory,
      name: this.categoryForm.get('name').value,
      //TODO: Change this when this component could be used for editing
      disabled: false,
      //TODO: manage article add
      articles: []
    }

    this.onSave.emit({ file: this.selectedFile, category })
  }
}
