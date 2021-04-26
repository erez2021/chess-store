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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    SetListComponent,
    SetPreviewComponent,
    FooterComponent,
    SetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
