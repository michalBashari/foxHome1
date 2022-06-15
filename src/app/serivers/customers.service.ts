import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from '../classes/Customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  url:string="https://localhost:44322/api/Customers/";
  passMeneger:number=111;
  name:string="";
  pass:any;
  card:any;
  notMeneger:boolean=true;
  constructor(public http:HttpClient) { }
  MyGetAll():Observable<Array<Customers>>{
    return this.http.get<Array<Customers>>(`${this.url}MyGetAll`)
  }
  MyGetByIdBuy(id:number){
     return this.http.get<Array<Customers>>(`${this.url}MyGetByIdBuy/${id}`)
    }
  MyAdd(b:Customers):Observable<boolean>{
   return this.http.put<boolean>(`${this.url}MyAdd`,b)
  }
  MyDelete(id:number):Observable<Array<Customers>>{
    return this.http.delete<Array<Customers>>(`${this.url}MyDelete/${id}`)
      }
  MyUpdate(f:Customers):Observable<Array<Customers>>{
    return this.http.post<Array<Customers>>(`${this.url}MyUpdate`,f)
            }
}
