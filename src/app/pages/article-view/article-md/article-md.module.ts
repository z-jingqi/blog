import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleMdRoutingModule } from './article-md-routing.module';
import { ArticleMdComponent } from './article-md.component';
import { ArticleTitleComponent } from './article-title/article-title.component';
import { ArticleContentComponent } from './article-content/article-content.component';


@NgModule({
  declarations: [ArticleMdComponent, ArticleTitleComponent, ArticleContentComponent],
  imports: [
    CommonModule,
    ArticleMdRoutingModule
  ]
})
export class ArticleMdModule { }
