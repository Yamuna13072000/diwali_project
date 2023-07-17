import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getData():any{
    return this._http.get<any>("http://localhost:3000/posts")
  }

  postData(data:any):any{
    return this._http.post<any>("http://localhost:3000/cart",data)
  }

  getElementById(id:any){
    return this._http.get<any>(`http://localhost:3000/posts/${id}`)
  }
  getCartElements(){
    return this._http.get<any>("http://localhost:3000/cart");
  }
  deletebyId(id:any){
    return this._http.delete(`http://localhost:3000/cart/${id}`)
  }
  buyproducts(data:any){
    return this._http.post<any>("http://localhost:3000/orders",data)
  }
  getOrderItems(){
    return this._http.get("http://localhost:3000/orders")
  }
}
