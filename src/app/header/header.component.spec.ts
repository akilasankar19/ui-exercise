import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title h3').textContent).toContain('HAVE A QUESTION? WE CAN HELP');
  });

  it('should render title', () => {
    expect(component.title).toEqual('HAVE A QUESTION? WE CAN HELP');
  });
});
