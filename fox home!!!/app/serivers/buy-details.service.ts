import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { BuyDetails } from '../classes/BuyDetails';
import { Shopping } from '../classes/Shopping';
@Injectable({
  providedIn: 'root'
})
export class BuyDetailsService {
  url:string="https://localhost:44322/api/BuyDetails/";
  constructor(public http:HttpClient) { } 
  MyGetAll():Observable<Array<BuyDetails>>{
  return this.http.get<Array<BuyDetails>>(`${this.url}MyGetAll`)
}
MyGetByIdBuy(id:number){
   return this.http.get<Array<BuyDetails>>(`${this.url}MyGetByIdBuy/${id}`)
  }
MyAdd(b:BuyDetails):Observable<boolean>{
 return this.http.put<boolean>(`${this.url}MyAdd`,b)
}
MyDelete(id:number):Observable<Array<BuyDetails>>{
  return this.http.delete<Array<BuyDetails>>(`${this.url}MyDelete/${id}`)
    }
MyUpdate(f:BuyDetails):Observable<Array<BuyDetails>>{
  return this.http.post<Array<BuyDetails>>(`${this.url}MyUpdate`,f)
          }
}