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
  options = {
    /**
     * 页面展示个数
     */
    viewNum: 3
  };
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void { }

}
