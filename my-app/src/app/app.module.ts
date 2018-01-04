import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { RouterModule, Routes} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {HomeComponent} from './home.component';
import {PageNotFoundComponent} from './pageNotFound.component'
import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';
import {AuthorComponent} from './app.author.component';
import {AutoGrowDirective} from './auto-grow.directive';
import { UserComponent } from './user.component';

const appRoutes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'authors',component:AuthorComponent},
  {path:'users',component:UserComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent, HomeComponent, PageNotFoundComponent, AppComponent2, AuthorComponent, UserComponent, AutoGrowDirective
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes,{'useHash':true}), HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
