import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
// import { map, filter, scan } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
  
@Injectable()  
export class ProductsService {  
  
   constructor(private http: Http) { }  
  apiUrl
   saveUser(product){
       console.log("product in service"); 
       console.log(product);      
    return this.http.post('http://localhost:4000/api/SaveUser', product)  
            .map((response: Response) =>response.json())              
  }  
  
  GetProducts(){       
    return this.http.get('http://localhost:4000/api/getProducts')  
            .map((response: Response) => response.json() )
                         
  }  
  deleteProduct(id){   
    return this.http.post('http://localhost:4000/api/deleteProduct/',{'id': id})  
            .map((response: Response) =>response.json())               
  }  
  
 }