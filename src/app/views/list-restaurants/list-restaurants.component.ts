import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Restaurant } from 'src/app/models/Restaurant';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit{
  restaurant : Restaurant = new Restaurant();
  ngOnInit(): void {
    this.getMenus();
  }
  menus : any = [{Id:1, Nombre: 'menu1', Categoria:'desayunos'}, {Id: 2, Nombre: 'menu2', Categoria: 'almuerzos'}, {Id: 3, Nombre:'menu3', Categoria:'cenas'}];

  async getMenus(){
    try{
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
      this.menus = response.data;
      console.log(response);
    }
    catch(error)
    {
      console.error(error)
    }
  }
}
