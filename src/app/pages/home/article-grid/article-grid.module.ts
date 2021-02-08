import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleGridRoutingModule } from './article-grid-routing.module';
import { ArticleGridComponent } from './article-grid.component';


@NgModule({
  declarations: [ArticleGridComponent],
  imports: [
    CommonModule,
    ArticleGridRoutingModule
  ]
})
export class ArticleGridModule { }
