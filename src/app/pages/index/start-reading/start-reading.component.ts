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

  constructor() { }

  ngOnInit(): void {}

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
}
