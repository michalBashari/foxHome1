import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/Category';
import { Products } from 'src/app/classes/Products';
import { CategoryService } from 'src/app/serivers/category.service';
import { ProductsService } from 'src/app/serivers/products.service';

@Component({
  selector: 'app-list-meneger',
  templateUrl: './list-meneger.component.html',
  styleUrls: ['./list-meneger.component.css']
})
export class ListMenegerComponent implements OnInit {

  constructor(public myServProduct:ProductsService ,public r:Router,public servCate:CategoryService) { }
  myDataProducts:Array<Products>=new Array<Products>();
  myDatC:Array<Category>=new Array<Category>();
  p:Products=new Products();
  isEdit:boolean=false;
  is:boolean=false;
  ngOnInit(): void {
    this.myServProduct.MyGetAll().subscribe(e=>{
      this.myDataProducts=e},err=>{"no good!!!"})
      this.servCate.MyGetAll().subscribe(e=>{
        this.myDatC=e},err=>{"no good!!!"})
  }
  changSelect(e:any){

  }
  delete(id?:any){
    this.myServProduct.MyDelete(id).subscribe(w=>{
      this.myServProduct.MyGetAll().subscribe(x=>{this.myDataProducts=x},err=>{})})
    }
    update(i:Products){
      
       this.p={...i};
       this.is=true;
       this.isEdit=true;
    }
    ok(){
if(this.isEdit==false){
this.myServProduct.MyAdd(this.p).subscribe
(x=>{this.myServProduct.MyGetAll().subscribe(y=>{this.myDataProducts=y})})}
else{
this.myServProduct.MyUpdate(this.p).subscribe
(x=>{this.myServProduct.MyGetAll().subscribe(y=>{this.myDataProducts=y})})
   this.isEdit=false;
  this.p=new Products();
   } 
   this.is=false;
    // this.r.navigate(['/HomeMeneger'])
  }
   add(){
     this.is=true;
   }
}
