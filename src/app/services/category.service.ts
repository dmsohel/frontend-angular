import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }

  //load all categories
  public categories(){
    return this._http.get(`${baseurl}/category/`);
  }

  //add category
  public addCategory(category: any){
    return this._http.post(`${baseurl}/category/`,category);
  }
}
