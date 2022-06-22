import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/classes/Products';
import { ProductsService } from 'src/app/serivers/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public myServProduct:ProductsService) { }
  myDataProducts:Array<Products>=new Array<Products>();
d:Date=new Date();
  ngOnInit(): void {
    this.myServProduct.MyGetAll().subscribe(e=>{
      this.myDataProducts=e},err=>{"no good!!!"})
     
  }
}
