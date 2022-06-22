import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, Routes } from '@angular/router';
import { Shelter } from 'src/app/classes/Shelter';
import { ShelterService } from 'src/app/servies/shelter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myShelter: Shelter = new Shelter();
  Shelter: Shelter = new Shelter();
  isFound: boolean = false;
  constructor(public myShelterService: ShelterService,public router:Router) { }

  ngOnInit(): void {
  }
  ok() {
    debugger
    this.myShelterService.MyGetByTz(this.myShelter.tz).subscribe(x => {
      debugger
      if (x.firsName == this.myShelter.firsName) {
        this.Shelter = x
        this.myShelterService.idShelter = x.id
      }
      if (this.Shelter != undefined){
        this.router.navigate(['/HomeShelter'])
        this.isFound = true;}
      else
        this.isFound = false;
    }
      , err => "nnoo")




  }
}
