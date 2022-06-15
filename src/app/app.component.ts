import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from './serivers/customers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2';
 
  constructor(public myCusServ:CustomersService,public r:Router) { }

  // isMeneger:boolean=false;
  // isCus:boolean=false
  is:boolean=true;
  ngOnInit(): void {
    // this.myCusServ.MyGetAll().subscribe(x=>{this.myListCus=x})
  
  }
  ok(){
    if(this.myCusServ.pass==this.myCusServ.passMeneger)
        this.r.navigate(['/HomeMeneger'])
    else
        this.r.navigate(['/Home'])
    this.is=false;
    }
}
