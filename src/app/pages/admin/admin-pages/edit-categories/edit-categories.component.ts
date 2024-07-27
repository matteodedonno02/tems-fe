import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { AppEvent, BrokerService } from '../../../../services/broker.service';
import { Subscription } from 'rxjs';
import { Category } from '../../../../models/category';

//TODO: This page has to use generic category editor
@Component({
  selector: 'app-edit-categories',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './edit-categories.component.html',
  styleUrl: './edit-categories.component.scss'
})
export class EditCategoriesComponent implements OnInit {

  onEditElementSubscription: Subscription

  editableCategory: Category

  constructor(
    private brokerService: BrokerService
  ) { }

  ngOnInit() {
    this.onEditElementSubscription = this.brokerService.subscribe<Category>(AppEvent.OnEditElement, (value) => {
      this.editableCategory = value
    })
  }
}
