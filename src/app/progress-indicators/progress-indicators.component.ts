import { Component, OnInit } from '@angular/core';
import {ProgressIndicatorStep} from './progress-indicator-step.model';

@Component({
  selector: 'app-progress-indicators',
  templateUrl: './progress-indicators.component.html',
  styleUrls: ['./progress-indicators.component.scss']
})

export class ProgressIndicatorsComponent implements OnInit {

  steps = new Array<ProgressIndicatorStep>();
  lastSelectedAdjust  = 0;
  selectedIndex = 0;

  constructor() {
    this.steps.push(new ProgressIndicatorStep(1, 'Order Placed'));
    this.steps.push(new ProgressIndicatorStep(2, 'Payment Received'));
    this.steps.push(new ProgressIndicatorStep(3, 'Specification Agreed'));
    this.steps.push(new ProgressIndicatorStep(4, 'In Production'));
    this.steps.push(new ProgressIndicatorStep(5, 'Build Complete'));
    this.steps.push(new ProgressIndicatorStep(6, 'Delivered'));
  }

  selectStep(selectedIndex: number) {
    this.selectedIndex = selectedIndex;
    // if (selectedIndex === this.steps.length - 1) {
    //   this.lastSelectedAdjust = (100/12) ;
    // } else {
    //   this.lastSelectedAdjust = 0;
    // }
  }

  ngOnInit() {
  }

}
