import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SigninComponent } from './pages/signin/signin.component';
import { SigninWithEmailComponent } from './pages/signin-with-email/signin-with-email.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
 {path: '', component:SignupComponent},
 {path: 'signin', component:SigninComponent},
 {path:'signin-with-email', component:SigninWithEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
