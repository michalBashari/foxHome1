import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../classes/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url:string="https://localhost:44322/api/Category/";
  constructor(public http:HttpClient) { }
  MyGetAll():Observable<Array<Category>>{
    return this.http.get<Array<Category>>(`${this.url}MyGetAll`)
  }
  MyGetByIdBuy(id:number){
     return this.http.get<Array<Category>>(`${this.url}MyGetByIdBuy/${id}`)
    }
  MyAdd(b:Category):Observable<boolean>{
   return this.http.put<boolean>(`${this.url}MyAdd`,b)
  }
  MyDelete(id:number):Observable<Array<Category>>{
    return this.http.delete<Array<Category>>(`${this.url}MyDelete/${id}`)
      }
  MyUpdate(f:Category):Observable<Array<Category>>{
    return this.http.post<Array<Category>>(`${this.url}MyUpdate`,f)
            }
}
