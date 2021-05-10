import { Injectable } from '@angular/core';
import { Faq } from './faq';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private httpClient: HttpClient) {}

  getFaqs(): Observable<Array<Faq>> {
    return this.httpClient.get<Array<Faq>>('assets/faqs.json');
  }
}
