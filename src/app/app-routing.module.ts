import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeShelterComponent } from './component/home-shelter/home-shelter.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
    {path:"Login",component:LoginComponent},
    {path:"HomeShelter",component:HomeShelterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
