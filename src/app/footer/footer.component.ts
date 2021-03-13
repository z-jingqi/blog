import { Component, OnInit } from '@angular/core';
import { SocialMedia } from '@models/social-media';
import { SocialMediaService } from '@services/social-media.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialMedias$!: Observable<SocialMedia[]>;

  constructor(
    private socialMeidaService: SocialMediaService
  ) { }

  ngOnInit(): void {
    this.getSocialMedias();
  }

  getSocialMedias(): void {
    this.socialMedias$ = this.socialMeidaService.getSocialMedias();
  }

  selectMedia(media: SocialMedia): void {
    const type = media.type ? media.type : 'link';
    switch (type) {
      case 'link':
        if (media.url) {
          window.open(media.url, '_blank');
        }
        break;
      case 'image':
        break;
    }
  }

}
