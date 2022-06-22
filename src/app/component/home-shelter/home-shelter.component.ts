import { Component, OnInit } from '@angular/core';
import { Exits } from 'src/app/classes/Exits';
import { ExitsService } from 'src/app/servies/exits.service';
import { ShelterService } from 'src/app/servies/shelter.service';

@Component({
  selector: 'app-home-shelter',
  templateUrl: './home-shelter.component.html',
  styleUrls: ['./home-shelter.component.css']
})
export class HomeShelterComponent implements OnInit {

  constructor(public myExitsServies: ExitsService, public myShelterService: ShelterService) { }
  listExits: Array<Exits> = new Array<Exits>();
  isGood: boolean = false;
  ngOnInit(): void {
    this.myExitsServies.myGetAll().subscribe((x) => {
      let temp
      x.map((x) => {
        // if (this.myShelterService.idShelter == undefined)
        //   this.isGood = false
        if (x.idShelter == this.myShelterService.idShelter)
          this.listExits.push(x)
        this.listExits.map((x) => {
          if (x.state == 1) {
            this.isGood = true
          }

        })
      }
      )
    }, err => "nnoo")
  }

}
