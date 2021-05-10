import { Component, OnInit } from '@angular/core';
import { Faq } from '../faq';
import { FaqService } from '../faq.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  faq: Faq;
  faqList: Array<Faq>;
  errorMessage: string;

  constructor(private faqService: FaqService) {
    this.faq = new Faq();
    this.faqList = [];
    this.errorMessage = '';
  }

  ngOnInit() {
    this.faqService.getFaqs().subscribe( response => {
        this.faqList = response;
      }, error => {
        this.errorMessage = error.message;
      }
    );

  }

}
