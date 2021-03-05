import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@models/article';
import { ArticlesService } from '@services/articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-article-md',
  templateUrl: './article-md.component.html',
  styleUrls: ['./article-md.component.scss']
})
export class ArticleMdComponent implements OnInit {

  article$!: Observable<Article>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const articleId = params.get('id');
      if (articleId) {
        this.article$ = this.articleService.getArticleById(articleId);
      }
    });
  }

}
