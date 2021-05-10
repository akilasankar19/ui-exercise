import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ListViewComponent } from './list-view/list-view.component';

import { HttpClientModule } from '@angular/common/http';
import { FaqService } from './faq.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccordionComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
