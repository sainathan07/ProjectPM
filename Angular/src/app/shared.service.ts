import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pensionerdetail } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:42891";

  constructor(public http:HttpClient) { }
  
    getPensioner():Observable<any[]>{
     return this.http.get<any>(this.APIUrl+'/Pensioner');
    }
    formData:Pensionerdetail = new Pensionerdetail();
    readonly baseURL="http://localhost:42891/Pensioner"
  postPensioner(){
    return this.http.post(this.baseURL,this.formData);
  }
}
