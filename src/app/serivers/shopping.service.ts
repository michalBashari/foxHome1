import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shopping } from '../classes/Shopping';
import { ShoppingCart } from '../classes/ShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  url:string="https://localhost:44322/api/Shopping/";
  constructor(public http:HttpClient) { }
  myListShoping:Array<ShoppingCart>=new Array<ShoppingCart>()
  MyGetAll():Observable<Array<Shopping>>{
    return this.http.get<Array<Shopping>>(`${this.url}MyGetAll`)
  }
  MyGetByIdBuy(id:number){
     return this.http.get<Array<Shopping>>(`${this.url}MyGetByIdBuy/${id}`)
    }
  MyAdd(b:Shopping):Observable<boolean>{
   return this.http.put<boolean>(`${this.url}MyAdd`,b)
  }
  MyDelete(id:number):Observable<Array<Shopping>>{
    return this.http.delete<Array<Shopping>>(`${this.url}MyDelete/${id}`)
      }
  MyUpdate(f:Shopping):Observable<Array<Shopping>>{
    return this.http.post<Array<Shopping>>(`${this.url}MyUpdate`,f)
            }
}
