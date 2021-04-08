import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { MatButtonModule } from '@angular/material/button';
import { QuoteComponent } from './quote/quote.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleCardWrapperComponent } from './article-card-wrapper/article-card-wrapper.component';
import { VideoBackgroundComponent } from './video-background/video-background.component';
import { StartReadingComponent } from './start-reading/start-reading.component';

@NgModule({
  declarations: [
    IndexComponent,
    QuoteComponent,
    ArticleCardComponent,
    ArticleCardWrapperComponent,
    VideoBackgroundComponent,
    StartReadingComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatButtonModule
  ]
})
export class IndexModule { }
