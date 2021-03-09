import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'article-bubble',
        loadChildren: () => import('./article-bubble/article-bubble.module').then(m => m.ArticleBubbleModule)
      },
      {
        path: 'article-grid',
        loadChildren: () => import('./article-grid/article-grid.module').then(m => m.ArticleGridModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
