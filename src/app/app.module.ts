import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatExpansionModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//services
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AllCryptoComponent } from './all-crypto/all-crypto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllCryptoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
