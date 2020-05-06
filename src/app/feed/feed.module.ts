import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import {FeedsRoutingModule} from './feed-routing.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FeedsRoutingModule,
    MatCardModule
  ],
  declarations: [FeedComponent]
})
export class FeedModule { }
