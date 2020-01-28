import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { EnovateService } from '../services/enovate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enovate-login',
  templateUrl: './enovate-login.component.html',
  styleUrls: ['./enovate-login.component.css']
})
export class EnovateLoginComponent implements OnInit {

  constructor(private _route:Router, private service:EnovateService, private fb:FormBuilder, private toast:ToastrService ) { }

  ngOnInit() {
  }


  createAccount(){
    this._route.navigate(['register'])
  }


  
  login = this.fb.group({
    emailAddress:[""],
    password:[""],
  })

  logins(){
    var body = {
      email: this.login.value.emailAddress,
      password: this.login.value.password,
    
    }

    console.log(body)

    this.service.login(body).subscribe(
      (res:any) =>{
        // this.toastr.success("Login Successful", "successful");
      sessionStorage.setItem('token', res.token);
       console.log(res)
       this.toast.success("Login Successful", "successful", {
        timeOut: 3000
      });
       this._route.navigate(['enovate'])
      },
      err =>
      {
        if(err.status == 400)
        this.toast.error("incorrect email or password", "successful", {
          timeOut: 3000
        });
        else
        this.toast.error(err, "successful", {
          timeOut: 3000
        });
        console.log(err);
      });
      
    }

}
