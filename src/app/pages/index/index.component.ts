import { Component, OnInit } from '@angular/core';
import articlesData from '../../../assets/data/articles.json';
import { Article } from '@models/article';
import videos from '../../../assets/data/videos.json';
import socials from '../../../assets/data/social-media.json';
import { SocialMedia } from '@models/social-media';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  articles: Article[] = [...articlesData, ...articlesData, ...articlesData];
  socialMedias: SocialMedia[] = socials;
  expand = false;
  videoUrl = videos[0];
  isReading = false;

  constructor() { }

  ngOnInit(): void {
    this.setVideoUrl();
  }

  setVideoUrl() {
    const length = videos.length;
    const indexRand = Math.random() * length;
    const index = Math.floor(indexRand);
    this.videoUrl = videos[index];
  }

  toggleReading(value?: boolean) {
    const isReading = value ?? !this.isReading;
    this.isReading = isReading;
    if (!this.isReading) {
      this.setVideoUrl();
    }
  }

}
