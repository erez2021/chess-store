import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent} from '../app/pages/home-page/home-page.component'
import {SetDetailsComponent} from '../app/cmps/set-details/set-details.component'

const routes: Routes = [
  { path: 'details', component: SetDetailsComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
