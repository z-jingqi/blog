import { Component, OnInit } from '@angular/core';
import articlesData from '../../../assets/data/articles.json';
import { Article } from '@models/article';
import videos from '../../../assets/data/videos.json';
import socials from '../../../assets/data/social-media.json';
import { SocialMedia } from '@models/social-media';

@Component({
  selector: 'blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  articles: Article[] = [...articlesData, ...articlesData, ...articlesData];
  socialMedias: SocialMedia[] = socials;
  expand = false;

  constructor() { }

  ngOnInit(): void {

  }


}
