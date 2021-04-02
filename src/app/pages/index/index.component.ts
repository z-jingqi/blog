import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'blog-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void { }

}
