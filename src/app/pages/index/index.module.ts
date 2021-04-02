import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SectionComponent } from './section/section.component';
import { MoreBtnComponent } from './more-btn/more-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    IndexComponent,
    SectionComponent,
    MoreBtnComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class IndexModule { }
