import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fabric } from 'fabric';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  navByMode(mode: 'list' | 'bubble') {
    switch (mode) {
      case 'bubble':
        this.router.navigate(['home', 'article-bubble']);
        break;
      case 'list':
        break;
    }
  }

}
