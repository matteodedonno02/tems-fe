import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

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
  @Input() id: string = ''
  @Input() title: string = ''
  @Input() message: string = ''
}
