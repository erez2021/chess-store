import { Component, OnInit } from '@angular/core';
import {Set} from '../../models/set'
import {Item} from '../../models/item'
import {SetService} from '../../services/set.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

items: Array<object>= []
item: Item
  constructor(private setService: SetService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('items'))
   
  }
  removeFromCart(itemId: string){  
    this.setService.removeFromCart(itemId)
    this.items = JSON.parse(localStorage.getItem('items'))
 }
 clearCart(){
   this.items = []
   this.setService.saveToStorage(this.items)
 }

  get totalPrice() {
    var total = this.items.reduce((acc,set:Set) =>{
      return acc+set.price
    },0) 
return total
}
}