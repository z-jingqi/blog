import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterItemComponent } from './footer-item/footer-item.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FooterComponent,
    FooterItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
