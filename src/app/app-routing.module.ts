import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatAcountComponent } from '../components/createacount/createacount.component';
import { RulesComponent } from '../components/rules/rules.component';

const routes: Routes = [
  { path: 'MyApp', component: AppComponent },
  { path: 'CreatAcount', component: CreatAcountComponent },
  { path: 'Rules', component: RulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }