import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cityweather',
  templateUrl: './cityweather.component.html',
  styleUrls: ['./cityweather.component.css']
})
export class CityweatherComponent implements OnInit {
  subscription: any;
  city: any;
  weathers: any;

  constructor(private discityService: CityService, private http: HttpClient) {
    this.subscription = this.discityService.getMessage()
      .subscribe(message => {
        if (message) {
          this.city = message;
        }
        console.log(this.city)
        this.getWeather();
      });
  }

  ngOnInit(): void {

  }
  getWeather() {
    this.http
      .get("http://api.openweathermap.org/data/2.5/forecast?q=" + this.city.city_ascii + "," + this.city.iso2 + "&APPID=05d7bd1f7af88c88e838a9bb3ba46e8f")
      .subscribe(
        x => { this.weathers = x; }
      )
  }
}
