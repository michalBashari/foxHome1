import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exits } from '../classes/Exits';

@Injectable({
  providedIn: 'root'
})
export class ExitsService {
  url:string="https://localhost:44369/api/Exits"
  constructor(public http:HttpClient) { }
  myGetAll():Observable<Array<Exits>>{
    return this.http.get<Array<Exits>>(`${this.url}/getAll`)
  }
  MyUpdate(e:Exits):Observable<Array<Exits>>{
    return this.http.post<Array<Exits>>(`${this.url}/update`,e)
            }
}
