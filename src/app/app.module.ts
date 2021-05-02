import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './cmps/header/header.component';
import { SetListComponent } from './cmps/set-list/set-list.component';
import { SetPreviewComponent } from './cmps/set-preview/set-preview.component';
import { FooterComponent } from './cmps/footer/footer.component';
import { SetDetailsComponent } from './cmps/set-details/set-details.component';
import { ChatComponent } from './cmps/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './cmps/filter/filter.component';
import { SortComponent } from './cmps/sort/sort.component';
import { CartComponent } from './cmps/cart/cart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SavedSetsComponent } from './pages/saved-sets/saved-sets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    SetListComponent,
    SetPreviewComponent,
    FooterComponent,
    SetDetailsComponent,
    ChatComponent,
    FilterComponent,
    SortComponent,
    CartComponent,
    SignupComponent,
    SavedSetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
