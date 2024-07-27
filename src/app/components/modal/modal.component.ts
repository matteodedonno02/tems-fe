import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() idModal: string
  @Input() title: string

  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>()

  confirm() {
    this.onConfirm.emit()
  }
}
