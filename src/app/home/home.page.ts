import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products = [
    {
      name:"CocaCola",
      price:20,
      type:"Abarrotes"
    },
    {
      name:"Jabón Zote",
      price:30,
      type:"Limpieza"
    },
    {
      name:"Croquetas 50kg",
      price:400,
      type:"Mascotas"
    },
    {
      name:"Zucaritas 500g",
      price:100,
      type:"Abarrotes"
    }
  ];//Arreglo de objetos

  public filterProducts = [...this.products];

  constructor() {}

  getColor(type: string): string{
    let color="";
    switch(type){
      case "Abarrotes":
        color="primary";
        break;
      case "Limpieza":
        color="success";
        break;
      case "Mascotas":
        color="warning";
        break;
      default:
        return "primary";
    }
    return color;
  }

  onSearchChange(event: any) {
    this.filterProducts = this.products.filter((product) =>
      product.type.toLowerCase().startsWith(event.detail.value.toLowerCase())
    );
  }

}
