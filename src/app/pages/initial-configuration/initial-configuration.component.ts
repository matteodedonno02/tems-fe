import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-initial-configuration',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './initial-configuration.component.html',
  styleUrl: './initial-configuration.component.scss'
})
export class InitialConfigurationComponent implements OnInit {
  
  selectedFile: File | null
  shopForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private shopService: ShopService
  ) {}
  
  ngOnInit() {
    this.shopForm = this.fb.group({
      shopName: [null, [Validators.required]],
      shopLogo: [null, [Validators.required]]
    })
  }

  onImagePicked(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveConfiguration() {
    const shopName = this.shopForm.get('shopName').value
    this.shopService
      .saveConfiguration(this.selectedFile, shopName)
      .subscribe()
  }
}
