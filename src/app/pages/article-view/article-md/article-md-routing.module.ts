import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleMdComponent } from './article-md.component';

const routes: Routes = [
  { path: ':id', component: ArticleMdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleMdRoutingModule { }
