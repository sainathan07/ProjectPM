import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manage } from './manage.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManageService {
  readonly APIURL="http://localhost:42891/ProcessPension";

  constructor(public http:HttpClient) { }
  formData:Manage = new Manage();
  
 
}
