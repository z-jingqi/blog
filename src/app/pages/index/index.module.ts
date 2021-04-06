import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MoreBtnComponent } from './more-btn/more-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { QuoteComponent } from './quote/quote.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleCardWrapperComponent } from './article-card-wrapper/article-card-wrapper.component';

@NgModule({
  declarations: [
    IndexComponent,
    MoreBtnComponent,
    QuoteComponent,
    ArticleCardComponent,
    ArticleCardWrapperComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatButtonModule
  ]
})
export class IndexModule { }
