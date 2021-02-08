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

  ngOnInit(): void { }

  navByMode(mode: 'grid' | 'bubble'): void {
    switch (mode) {
      case 'bubble':
        this.router.navigate(['home', 'article-bubble']);
        break;
      case 'grid':
        this.router.navigate(['home', 'article-grid']);
        break;
    }
    this.currentMode = mode;
  }

}
