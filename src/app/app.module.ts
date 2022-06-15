import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { HomeMenegerComponent } from './components/home-meneger/home-meneger.component';
import { CategoryComponent } from './components/category/category.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { ListMenegerComponent } from './components/list-meneger/list-meneger.component';
import { MyDairectiveDirective } from './Dairectiv/my-dairective.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    LoginComponent,
    DetailComponent,
    ListComponent,
    ShoppingCartComponent,
    HomeMenegerComponent,
    CategoryComponent,
    AddCategoryComponent,
    ListMenegerComponent,
    MyDairectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
