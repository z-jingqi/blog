import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Article } from '@models/article';
import { ConvertService } from '@services/convert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.scss']
})
export class ArticleContentComponent implements OnInit, OnChanges {

  @Input() article!: Article;
  content$!: Observable<string>;

  constructor(
    private convertService: ConvertService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.article) {
      this.content$ = this.convertMdToHtml(this.article.url);
    }
  }

  convertMdToHtml(articleUrl: string): Observable<string> {
    return this.convertService.convertMdToHtml(articleUrl);
  }
}
