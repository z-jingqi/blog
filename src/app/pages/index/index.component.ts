import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import articlesData from '../../../assets/data/articles.json';
import { Article } from '@models/article';

@Component({
  selector: 'blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;
  articles: Article[] = articlesData;
  currentArticle: Article = {} as Article;

  constructor() { }

  ngOnInit(): void { }

  
}
