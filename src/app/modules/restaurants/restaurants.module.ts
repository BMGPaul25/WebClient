import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRestaurantsComponent } from '../../views/list-restaurants/list-restaurants.component';



@NgModule({
  declarations: [
    ListRestaurantsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListRestaurantsComponent
  ]
})
export class RestaurantsModule { }
