import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleViewComponent } from './article-view.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleViewComponent,
    children: [
      {
        path: 'article-md',
        loadChildren: () => import('./article-md/article-md.module').then(m => m.ArticleMdModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleViewRoutingModule { }
