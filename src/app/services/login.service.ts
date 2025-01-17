import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../config';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //url="http://localhost:9596"

  constructor(private http:HttpClient) { }


  //calling the server to generate token

  generateToken(credentials:any){
    return this.http.post(`http://34.234.150.41:9596/token`,credentials)
  }


  //for login user
  loginUser(token:any){
    localStorage.setItem("token",token)
    // localStorage.setItem("expire": Date.now()+1000)
    return true;
  }

  //to check user is login or not
  isLoggedIn(){
    let token= localStorage.getItem("token")
    if(token==undefined || token==='' || token==null){
      return false;
    }else{
      return true;
    }
  }

  //for logout
  logout(){
    localStorage.removeItem('token')
    return true
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token")
  }
}
