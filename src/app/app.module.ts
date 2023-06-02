import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { DishesModule } from './modules/dishes/dishes.module';
import { MenusModule } from './modules/menus/menus.module';
import { DaysModule } from './modules/days/days.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantsModule,
    DishesModule,
    MenusModule, 
    DaysModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
