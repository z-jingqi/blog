import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleBubbleComponent } from './article-bubble.component';

const routes: Routes = [
  { path: '', component: ArticleBubbleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleBubbleRoutingModule { }
