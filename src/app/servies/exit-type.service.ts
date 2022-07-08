import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExitType } from '../classes/ExitType';

@Injectable({
  providedIn: 'root'
})
export class ExitTypeService {
  url:string="https://localhost:44369/api/ExitType"
  constructor(public http:HttpClient) { }
  myGetAll():Observable<Array<ExitType>>{
    return this.http.get<Array<ExitType>>(`${this.url}/getAll`)
  }

}
