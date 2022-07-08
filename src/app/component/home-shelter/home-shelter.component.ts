import { Component, OnInit } from '@angular/core';
import { Exits } from 'src/app/classes/Exits';
import { ExitType } from 'src/app/classes/ExitType';
import { ExitTypeService } from 'src/app/servies/exit-type.service';
import { ExitsService } from 'src/app/servies/exits.service';
import { ShelterService } from 'src/app/servies/shelter.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-shelter',
  templateUrl: './home-shelter.component.html',
  styleUrls: ['./home-shelter.component.css']
})
export class HomeShelterComponent implements OnInit {

  constructor(public myExitsServies: ExitsService, public myShelterService: ShelterService,public myExitTypeService:ExitTypeService) { }
  listExits: Array<Exits> = new Array<Exits>();
  myExit: Exits = new Exits();
  nameExitType:string='';
  products = new FormControl();
  myExitType: Array<ExitType> = new Array<ExitType>();
  iReturned: boolean = false;
  isNewExit: boolean = false;
  ngOnInit(): void {
    this.myExitsServies.myGetAll().subscribe((x) => {
      x.map((x) => {
        if (x.idShelter == this.myShelterService.idShelter)
          this.listExits.push(x)
        this.listExits.map((x) => {
          if (x.state == 1) {
            this.iReturned = true
            this.myExit = x
          }
        })
      }
      )
    }, err => "nnoo")
    this.myExitTypeService.myGetAll().subscribe((exitType) => {
      exitType.map((x) => {
          this.myExitType.push(x)
      }
      )
    }, err => "nnoo")
  }
  exit() {
    this.myExit.state=0
    this.myExitsServies.MyUpdate(this.myExit).subscribe((exit) => {
      exit.map((x) => {
      this.listExits.push(x)})
    })
  }
  newExit(){
    this.isNewExit=true
  }
}
