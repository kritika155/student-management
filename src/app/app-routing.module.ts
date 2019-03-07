import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { StudentsComponent } from './students/students.component';
const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
},
  {
    path:'login',
    component:LoginComponent
},
{
  path:'homepage',
  component:HomepageComponent
},
{
  path:'menu',
  component:MenuComponent
},
{
  path:'students',
  component:StudentsComponent
},
{
  path:'',
  redirectTo:"/homepage",
  pathMatch:"full"
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
