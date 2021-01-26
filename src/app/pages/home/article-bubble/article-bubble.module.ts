import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleBubbleRoutingModule } from './article-bubble-routing.module';
import { ArticleBubbleComponent } from './article-bubble.component';


@NgModule({
  declarations: [ArticleBubbleComponent],
  imports: [
    CommonModule,
    ArticleBubbleRoutingModule
  ]
})
export class ArticleBubbleModule { }
