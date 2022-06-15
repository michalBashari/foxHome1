import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { Products } from 'src/app/classes/Products';
import { ShoppingCart } from 'src/app/classes/ShoppingCart';
import { CategoryService } from 'src/app/serivers/category.service';
import { ProductsService } from 'src/app/serivers/products.service';
import { ShoppingService } from 'src/app/serivers/shopping.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public myServProduct:ProductsService,public servShop:ShoppingService,public servCate:CategoryService) { }
  myDataProducts:Array<Products>=new Array<Products>();
  myDatC:Array<Category>=new Array<Category>();
 s:ShoppingCart=new ShoppingCart();
  ngOnInit(): void {
    this.myServProduct.MyGetAll().subscribe(e=>{
      this.myDataProducts=e},err=>{"no good!!!"})
      this.servCate.MyGetAll().subscribe(e=>{
        this.myDatC=e},err=>{"no good!!!"})
  }
  changSelect(e:any){
    // let id=e.target.value
    // this.myServProduct.MyGetByIdBuy(id).subscribe(data=>{
    //   debugger
    //   this.listperson=data
    // },err=>{
    //   console.log(err+"שגיאה בגישה לשרת");
      
    // })
    }
  shop(i:Products)
  {
   this.s=this.servShop.myListShoping[this.servShop.myListShoping.indexOf(this.servShop.myListShoping.find(t=>t.id==i.id)!)]
   if(this.s==undefined)
    this.servShop.myListShoping.push(new ShoppingCart(i.id,i.name,1,i.price,i.price))
   else{
     var x=this.servShop.myListShoping.find(t=>t.id==i.id);   
    var y=this.servShop.myListShoping.indexOf(x!)
    debugger
    this.servShop.myListShoping[y]!.amount!++
    this.servShop.myListShoping[y]!.finalSum!=(this.servShop.myListShoping[y]!.amount!)*(this.servShop.myListShoping[y]!.price!)

  }
}
 
}
