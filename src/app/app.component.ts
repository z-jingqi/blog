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
  burstObject: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.burstObject = this.createEffectElement();
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

  createEffectElement() {
    const smoke = new mojs.Burst({
      left: 0, top: 0,
      degree: 0,
      count: 3,
      radius: { 0: 100 },
      children: {
        fill: 'white',
        pathScale: 'rand(0.5, 1)',
        radius: 'rand(12, 15)',
        swirlSize: 'rand(10, 15)',
        swirlFrequency: 'rand(2, 4)',
        direction: [1, -1],
        duration: `rand(400, 800)`,
        // delay: 'rand(0, 75)',
        delay: (a: any, b: any, c: any) => {
          console.log(a, b, c);
        },
        easing: 'quad.out',
        isSwirl: true,
        isForce3d: true,
      }
    });
    return smoke;
  }

  startAnimation(event: MouseEvent) {
    const position = this.getPosition(event);
    this.burstObject.tune(position)
      .generate()
      .replay();
  }

  /**
   * 获取鼠标点击的位置
   *
   * @params event 鼠标事件
   * @returns 点击的坐标
   */
  getPosition(event: MouseEvent): { x: number; y: number } {
    const x = event.pageX;
    const y = event.pageY;
    return { x, y };
  }
}
