import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SocialMedia } from '@models/social-media';

@Component({
  selector: 'blog-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss']
})
export class FooterItemComponent implements OnInit {

  @Input() media: SocialMedia = {} as SocialMedia;
  @Output() selectMedia: EventEmitter<SocialMedia> = new EventEmitter<SocialMedia>();
  isShow = false;
  @ViewChild('mediaImg') mediaImg!: ElementRef<HTMLImageElement>;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectMedia(item: SocialMedia): void {
    this.selectMedia.emit(item);
  }

  onMouserEnter(event: MouseEvent): void {
    const position = {
      x: event.screenX,
      y: event.screenY - 130
    };
    const img = this.mediaImg;
    if (img && img.nativeElement) {
      img.nativeElement.style.left = `${position.x}px`;
      img.nativeElement.style.top = `${position.y}px`;
      this.isShow = true;
    }
  }

  onMouseLeave(event: MouseEvent): void {
    this.isShow = false;
  }

  onMouseMove(event: MouseEvent): void {
    const x = event.screenX;
    const img = this.mediaImg;
    if (img && img.nativeElement) {
      img.nativeElement.style.left = `${x}px`;
    }
  }
}
