import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Article } from '@models/article';
import articles from '../../../../assets/data/articles.json';
import anime from 'animejs';

@Component({
  selector: 'blog-article-card-wrapper',
  templateUrl: './article-card-wrapper.component.html',
  styleUrls: ['./article-card-wrapper.component.scss']
})
export class ArticleCardWrapperComponent implements OnInit, AfterViewInit {

  // @Output() change: EventEmitter<Article> = new EventEmitter<Article>();
  @ViewChildren('articleWrapper') articleWrapper!: QueryList<ElementRef<HTMLDivElement>>;
  @Input() articles: Article[] = articles;
  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.articleIndexChange();
  }

  ngAfterViewInit() {
    this.displayAnimation();
  }

  articleIndexChange() {
    const article = this.articles[this.currentIndex];
    // this.change.emit(article);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.articleIndexChange();
    }
  }

  next() {
    if (this.currentIndex < this.articles.length - 1) {
      this.currentIndex++;
      this.articleIndexChange();
    }
  }

  displayAnimation() {
    const targets = this.articleWrapper.map((wrapper: { nativeElement: any }) => wrapper.nativeElement);
    anime({
      targets,
      opacity: {
        value: [0, 1]
      },
      translateY: {
        value: ['50px', 0]
      },
      rotateY: {
        value: [45, 0]
      },
      delay: (el, i) => i * 200,
      easing: 'easeInOutSine',
      duration: 1000
    });
  }
}
