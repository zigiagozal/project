import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatAcountComponent } from '../components/createacount/createacount.component';
import { RulesComponent } from '../components/rules/rules.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'MyApp', component: AppComponent },
  { path: 'CreateAcount', component: CreatAcountComponent },
  { path: 'Rules', component: RulesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule {  }