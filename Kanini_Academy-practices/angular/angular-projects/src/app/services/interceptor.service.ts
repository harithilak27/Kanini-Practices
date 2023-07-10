import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Authservices } from './auth.services';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService = this.injector.get(Authservices);
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.getAccessToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
