import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { InfiniteScrollListComponent, TableColumn } from '../../../../components/infinite-scroll-list/infinite-scroll-list.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { Article } from '../../../../models/article';
import { Router } from '@angular/router';
import { BrokerService } from '../../../../services/broker.service';
import { ArticlesService } from '../../../../services/articles.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    SharedModule,
    InfiniteScrollListComponent,
    ModalComponent
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  // TODO: Change this
  tableStructure: TableColumn[] = [{
    columnName: 'name',
  }, {
    columnName: 'price',
    currency: true
  }, {
    columnName: 'disabled',
    titlecase: true
  }]

  selectedArticle: Article
  modalTitle: string
  modalConfirm: () => void

  constructor(
    private router: Router,
    private articlesService: ArticlesService,
    private brokerService: BrokerService
  ) { }

  loadArticles(skip: number, limit: number, searchTerms?: string) {
    return this.articlesService.getPaged(skip, limit, searchTerms)
  }

  updateArticle(article: Article) {
    // this.router.navigate(['admin', 'edit-category'])
    // this.brokerService.send(AppEvent.OnEditElement, category)
  }

  deleteArticle(article: Article) {
    // this.selectedCategory = category
    // this.modalTitle = 'confirm_category_deletion'
    // this.modalConfirm = () => {
    //   this.categoriesService.deleteCategory(category.idCategory)
    //     .subscribe({
    //       next: () => {
    //         this.brokerService.send<Category>(AppEvent.OnElementDeleted, category)
    //       }
    //     })
    // }

    // // new Toast(`#confirmCategoryDeletion`).show()
    // new Modal('#confirmCategoryDeletion').show()
  }
}
