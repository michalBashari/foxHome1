import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { CategoryService } from 'src/app/serivers/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public servCategory:CategoryService) { }
myListCategory:Array<Category>=new Array<Category>();
c:Category=new Category();
isEdit:boolean=false;
  ngOnInit(): void {
    this.servCategory.MyGetAll().subscribe(x=>{this.myListCategory=x},err=>"fff")
  }
  delete(i:any){
this.servCategory.MyDelete(i).subscribe(x=>{this.servCategory.
  MyGetAll().subscribe(y=>{this.myListCategory=y},err=>"ddd")})
}
update(i:Category){
  this.c={...i}
  this.isEdit=true;
  this.servCategory.MyUpdate(i).subscribe(x=>{this.servCategory.
    MyGetAll().subscribe(y=>{this.myListCategory=y},err=>"ddd")})
}
ok(){
  if(this.isEdit==false){
    this.servCategory.MyAdd(this.c).subscribe(x=>{this.servCategory.
      MyGetAll().subscribe(y=>{this.myListCategory=y},err=>"ddd")})
  }
  else{
    this.servCategory.MyUpdate(this.c).subscribe(x=>{this.servCategory.
      MyGetAll().subscribe(y=>{this.myListCategory=y},err=>"ddd")})
      this.isEdit=false
  }
}
}
