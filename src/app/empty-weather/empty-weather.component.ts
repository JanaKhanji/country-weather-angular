import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'empty-weather',
  templateUrl: './empty-weather.component.html',
  styleUrls: ['./empty-weather.component.css']
})
export class EmptyWeatherComponent implements OnInit {
  blocks=[1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
