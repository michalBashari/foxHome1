import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingCart } from './classes/ShoppingCart';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { CategoryComponent } from './components/category/category.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeMenegerComponent } from './components/home-meneger/home-meneger.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListMenegerComponent } from './components/list-meneger/list-meneger.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
{path:"app",component:AppComponent},
{path:"Home",component:HomeComponent},
{path:"ShoppingCart",component:ShoppingCartComponent},
{path:"HomeMeneger",component:HomeMenegerComponent},
{path:"category",component:CategoryComponent},
{path:"listMeneger",component:ListMenegerComponent},
{path:"addCategory",component:AddCategoryComponent},
{path:"Login",component:LoginComponent},
{path:"Detail/:id",component:DetailComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
