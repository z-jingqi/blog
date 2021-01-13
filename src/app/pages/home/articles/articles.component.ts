import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'blog-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, AfterViewInit {

  canvas!: fabric.Canvas;
  @ViewChild('bubble') bubbleRef!: ElementRef<HTMLCanvasElement>;
  articles = [1, 2, 3, 4];
  radiusRange = [20, 50];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initCanvasContainer();
    this.generateArticleBubbles();
  }

  private initCanvasContainer(): void {
    const container = this.bubbleRef.nativeElement;
    this.canvas = new fabric.Canvas(container);
  }

  generateArticleBubbles(): void {
    const groups: fabric.Group[] = [];
    for (const article of this.articles) {
      const group = this.createArticleBubble();
      groups.push(group);
    }
    this.canvas.add(...groups);
  }

  private createArticleBubble(): fabric.Group {
    const circle = this.createBubbleCircle();
    const text = this.createBubbleText();
    const group = new fabric.Group([circle, text]);
    return group;
  }

  private createBubbleCircle(): fabric.Circle {
    const range = this.radiusRange[1] - this.radiusRange[0];
    const radius = Math.random() * range + this.radiusRange[0];
    const options: fabric.ICircleOptions = {
      radius
    };
    const bubble = new fabric.Circle(options);
    return bubble;
  }

  private createBubbleText(): fabric.Text {
    const text = 'Awesome';
    const element = new fabric.Text(text, {
      originX: 'center',
      originY: 'center',
      fontSize: 12,
      fill: '#fff'
    });
    return element;
  }

}
