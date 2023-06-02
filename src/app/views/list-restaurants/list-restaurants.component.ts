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

  menus2 : any = [{Id:1, Nombre: 'menu1', Categoria:'desayunos'}, {Id: 2, Nombre: 'menu2', Categoria: 'almuerzos'}, {Id: 3, Nombre:'menu3', Categoria:'cenas'}];


  async getMenus(){

    try {
      const menuaux : any = []
      const response = await axios.get('http://localhost:14461/api/personas');
      const response1 = await axios.get('http://localhost:5141/api/personas');
      this.menus = response.data;
      this.menus2 = response1.data;
      console.log(response);
      console.log(response1);
    }
    catch(error)
    {
      console.error(error)
    }
  }
}
