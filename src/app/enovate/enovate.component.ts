import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnovateService } from '../services/enovate.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enovate',
  templateUrl: './enovate.component.html',
  styleUrls: ['./enovate.component.css']
})
export class EnovateComponent implements OnInit {

  constructor( private _service:EnovateService, private _route:Router, private toast:ToastrService) { }

  listAll:any;
  ngOnInit() {
    
    this.callLists()
  }

  logout(){
    sessionStorage.clear()
    this._route.navigate(['login'])
  }


  callLists(){
    this._service.list().subscribe(res=> {
      this.listAll = res['data'];
      console.log(this.listAll);
      
    });
  }


  create(){
    this._route.navigate(['create'])
  }

  edit(){
    this._route.navigate(['create'])
  }

  delete(){
   
  
      this._service.delete().subscribe(
        (res:any) =>{
          // this.toastr.success("Login Successful", "successful");
        
         console.log(res)
         this.toast.success("deleted Successful", "successful", {
          timeOut: 3000
        });
         this._route.navigate(['enovate'])
        },
        err =>
        {
          if(err.status == 400)
          this.toast.error("Something went wrong", "Try again", {
            timeOut: 3000
          });
          else
          this.toast.error(err, "Try again", {
            timeOut: 3000
          });
          console.log(err);
        });
        
      }
  


  }


