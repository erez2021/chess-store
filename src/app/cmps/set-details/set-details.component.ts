import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Set } from '../../models/set'
import { SetService } from '../../services/set.service'

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrls: ['./set-details.component.scss']
})
export class SetDetailsComponent implements OnInit {
  items: Array<object> = []
  set: Set
  isModal: boolean =false
  isFullDesc: boolean = false
  subscription: Subscription

  constructor(private route: ActivatedRoute, private router: Router, private setService: SetService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('items'))
    if (!this.items || !this.items.length ) this.items = []
    this.subscription = this.route.data.subscribe(data => {
      console.log(this.route.data);
      this.set = data.set
      console.log(this.set);

    })
  }
  addToCart(set: Set) {
    if (!set.inStock) {
      alert('Out Of stock...')
      setTimeout(() =>{
        this.router.navigateByUrl('')
      }, 1000)
      return
    }
    const item = this.setService.addItemToCart(set)
    this.items.push(item)
    this.setService.saveToStorage(this.items)
    this.isModal = true
    setTimeout(() =>{
      this.router.navigateByUrl("cart")
    }, 2000)
  }
  toggleDesc() {
    this.isFullDesc = !this.isFullDesc
}
  get fullPrice() {
    return (this.set.price * 1.2).toFixed(1)
  }

  get getDesc() {
    const strToshow = this.set.description.length <= 100 ? this.set.description : `${this.set.description.substr(0,99)}...`
    return strToshow
  }
  get moreOrLess() {
    if (this.isFullDesc) return 'Less'
    return 'More'
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
