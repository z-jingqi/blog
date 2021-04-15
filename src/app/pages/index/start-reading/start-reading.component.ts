import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs';
import mojs from '@mojs/core';

@Component({
  selector: 'blog-start-reading',
  templateUrl: './start-reading.component.html',
  styleUrls: ['./start-reading.component.scss']
})
export class StartReadingComponent implements OnInit {

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  expand = false;
  animating = false;
  burstObjs: any[] = [];
  colors = ['#00FFFF', '#3399FF', '#CC00CC', '#FF0066', '#FF9966', '#FFFF33', '#33FF00', '#FFFFFF', '#66FF99'];
  burst: any;

  constructor() { }

  ngOnInit(): void {
    this.burst = this.createHoverEffect();
  }

  expandContainer() {
    if (this.expand) {
      return;
    }
    this.animating = true;
    this.expand = true;
    anime({
      targets: this.container.nativeElement,
      backgroundColor: {
        value: '#fff9eb'
      },
      width: '100vw',
      height: '100vh'
    }).finished.then(() => {
      this.animating = false;
    });
  }

  showHoverEffect() {
    if (!this.expand && this.burst) {
      const x = document.body.clientWidth / 2;
      const y = document.body.clientHeight / 2;
      this.burst.tune({ x, y })
        .generate()
        .replay();
    }
  }

  createHoverEffect() {
    const smoke = new mojs.Burst({
      left: 0, top: 0,
      degree: 0,
      count: 3,
      radius: { 0: 100 },
      children: {
        fill: this.colors,
        pathScale: 'rand(0.5, 1)',
        radius: 'rand(12, 15)',
        swirlSize: 'rand(10, 15)',
        swirlFrequency: 'rand(2, 4)',
        direction: [1, -1],
        duration: `rand(400, 800)`,
        delay: 'rand(0, 75)',
        easing: 'quad.out',
        isSwirl: true,
        isForce3d: true,
      }
    });
    return smoke;
  }

}
