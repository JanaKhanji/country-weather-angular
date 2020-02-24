import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrySearchComponent } from './country-search/country-search.component';
import { CityweatherComponent } from './cityweather/cityweather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmptyWeatherComponent } from './empty-weather/empty-weather.component';
import { CityinfoComponent } from './cityinfo/cityinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrySearchComponent,
    CityweatherComponent,
    EmptyWeatherComponent,
    CityinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
