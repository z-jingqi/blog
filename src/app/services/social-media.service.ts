import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialMedia } from '@models/social-media';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(
    private http: HttpClient
  ) { }

  getSocialMedias(): Observable<SocialMedia[]> {
    const url = './assets/data/social-media.json';
    return this.http.get(url) as Observable<SocialMedia[]>;
  }

}
