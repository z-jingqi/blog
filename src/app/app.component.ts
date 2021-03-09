import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ) { }

  toHome(): void {
    this.router.navigate(['home', 'article-grid']);
  }

}
