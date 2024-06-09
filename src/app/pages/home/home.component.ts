import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';
import {Category} from "../../classes/category";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastComponent} from "../../components/toast/toast.component";
import {TranslateModule} from "@ngx-translate/core";
import {CategoryService} from "../../services/category.service";
import {fromListToListOfPair} from "../../util/list-utils";
import {CategoryCardComponent} from "../../components/category-card/category-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ToastComponent,
    TranslateModule,
    CategoryCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private categoryService: CategoryService
  ) {
  }

  categories: Category[][]

  ngOnInit(): void {
    this.categoryService.findAll()
      .subscribe({
        next: (response) => {
          this.categories = fromListToListOfPair(response);
        }
      })

  }

}
