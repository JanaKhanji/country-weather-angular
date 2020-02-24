import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { CityService } from '../city.service';

@Component({
  selector: 'country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {
  cities: any;
  countryName: string;
  selectedcity: any;
  message = '';
  subscription: Subscription;

  constructor(private http: HttpClient, private CityService: CityService) { }

  ngOnInit(): void {
  }

  getcities() {
    this.fixCountryName();
    this.http.get('http://localhost:3000/Sheet1?country=' + this.countryName)
      .subscribe(
        x => {
          this.cities = x;
          if (!this.cities.length) {
            this.message = "could not find this country, search again !";
            this.countryName = '';
            this.cities = [];
          }
          else {
            this.cities = this.cities.slice(0, 5);
            this.message = '';
          }
        })
  }

  onSelect(city: object) {
    this.selectedcity = city;
    this.CityService.sendMessage(city);
  }


  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  fixCountryName() {
    let x = this.countryName.split(" ");
    this.countryName = "";
    x.forEach(element => {
      this.countryName = this.countryName + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()+" ";
    })
    this.countryName = this.countryName.slice(0, this.countryName.length - 1)
  }
}
