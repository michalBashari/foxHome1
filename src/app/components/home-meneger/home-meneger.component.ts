import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/serivers/customers.service';

@Component({
  selector: 'app-home-meneger',
  templateUrl: './home-meneger.component.html',
  styleUrls: ['./home-meneger.component.css']
})
export class HomeMenegerComponent implements OnInit {

  constructor(public myServ:CustomersService) { }

  ngOnInit(): void {
    this.myServ.notMeneger=false;
  }

}
