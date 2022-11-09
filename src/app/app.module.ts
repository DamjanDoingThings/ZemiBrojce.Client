import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UslugiComponent } from './uslugi/uslugi.component';
import { ShalteriComponent } from './shalteri/shalteri.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { UslugiItemComponent } from './uslugi/uslugi-item/uslugi-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UslugiComponent,
    ShalteriComponent,
    StatusComponent,
    LoginComponent,
    UslugiItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
