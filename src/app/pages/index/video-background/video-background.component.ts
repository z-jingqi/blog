import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'blog-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {

  @Input() src = '';
  @Input() quote = '';

  constructor() { }

  ngOnInit(): void { }


}
