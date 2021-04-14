import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import mojs from '@mojs/core';

@Component({
  selector: 'blog-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // colors = ['#00FFFF', '#3399FF', '#CC00CC', '#FF0066', '#FF9966', '#FFFF33', '#33FF00', '#FFFFFF', '#66FF99'];
  colors = ['#ff6633'];
  burstObjs: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.burstObjs = this.createEffectElements();
    this.createClickEffect();
  }

  toHome(): void {
    this.router.navigate(['home', 'article-grid']);
  }

  createClickEffect() {
    document.body.addEventListener('click', (event: MouseEvent) => {
      this.startAnimation(event);
    }, false);
  }

  createEffectElements() {
    const burst = new mojs.Burst({
      left: 0, top: 0,
      radius: { 0: 30 },
      angle: 'rand(0, 360)',
      children: {
        shape: 'line',
        stroke: this.colors,
        fill: 'none',
        scale: 1,
        scaleX: { 1: 0 },
        easing: 'cubic.out',
        duration: 1000
      }
    });

    const bubbles = new mojs.Burst({
      left: 0, top: 0,
      radius: 28,
      count: 3,
      timeline: { delay: 100 },
      children: {
        stroke: this.colors,
        fill: 'none',
        scale: 1,
        strokeWidth: { 8: 0 },
        radius: { 0: 'rand(6, 10)' },
        degreeShift: 'rand(-50, 50)',
        duration: 400,
        delay: 'rand(0, 250)',
      }
    });
    return [burst, bubbles];
  }

  startAnimation(event: MouseEvent) {
    for (const burst of this.burstObjs) {
      const position = this.getPosition(event);
      burst.tune(position)
        .generate()
        .replay();
    }
  }

  getPosition(event: MouseEvent): { x: number; y: number } {
    const x = event.pageX;
    const y = event.pageY;
    return { x, y };
  }
}
