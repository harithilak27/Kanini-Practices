import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Authservices } from '../services/auth.services';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  frm!:FormGroup;
  
  get f(){
    return this.frm.controls;  // needed for validation in html file 
  }

  constructor( private fb:FormBuilder,private authService:Authservices, private router:Router,private tokenServices:TokenService) { }
  

  onPost(){
    this.tokenServices.generateRefreshToken(this.frm.value).subscribe({
      next: (res: any) => { 
        this.authService.addAccessToken(res.token);
      }
   })
  }


  ngOnInit(): void {
    this.frm= this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })

    if(this.authService.isLoggedIn()){
      this.router.navigate(['./dashboard']);
    }
  }
}
