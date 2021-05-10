import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AccordionComponent } from './accordion.component';

import { By } from '@angular/platform-browser';

const testConfig = {
  faq: {
      id: 1,
      question: 'When can we do?',
      answer: 'Shall do at 6 pm'
    }
};

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let debugElement: any;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    component.faq = testConfig.faq;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to closed view', () => {
    expect(component.visibleFlag).toBe(false);
  });

  it('should handle to display faqs on view', () => {
    debugElement = fixture.debugElement.query(By.css('.content-question'));
    if (debugElement) {
      element = debugElement.nativeElement;
      expect(element.textContent).toBe(testConfig.faq.question,
        `should display question property of faq into the .content-question`);
     } else {
      expect(false).toBe(true);
     }
  });

  it('should handle click event of toggle panel', fakeAsync(() => {
    debugElement = fixture.debugElement.query(By.css('.content-title'));
    if (debugElement) {
      element = debugElement.nativeElement;
      element.click();
      tick();
      expect(component.visibleFlag).toBe(true);
     } else {
      expect(false).toBe(true);
     }
  }));
});
