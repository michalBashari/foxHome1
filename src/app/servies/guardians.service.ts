import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guardians } from '../classes/Guardians';

@Injectable({
  providedIn: 'root'
})
export class GuardiansService {
url:string="https://localhost:44369/api/Guardians/"
  
  constructor(public http:HttpClient) { }
  MyGetByTz(tz:number | undefined){
    debugger
    return this.http.get<Guardians>(`${this.url}getById/${tz}`)
   }
}
