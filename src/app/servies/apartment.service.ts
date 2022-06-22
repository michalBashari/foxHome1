import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Apartment } from '../classes/Apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
url:string="https://localhost:44369/api/Apartment"
  constructor(public http:HttpClient) { }
  myGetAll():Observable<Array<Apartment>>{
    return this.http.get<Array<Apartment>>(`${this.url}/getAll`)
  }
}
