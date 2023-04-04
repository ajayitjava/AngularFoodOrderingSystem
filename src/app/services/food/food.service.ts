import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number) : Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{

    if(tag == 'All')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
    // you can write this statement is very simple type
  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:12},
      {name:'FastFood',count:7},
      {name:'Pizza',count:2},
      {name:'Lunch',count:4},
      {name:'SlowFood',count:3},
      {name:'Hamburger',count:1},
      {name:'Soup',count:1},
    ];
  }

  getAll():Foods[]{
    /*return [
      '/assets/food-1.jpg',
      '/assets/food-2.webp',
      '/assets/food-3.jpg',
      '/assets/food-4.webp',
      '/assets/food-5.jpg',
      '/assets/food-6.webp',
      '/assets/food-7.webp',
      '/assets/food-8.webp',
    ]*/

    return [
      {
        id:1,
        name:'Chicken Biryani',
        cookTime: '10-20',
        price:350,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl: '/assets/food-1.jpg',
        tags:['SlowFood','Lunch'],
      },
      {
        id:2,
        name:'Veg Thali',
        cookTime: '10-20',
        price:100,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl: '/assets/food-2.webp',
        tags:['FastFood','Lunch'],
      },
      {
        id:3,
        name:'Idli Sanbar',
        cookTime: '10-20',
        price:60,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl: '/assets/food-3.webp',
        tags:['FastFood',],
      },
      {
        id:4,
        name:'Poori Bhaji ',
        cookTime: '10-20',
        price:50,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl: '/assets/food-4.webp',
        tags:['SlowFood'],
      },
      {
        id:5,
        name:'Cheese Pizza',
        cookTime: '10-20',
        price:150,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl: '/assets/food-5.jpg',
        tags:['FastFood','Pizza'],
      },
      {
        id:6,
        name:'Veg Hamburger',
        cookTime: '10-20',
        price:100,
        favorite:false,
        origins:['USA'],
        star:4.5,
        imageUrl: '/assets/food-6.webp',
        tags:['Hamburger'],
      },
      {
        id:7,
        name:'Olive Pizza',
        cookTime: '10-20',
        price:200,
        favorite:false,
        origins:['italy'],
        star:4.5,
        imageUrl: '/assets/food-7.jpg',
        tags:['FastFood','Pizza'],
      },
      {
        id:8,
        name:'Egg Salad',
        cookTime: '10-20',
        price:120,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl: '/assets/food-8.jpg',
        tags:['FastFood'],
      },
      {
        id:9,
        name:'Chicken Soup',
        cookTime: '10-20',
        price:80,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl: '/assets/food-9.jpg',
        tags:['Soup'],
      },
      {
        id:10,
        name:'Hydrabadi Biryani',
        cookTime: '10-20',
        price:350,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl: '/assets/food-10.jpg',
        tags:['Lunch','SlowFood'],
      },
      {
        id:11,
        name:'Fruit Salad',
        cookTime: '10-20',
        price:160,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl: '/assets/food-11.jpg',
        tags:['FastFood'],
      },
      {
        id:12,
        name:'Noodles',
        cookTime: '10-20',
        price:120,
        favorite:false,
        origins:['china'],
        star:4.5,
        imageUrl: '/assets/food-12.jpg',
        tags:['FastFood','Lunch'],
      }

    ];
  }

}
