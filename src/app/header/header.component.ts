import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

cart!:Cart;

constructor(private cs:CartService){
  this.setCCart();
}

setCCart(){
  this.cart = this.cs.getCart();
}

}




