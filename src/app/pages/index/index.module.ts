import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleCardWrapperComponent } from './article-card-wrapper/article-card-wrapper.component';

@NgModule({
  declarations: [
    IndexComponent,
    ArticleCardComponent,
    ArticleCardWrapperComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
