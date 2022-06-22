import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentComponent } from './component/apartment/apartment.component';
import { GuardiansComponent } from './component/guardians/guardians.component';
import { LoginComponent } from './component/login/login.component';
import { HomeShelterComponent } from './component/home-shelter/home-shelter.component';




@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    GuardiansComponent,
    LoginComponent,
    HomeShelterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
