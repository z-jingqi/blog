import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleGridComponent } from './article-grid.component';

const routes: Routes = [
  { path: '', component: ArticleGridComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleGridRoutingModule { }
