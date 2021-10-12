import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Vista1Component } from './vista1/vista1.component';
import { Vista2Component } from './vista2/vista2.component';
import { Vista3Component } from './vista3/vista3.component';

const routes: Routes = [
  {path:"Login" , component:LoginComponent},
  {path:'vista1', component:Vista1Component},
  {path:'vista2', component:Vista2Component},
  {path:'vista3', component:Vista3Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
