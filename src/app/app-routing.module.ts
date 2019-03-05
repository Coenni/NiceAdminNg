import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form-component', component: FormComponentComponent },
  { path: 'form-validation', component: FormValidationComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
