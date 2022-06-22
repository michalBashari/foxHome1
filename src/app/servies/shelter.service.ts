import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shelter } from '../classes/Shelter';


@Injectable({
  providedIn: 'root'
})
export class ShelterService {
idShelter:number|undefined=0
  url:string="https://localhost:44369/api/Shelter/"
  
  constructor(public http:HttpClient) { }
  MyGetByTz(tz:number | undefined){
    return this.http.get<Shelter>(`${this.url}getById/${tz}`)
   }
}
