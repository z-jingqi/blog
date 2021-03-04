import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentMode: 'bubble' | 'grid' = 'bubble';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navToGrid();
  }

  navByMode(mode: 'grid' | 'bubble'): void {
    switch (mode) {
      case 'bubble':
        this.navToBubble();
        break;
      case 'grid':
        this.navToGrid();
        break;
    }
    this.currentMode = mode;
  }

  navToGrid(): void {
    this.router.navigate(['home', 'article-grid']);
  }

  navToBubble(): void {
    this.router.navigate(['home', 'article-bubble']);
  }

}
