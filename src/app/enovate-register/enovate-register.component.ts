import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EnovateService } from '../services/enovate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enovate-register',
  templateUrl: './enovate-register.component.html',
  styleUrls: ['./enovate-register.component.css']
})
export class EnovateRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:EnovateService, private _route:Router, private toast:ToastrService) { }

  ngOnInit() {
  }

  signIn(){
    this._route.navigate(['login'])
  }



  register = this.fb.group({
    firstName:[""],
    lastName:[""],
    phoneNumber:[""],
    emailAddress:[""],
    password:[""],
  })

  registration(){
    var body = {
      // name: this.register.value.firstName,
      email: this.register.value.emailAddress,
      password: this.register.value.password,
    
    }

    console.log(body)

    this.service.register(body).subscribe(
      res =>{
        this.toast.success("Registration Successful", "successful", {
          timeOut: 3000
        });
       console.log(res)
       this._route.navigate(['login'])
      },
      err =>
      {
        this.toast.success("Something went wrong", "Try again", {
          timeOut: 3000
        });
        console.log(err);
      });
      
    }

}
