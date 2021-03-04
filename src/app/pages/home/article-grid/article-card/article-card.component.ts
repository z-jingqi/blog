import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/model';

@Component({
  selector: 'blog-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: Article = {} as Article;
  isAddToList = false;

  constructor() { }

  ngOnInit(): void { }

}
