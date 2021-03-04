import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '@services/articles.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model';

@Component({
  selector: 'blog-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.scss']
})
export class ArticleGridComponent implements OnInit {

  articles$!: Observable<Article[]>;

  constructor(
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articles$ = this.articleService.getArticles();
  }
}
