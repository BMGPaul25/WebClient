import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMenusComponent } from 'src/app/views/list-menus/list-menus.component';



@NgModule({
  declarations: [
    ListMenusComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListMenusComponent
  ]
})
export class MenusModule { }
