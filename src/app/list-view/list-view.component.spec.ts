import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ListViewComponent } from './list-view.component';
import { FaqService } from '../faq.service';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from '../accordion/accordion.component';

import { of } from 'rxjs';
import { throwError } from 'rxjs';

const testConfig = {
  faqs: [{
      id: 1,
      question: 'When can we do?',
      answer: 'Shall do at 6 pm'
    },
    {
      id: 2,
      question: 'May I know where to track the new submissions?',
      answer: 'Track the new submissions in peoplesoft'
    }],
    error404: {
      message: 'Http failure response - 404 Not Found',
      name: 'HttpErrorResponse',
      ok: false,
      status : 404,
      statusText: 'Not Found'
    }
};

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;
  let faqService: FaqService;
  let spyGetFaqs: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewComponent, AccordionComponent ],
      imports: [HttpClientModule],
      providers: [FaqService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    faqService = fixture.debugElement.injector.get(FaqService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle get all faqs', fakeAsync(() => {
    spyGetFaqs = spyOn(faqService, 'getFaqs').and.returnValue(of(testConfig.faqs));
    fixture.detectChanges();
    expect(component.faqList).toBe(testConfig.faqs);
  }));

  it('should handle get all faqs error', fakeAsync(() => {
    spyGetFaqs = spyOn(faqService, 'getFaqs').and.returnValue(throwError(testConfig.error404));
    fixture.detectChanges();
    expect(component.errorMessage).toBe(testConfig.error404.message);
  }));
});
