import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../classes/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string="https://localhost:44322/api/Products/";
  constructor(public http:HttpClient) { }
  MyGetAll():Observable<Array<Products>>{
    return this.http.get<Array<Products>>(`${this.url}MyGetAll`)
  }
  MyGetByIdBuy(id:number):Observable<Products>{
     return this.http.get<Products>(`${this.url}MyGetByIdBuy/${id}`)
    }
  MyAdd(b:Products):Observable<boolean>{
   return this.http.put<boolean>(`${this.url}MyAdd`,b)
  }
  MyDelete(id?:number):Observable<Array<Products>>{
    return this.http.delete<Array<Products>>(`${this.url}MyDelete/${id}`)
      }
  MyUpdate(f:Products):Observable<Array<Products>>{
    return this.http.post<Array<Products>>(`${this.url}MyUpdate`,f)
            }
}
