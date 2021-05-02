import { Component, OnInit,OnChanges } from '@angular/core';
import { User } from '../../models/user'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {

  user:User
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'))
  }
  ngOnChanges(changes): void {
console.log(changes);

    // this.user = JSON.parse(localStorage.getItem('user'))
  }

}
