import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    const url = './assets/articles.json';
    return this.http.get(url) as Observable<Article[]>;
  }

}
