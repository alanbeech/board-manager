import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import {FeedsRoutingModule} from './feed-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeedsRoutingModule
  ],
  declarations: [FeedComponent]
})
export class FeedModule { }
