import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '@models/article';

@Component({
  selector: 'blog-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: Article = {} as Article;
  @Output() read: EventEmitter<any> = new EventEmitter<any>();
  @Input() active = false;

  constructor() { }

  ngOnInit(): void { }

  readEvent(): void {
    this.read.emit(this.article);
  }

}
