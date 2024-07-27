import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

export class ActionButton {
  buttonText: string
  buttonAction: () => void
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  @Input() idToast: string = ''
  @Input() message: string = ''
  @Input() button: ActionButton
}
