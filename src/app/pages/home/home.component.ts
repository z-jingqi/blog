import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@models/article';
import { ArticlesService } from '@services/articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentMode: 'bubble' | 'grid' = 'bubble';
  articles$!: Observable<Article[]>;

  constructor(
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.navToGrid();
    this.getArticles();
  }

  navByMode(mode: 'grid' | 'bubble'): void {
    switch (mode) {
      case 'bubble':
        this.navToBubble();
        break;
      case 'grid':
        this.navToGrid();
        break;
    }
    this.currentMode = mode;
  }

  navToGrid(): void {
    this.router.navigate(['home', 'article-grid']);
  }

  navToBubble(): void {
    this.router.navigate(['home', 'article-bubble']);
  }

  getArticles(): void {
    this.articles$ = this.articlesService.getArticles();
  }

}
