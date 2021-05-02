import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { SetService } from '../../services/set.service'
import {  Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: User

  constructor(private setService: SetService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.setService.getEmptyUser()
  }

  signup() {
    this.setService.saveUserToStorage(this.user)
    window.location.reload()
    this.router.navigateByUrl("/")
  }

}
