import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { Category } from '../../../../models/category';
import { CategoriesService } from '../../../../services/categories.service';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = []
  environment = environment


  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.getPaged()
      .subscribe({
        next: (categories) => {
          this.categories = categories
          console.log(this.categories)
        }
      })
  }
}
