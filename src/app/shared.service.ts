import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5001/api";

  constructor(private Http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.Http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.Http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.Http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.Http.delete(this.APIUrl+'/Department',val);
  }



}
