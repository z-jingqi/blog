import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'blog-start-reading',
  templateUrl: './start-reading.component.html',
  styleUrls: ['./start-reading.component.scss']
})
export class StartReadingComponent implements OnInit {

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  expand = false;
  animating = false;

  constructor() { }

  ngOnInit(): void { }

  expandContainer() {
    if (this.expand) {
      return;
    }
    this.animating = true;
    this.expand = true;
    anime({
      targets: this.container.nativeElement,
      borderRadius: {
        value: ['50%', 0],
        duration: 200
      },
      backgroundColor: {
        value: '#ffd1c2',
        duration: 200
      },
      width: '100vw',
      height: '100vh'
    }).finished.then(() => {
      this.animating = false;
    });
  }
}
