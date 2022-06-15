import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/classes/Products';
import { ProductsService } from 'src/app/serivers/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(public a:ActivatedRoute,public servP:ProductsService) { }

pr:Products=new Products();

  ngOnInit(): void {  
    this.a.params.subscribe(
      x=> {this.servP.MyGetByIdBuy(x.id).subscribe(e=>{this.pr=e})} );
  
  // this.servP.MyGetByIdBuy(u)
  }


}
