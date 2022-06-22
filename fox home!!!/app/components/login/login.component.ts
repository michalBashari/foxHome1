import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/classes/Customers';
import { CustomersService } from 'src/app/serivers/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public myCusServ:CustomersService,public r:Router) { }
  myListCus:Array<Customers>=new Array<Customers>();
  find:boolean=false
   i:Customers=new Customers(0,this.myCusServ.name,this.myCusServ.pass,this.myCusServ.card);
   j:any
   good1:boolean=false;
   good:boolean=false;
   cardid:any;
  ngOnInit(): void {
    this.myCusServ.MyGetAll().subscribe(x=>{this.myListCus=x})
      this.j=this.myListCus.find(x=> x.password=this.myCusServ.pass);
     if(this.j!=undefined){
        this.find=true;
      }     
  }
  ok(){ 
    if((this.i.creditCardDetails?.length!=8 && this.i.creditCardDetails?.length!=16) || this.i.name==undefined ||this.i.password==undefined){
this.good1=true;
this.good=false;
}
else{
this.myCusServ.MyAdd(this.i).subscribe(e=>{
  },err=>{})
this.good=true;
this.good1=false;}
  // this.r.navigate(['/Home'])
}
  }


