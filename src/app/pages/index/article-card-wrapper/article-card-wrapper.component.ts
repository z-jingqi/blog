import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '@models/article';

@Component({
  selector: 'blog-article-card-wrapper',
  templateUrl: './article-card-wrapper.component.html',
  styleUrls: ['./article-card-wrapper.component.scss']
})
export class ArticleCardWrapperComponent implements OnInit {

  @Input() articles: Article[] = [];
  @Output() change: EventEmitter<Article> = new EventEmitter<Article>();

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.articleIndexChange();
  }

  articleIndexChange() {
    const article = this.articles[this.currentIndex];
    this.change.emit(article);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.articleIndexChange();
    }
  }

  next() {
    if (this.currentIndex < this.articles.length - 1) {
      this.currentIndex++;
      this.articleIndexChange();
    }
  }
}
