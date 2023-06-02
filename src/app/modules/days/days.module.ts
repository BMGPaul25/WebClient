import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDaysComponent } from 'src/app/views/list-days/list-days.component';



@NgModule({
  declarations: [
    ListDaysComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListDaysComponent
  ]
})
export class DaysModule { }
