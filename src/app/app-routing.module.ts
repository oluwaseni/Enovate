import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnovateComponent } from './enovate/enovate.component';
import { EnovateLoginComponent } from './enovate-login/enovate-login.component';
import { EnovateRegisterComponent } from './enovate-register/enovate-register.component';
import { EnovateCreateComponent } from './enovate-create/enovate-create.component';


const routes: Routes = [

  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'enovate', component:EnovateComponent},
  {path:'login', component:EnovateLoginComponent},
  {path:'register', component:EnovateRegisterComponent},
  {path:'create', component:EnovateCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
