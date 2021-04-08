import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import articlesData from '../../../assets/data/articles.json';
import { Article } from '@models/article';
import videos from '../../../assets/data/videos.json';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  articles: Article[] = [...articlesData, ...articlesData, ...articlesData];
  currentArticle: Article = {} as Article;
  quotes = ['电影改变了生活，但生活还是生活'];
  videoSrc = '';
  quote = '';
  expand = false;
  @ViewChild('sectionContainer') sectionContainer!: ElementRef<HTMLDivElement>;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.setVideoSrc();
    this.setQuote();
    this.mergeQuotes();
  }

  mergeQuotes() {
    const articlesQuotes: string[] = this.articles.filter(article => article.quote).map(article => article.quote) as string[];
    this.quotes = this.quotes.concat(articlesQuotes);
  }

  setVideoSrc() {
    const length = (videos as string[]).length;
    const index = Math.floor(Math.random() * length);
    this.videoSrc = (videos as string[])[index];
  }

  setQuote() {
    const length = this.quotes.length;
    const index = Math.floor(Math.random() * length);
    this.quote = this.quotes[index];
  }

  ngOnDestroy() {
   
  }
}
