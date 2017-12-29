import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';
import {AuthorComponent} from './app.author.component';


@NgModule({
  declarations: [
    AppComponent, AppComponent2, AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
