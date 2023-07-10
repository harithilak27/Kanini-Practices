import { Component } from '@angular/core';
import { HotelService } from '../Hotel.service';

@Component({
  selector: 'app-allhotels',
  templateUrl: './allhotels.component.html',
  styleUrls: ['./allhotels.component.css']
})
export class AllhotelsComponent {
  public hotels: any;
  constructor(private service: HotelService) { }

  ngOnInit(): void {
    this.getHotels();
  }

  private getHotels(): void {
    this.service.geteventupdate().subscribe(result => {
      this.hotels = result;
      console.log(this.hotels);
    });
  }
}
