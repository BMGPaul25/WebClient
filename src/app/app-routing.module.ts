import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRestaurantsComponent } from './views/list-restaurants/list-restaurants.component';
import { ListDishesComponent } from './views/list-dishes/list-dishes.component';
import { ListMenusComponent } from './views/list-menus/list-menus.component';
import { ListDaysComponent } from './views/list-days/list-days.component';

const routes: Routes = [{path:'', redirectTo:'/restaurants', pathMatch:'full'},
{path:'restaurants', component: ListRestaurantsComponent},
{path:'dishes', component: ListDishesComponent},
{path:'menus', component: ListMenusComponent},
{path:'days', component: ListDaysComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
