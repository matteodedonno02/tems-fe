import {Component, Input} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {Category} from "../../classes/category";
import {routes} from "../../app.routes";
import {Router} from "@angular/router";
import {ARTICLE} from "../../util/path-const";

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  constructor(private router: Router) {
  }
  @Input() category : Category

  showArticlesForCategory(category: Category){
    this.router.navigate([`/${ARTICLE}`])
  }
}
