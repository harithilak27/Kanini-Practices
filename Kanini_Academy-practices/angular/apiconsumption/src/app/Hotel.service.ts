import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private basepath = "https://localhost:7031";

  constructor(private http:HttpClient) { }

  public getAllHotels():Observable<any>
  {
    return this.http.get(this.basepath + "/api/Token");
  }


//   public getHotelsById(id:number):Observable<any>
//   {
//     var path = this.basepath + "/api/Admin/Hotels" + id;
//     console.log(path)
//     return this.http.get(path);
//   }

//   public AddNewHotel(hotel : any):Observable<any>
//   {
//     return this.http.post(this.basepath + "/api/Admin/Hotels", hotel);
//   }

}