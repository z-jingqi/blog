import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@models/article';

@Component({
  selector: 'blog-article-title',
  templateUrl: './article-title.component.html',
  styleUrls: ['./article-title.component.scss']
})
export class ArticleTitleComponent implements OnInit {

  @Input() article!: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
