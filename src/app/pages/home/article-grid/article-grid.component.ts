import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '@services/articles.service';
import { Observable } from 'rxjs';
import { Article } from '@models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.scss']
})
export class ArticleGridComponent implements OnInit {

  articles$!: Observable<Article[]>;

  constructor(
    private articleService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articles$ = this.articleService.getArticles();
  }

  read(article: Article): void {
    this.router.navigate(['article-view', 'article-md', article.id]);
  }
}
