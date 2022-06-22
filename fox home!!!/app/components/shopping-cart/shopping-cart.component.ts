import { Component, OnInit } from '@angular/core';
import { BuyDetails } from 'src/app/classes/BuyDetails';
import { Products } from 'src/app/classes/Products';
import { Customers } from 'src/app/classes/Customers';
import { Shopping } from 'src/app/classes/Shopping';
import { ShoppingCart } from 'src/app/classes/ShoppingCart';
import { BuyDetailsService } from 'src/app/serivers/buy-details.service';
import { CustomersService } from 'src/app/serivers/customers.service';
import { ProductsService } from 'src/app/serivers/products.service';
import { ShoppingService } from 'src/app/serivers/shopping.service';
import { Router } from '@angular/router';
import { MaxValidator } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public servPro: ProductsService, public servShop: ShoppingService, public servCus: CustomersService, public servBuy: BuyDetailsService, public servProd: ProductsService, public r: Router) { }
  is: boolean = false;
  y1:number | undefined;
  myListCus: Array<Customers> = new Array<Customers>();
  myListShop: Array<Shopping> = new Array<Shopping>();
  myListProd: Array<Products> = new Array<Products>();
  i: Customers = new Customers(0, this.servCus.name, this.servCus.pass, this.servCus.card);
  sc: ShoppingCart = new ShoppingCart();
  j: any;
  z: Products = new Products();
  isPuy: boolean = false;
  isPuy2: boolean = false;
  d: Date = new Date();
  mySh: Shopping = new Shopping();
  myBuy: BuyDetails = new BuyDetails();
  sum: number = 0;
  find: boolean = false;
  name: string = this.servCus.name;
  pass: number = this.servCus.pass;
  ngOnInit(): void {
    this.sum = 0;
    for (let index = 0; index < this.servShop.myListShoping.length; index++) {
      this.sum += this.servShop.myListShoping[index].finalSum!;
    }
    this.servCus.MyGetAll().subscribe(x => { this.myListCus = x })
    this.j = this.myListCus.find(x => x.password = this.servCus.pass);
    if (this.j != undefined) {
      this.find = true;
    }

  }
  add(id: any) {
    //מוסיף אחד לכמות

    var x = this.servShop.myListShoping.find(t => t.id == id);
    var y = this.servShop.myListShoping.indexOf(x!)
    // this.z=this.servProd.MyGetByIdBuy(id);
    //if(this.servShop.myListShoping[y].amount?+1<=z.)
    this.servShop.myListShoping[y]!.amount!++
    this.servShop.myListShoping[y]!.finalSum = (this.servShop.myListShoping[y]!.amount!) * (this.servShop.myListShoping[y]!.price!)
    this.sum = 0;
    for (let index = 0; index < this.servShop.myListShoping.length; index++) {
      this.sum += this.servShop.myListShoping[index].finalSum!;
    }
  }
  decrease(id: any) {
    // אם שווה ל1  מוציא מהסל ואם 
    //ואם לא מוירד אחד מהכמות
    var x = this.servShop.myListShoping.find(t => t.id == id);
    var y = this.servShop.myListShoping.indexOf(x!)

    // this.sc.id=x?.id
    // this.sc.name=x?.name
    // this.sc.amount=x?.amount
    // this.sc.price=x?.price  
    // this.sc.finalSum=x?.finalSum
    if (this.servShop.myListShoping[y]!.amount == 1)
      this.servShop.myListShoping.splice(y, 1)

    else {
      this.servShop.myListShoping[y]!.amount!--
      this.servShop.myListShoping[y]!.finalSum = (this.servShop.myListShoping[y]!.amount!) * (this.servShop.myListShoping[y]!.price!)
    }
    this.sum = 0;
    for (let index = 0; index < this.servShop.myListShoping.length; index++) {
      this.sum += this.servShop.myListShoping[index].finalSum!;
    }
  }
  finsh() {
    this.is = true
    this.servCus.MyGetAll().subscribe(x => { this.myListCus = x })
    if (this.myListCus.find(x => x.name == this.servCus.name)?.name == undefined) {
      this.r.navigate(['Login']);
    }
    //   else{ if((this.i.creditCardDetails?.length!=8 && this.i.creditCardDetails?.length!=16) || this.i.name==undefined ||this.i.password==undefined){
    //     this.isPuy2=true
    //     this.isPuy=false}
    //   else{  
    //     this.isPuy2=false
    //     this.isPuy=false;
    //  this.mySh.idCustomer=this.myListCus.find(x=>x.password==this.servCus.pass)?.id
    //  this.mySh.Date=this.d;
    //  this.mySh.sum=this.sum;

    //  //.MyAdd(this.p).subscribe
    //   this.servShop.MyAdd(this.mySh).subscribe(x=>{this.servShop.MyGetAll().subscribe(y=>{this.myListShop=y})})
    //   // this.myBuy.idShopping=(this.myListCus.find(x=>x.password==this.servCus.pass))?.id;
    //  // this.myBuy.idProducts=this.sum;
    //   // this.myBuy.amount=this.sum;
    //   // this.servBuy.MyAdd(this.myBuy).subscribe(x=>{this.servBuy.MyGetAll().subscribe(y=>{this.myListBuy=y})})
    // this.servCus.MyGetAll().subscribe(x=>{this.myListCus=x})
    // if(this.myListCus.find(x=>x.name==this.servCus.name)!=undefined)
    // if(this.myListCus.find(x=>x.password==this.servCus.pass)!=undefined){
    // this.myBuy.idCustomer=(this.myListCus.find(x=>x.password==this.servCus.pass))?.id;
    // this.myBuy.sum=this.sum;
    // this.servBuy.MyAdd(this.myBuy).subscribe(x=>{this.servBuy.MyGetAll().subscribe(y=>{this.myListBuy=y})})}
    //   this.myBuy.idShopping=this.mySh.id   
    //   for(let i=0;i<this.servShop.myListShoping.length;i++)  {
    //   // var x=this.servShop.myListShoping.find(t=>t.id==id);   
    //   // var y=this.servShop.myListShoping.indexOf(x!)
    //   this.servProd.MyGetAll().subscribe(x=>{this.myListProd=x})
    //   let y=this.servShop.myListShoping.find(x=>x.id==this.servShop.myListShoping[i].id)?.id
    //   this.myListProd.find(x=>x.id==y)?.countStock!=this.myListProd.find(x=>x.id==y)?.
    //   countStock!-this.servShop.myListShoping.find(x=>x.id==y)?.amount!
    // }

    // }}
    // // if(  this.myListCus.find(x=>x.name==this.servCus.name)==undefined))
    //    this.is=true
    // else

  }
  finsh1() {
    debugger

    if ((this.i.creditCardDetails?.length != 8 && this.i.creditCardDetails?.length != 16) || this.i.name == undefined || this.i.password == undefined) {
      this.isPuy2 = true
      this.isPuy = false
    }
    else {
      this.isPuy2 = false
      this.isPuy = true;
      this.mySh.idCustomer = this.myListCus.find(x => x.password == this.servCus.pass)?.id
      this.mySh.Date = this.d;
      this.mySh.sum = this.sum;
      
      this.servShop.MyAdd(this.mySh).subscribe(x => { 
        if(x==true){
        this.servShop.MyGetAll().subscribe(y => {
           this.y1=y[y.length].id
         this.myListShop = y })}
         })
        }
      this.servShop.myListShoping.forEach(k => {
        debugger
        this.servBuy.MyAdd(new BuyDetails(0, this.y1, k.id, k.amount))
      });

      //.MyAdd(this.p).subscribeז
      // this.myBuy.idShopping=(this.myListCus.find(x=>x.password==this.servCus.pass))?.id;
      // this.myBuy.idProducts=this.sum;
      // this.myBuy.amount=this.sum;
      // this.servBuy.MyAdd(this.myBuy).subscribe(x=>{this.servBuy.MyGetAll().subscribe(y=>{this.myListBuy=y})})
      // this.servCus.MyGetAll().subscribe(x=>{this.myListCus=x})
      // if(this.myListCus.find(x=>x.name==this.servCus.name)!=undefined)
      // if(this.myListCus.find(x=>x.password==this.servCus.pass)!=undefined){
      // this.myBuy.idCustomer=(this.myListCus.find(x=>x.password==this.servCus.pass))?.id;
      // this.myBuy.sum=this.sum;
      // this.servBuy.MyAdd(this.myBuy).subscribe(x=>{this.servBuy.MyGetAll().subscribe(y=>{this.myListBuy=y})})}
      this.myBuy.idShopping = this.mySh.id
      for (let i = 0; i < this.servShop.myListShoping.length; i++) {
        // var x=this.servShop.myListShoping.find(t=>t.id==id);   
        // var y=this.servShop.myListShoping.indexOf(x!)
        this.servProd.MyGetAll().subscribe(x => { this.myListProd = x })
        let y = this.servShop.myListShoping.find(x => x.id == this.servShop.myListShoping[i].id)?.id
        this.myListProd.find(x => x.id == y)?.countStock != this.myListProd.find(x => x.id == y)?.
          countStock! - this.servShop.myListShoping.find(x => x.id == y)?.amount!
      }

    }
  }


