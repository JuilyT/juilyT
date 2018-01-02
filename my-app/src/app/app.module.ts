import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {HomeComponent} from './home.component';
import {PageNotFoundComponent} from './pageNotFound.component'
import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';
import {AuthorComponent} from './app.author.component';
import {AutoGrowDirective} from './auto-grow.directive';

const appRoutes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'authors',component:AuthorComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent, HomeComponent, PageNotFoundComponent, AppComponent2, AuthorComponent, AutoGrowDirective
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
