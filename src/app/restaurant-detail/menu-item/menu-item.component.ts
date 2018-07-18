import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  menuItens: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.menuItens = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
