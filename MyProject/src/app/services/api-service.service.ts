import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as booksData from '../../assets/json/books.json'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  //'Content-Type': 'application/x-www-form-urlencoded'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set('access-control-allow-origin',"http://localhost:3000/")
  };
  //let headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:8080/");
  apiURL = 'http://localhost:3000/api/loginuser';
  jsonURL = '../../assets/json/books.json'
  //loginDetails = "aneesh"

  constructor(private http: HttpClient) { }

  login(loginDetails){
    //var formData = new FormData();
    //formData.append('loginForm',loginDetails)
    let formData:any = Object.assign(loginDetails.value)
    console.log("inside login")
   return this.http.post(this.apiURL,formData)
  }
  
  // getBooks(){
  //   console.log("book dtaaa",booksData)
  //   return this.http.get(JSON.parse(booksData);
  // }


}
