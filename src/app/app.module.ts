import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './components/info/info.component';
import { NgModule } from '@angular/core';
import { SigninComponent } from './pages/signin/signin.component';
import { SigninWithEmailComponent } from './pages/signin-with-email/signin-with-email.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SigninComponent,
    SignupComponent,
    InfoComponent,
    FormComponent,
    SigninWithEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
