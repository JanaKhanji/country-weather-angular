import { Component, OnInit, Input } from '@angular/core';
import { CityService } from '../city.service';

@Component({
  selector: 'cityinfo',
  templateUrl: './cityinfo.component.html',
  styleUrls: ['./cityinfo.component.css']
})
export class CityinfoComponent implements OnInit {
  city: any;
  @Input() icon = '';
  subscription: any;

  constructor(private discityService: CityService) {
    this.getcity();
}

ngOnInit(): void {}

getcity(){
  this.subscription = this.discityService.getMessage()
      .subscribe(message => {
        if (message) {
          this.city = message;
          this.icon='https://lipis.github.io/flag-icon-css/flags/4x3/'+ this.city.iso2.toLowerCase() +'.svg'
        } })
}
}
