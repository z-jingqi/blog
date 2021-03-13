import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  locationBack(): void {
    this.location.back();
  }

}
