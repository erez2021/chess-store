import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetResolverService} from '../app/services/set-resolver.service'
import { HomePageComponent} from '../app/pages/home-page/home-page.component'
import {SetDetailsComponent} from '../app/cmps/set-details/set-details.component'
import {CartComponent} from '../app//cmps/cart/cart.component'
import { SignupComponent } from '../app/pages/signup/signup.component';
import { SavedSetsComponent } from './pages/saved-sets/saved-sets.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'saved', component: SavedSetsComponent },
  { path: ':id', component: SetDetailsComponent, resolve: { set: SetResolverService }},
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
