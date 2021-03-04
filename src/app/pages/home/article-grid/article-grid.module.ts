import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleGridRoutingModule } from './article-grid-routing.module';
import { ArticleGridComponent } from './article-grid.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ArticleGridComponent,
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    ArticleGridRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class ArticleGridModule { }
