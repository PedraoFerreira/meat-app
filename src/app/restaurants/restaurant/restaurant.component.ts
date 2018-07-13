import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestantantComponent implements OnInit {

  @Input() restaurant: Restaurant 

  constructor() { }

  ngOnInit() {
  }

}
