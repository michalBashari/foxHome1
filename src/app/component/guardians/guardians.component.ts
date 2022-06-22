import { Component, OnInit } from '@angular/core';
import { Guardians } from 'src/app/classes/Guardians';
import { GuardiansService } from 'src/app/servies/guardians.service';

@Component({
  selector: 'app-guardians',
  templateUrl: './guardians.component.html',
  // styleUrls: ['./guardians.component.css']
})
export class GuardiansComponent implements OnInit {
  myGuardians:Guardians=new Guardians;
  Guardians:Guardians=new Guardians();
  isFound:boolean=false;
  constructor(public myGuardiansServies:GuardiansService) { }

  ngOnInit(): void {
  }

  ok(){
    this.myGuardiansServies.MyGetByTz(this.myGuardians.tz).subscribe(x=>{this.Guardians=x},err=>"nnoo")
    if(this.Guardians!=undefined)
      this.isFound=true;
    else
      this.isFound=false;
      debugger
      
  }
}
