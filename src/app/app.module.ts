import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './pages/HomePage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";

@NgModule({
  declarations: [AppComponent, SingleProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomepageComponent,
    HttpClientModule,
    NavBarComponent,
],
  bootstrap: [AppComponent],
})
export class AppModule {}
