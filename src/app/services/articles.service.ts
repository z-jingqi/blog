import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { Article } from '@models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    const url = './assets/data/articles.json';
    return this.http.get(url) as Observable<Article[]>;
  }

  getArticleById(articleId: string): Observable<Article> {
    const url = './assets/data/articles.json';
    return this.http.get(url).pipe(
      map(articles => (articles as Article[]).find(article => article.id === articleId))
    ) as Observable<Article>;
  }

}
