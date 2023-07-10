import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenService } from './token.services';

@Injectable({
    providedIn: 'root'
  })

  export class Authservices {

    constructor(private router:Router,private tokenService:TokenService) { }

    isLoggedIn(){
        return !!this.getAccessToken()
    }

    addUsername(username:string){
        localStorage.setItem('username',username);
      }
    
      addAccessToken(accessToken:any){
        localStorage.setItem('accessToken', JSON.stringify(accessToken));
        // localStorage.setItem('accessToken', accessToken);
      }
      
      getAccessToken(){
        return localStorage.getItem('accessToken');
      }
    
      getUsername(){
        return localStorage.getItem('username');
      }

      logout(){
        localStorage.removeItem("username");
        localStorage.removeItem("accessToken");
        this.router.navigate(['/login']);
     }

     getUserRole(){
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(this.getAccessToken()??"");
        if(decodedToken){
        const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/roles'];
        console.log(role);  
        return role; 
        }
        return "";
      }

  }