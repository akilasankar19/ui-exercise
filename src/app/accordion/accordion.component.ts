import { Component, Input, OnInit } from '@angular/core';
import { Faq } from '../faq';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  visibleFlag = false;

  @Input()
  faq: Faq;

  constructor() { }

  ngOnInit() {
  }

  toggleContent() {
    this.visibleFlag = !this.visibleFlag;
  }

}
