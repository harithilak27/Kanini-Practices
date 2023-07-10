import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { LoginResponseModel } from '../model/login-response';
import { RefreshTokenRequest } from '../model/token-response';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = (environment.baseUrl+'/Token');
  
//   generateToken(data:LoginResponseModel){
//     const url= this.baseUrl;
//     return this.http.post<LoginResponseModel>(url,data);
//   }

  generateRefreshToken(model:LoginResponseModel){
    return this.http.post<LoginResponseModel>(this.baseUrl,model);
  }
}
