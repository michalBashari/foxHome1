import { Component, OnInit } from '@angular/core';
import { Apartment } from 'src/app/classes/Apartment';
import { ApartmentService } from 'src/app/servies/apartment.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  // styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {
  
  constructor(public myApartmentServies:ApartmentService) { }

  listApartment:Array<Apartment>=new Array<Apartment>();
  
  ngOnInit(): void {
    this.myApartmentServies.myGetAll().subscribe(x=>{this.listApartment=x},err=>"nnoo")
  }

}
