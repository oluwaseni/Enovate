import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EnovateService } from '../services/enovate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enovate-create',
  templateUrl: './enovate-create.component.html',
  styleUrls: ['./enovate-create.component.css']
})
export class EnovateCreateComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:EnovateService, private _route:Router, private toast:ToastrService) { }

  ngOnInit() {
  }



  
  creater = this.fb.group({
    name:[""],
    job:[""],
  })

  create(){
    var body = {
      name: this.creater.value.name,
      job: this.creater.value.job,
    
    }

    console.log(body)

    this.service.create(body).subscribe(
      res =>{
       console.log(res)
       this.toast.success("Created Successfully", "successful", {
        timeOut: 3000
      });
       this._route.navigate(['enovate'])
      },
      err =>
      {
        this.toast.error("Something went wrong", "Try again", {
          timeOut: 3000
        });
        console.log(err);
      });
      
    }


}
