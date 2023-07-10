import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  temperature: temperature = new temperature;

  result: string = "";

  ngOnInit() {
      this.temperature = { 
      temp: 0,
      options: ""
    };
  }

  onSubmit(temperature:NgForm){
    console.log(this.temperature.temp); 
    console.log(this.temperature.options);

    if(this.temperature.options == "Farhenheit"){
      this.result = `celsius =  ${(this.temperature.temp - 32) * 5/9}°C `;
    }

    if(this.temperature.options == "celsius"){
      this.result = `farhenheit =  ${(this.temperature.temp - 9/5) + 32}°F `;
    }
    console.log(this.result);
  }

}
export class temperature{
  temp = 0;
  options = " ";
}