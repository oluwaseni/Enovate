import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnovateComponent } from './enovate/enovate.component';
import { EnovateCreateComponent } from './enovate-create/enovate-create.component';
import { EnovateLoginComponent } from './enovate-login/enovate-login.component';
import { EnovateRegisterComponent } from './enovate-register/enovate-register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    EnovateComponent,
    EnovateCreateComponent,
    EnovateLoginComponent,
    EnovateRegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar:true
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
