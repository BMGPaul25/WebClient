import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDishesComponent } from '../../views/list-dishes/list-dishes.component';



@NgModule({
  declarations: [
    ListDishesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    ListDishesComponent
  ]
})
export class DishesModule { }
