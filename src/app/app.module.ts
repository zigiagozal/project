import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router'
//import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RulesComponent } from 'src/components/rules/rules.component';
import { CreatAcountComponent } from 'src/components/createacount/createacount.component';

@NgModule({
  declarations: [
    AppComponent,RulesComponent,CreatAcountComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CreatAcountComponent, RulesComponent, AppComponent]
})
export class AppModule {
  
 }
