import { Component, OnInit } from '@angular/core';
import { SetService } from '../../services/set.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Set } from '../../models/set'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  sets$: Observable<Set[]>
  private filterBy = {
    term: ''
  }
  constructor(private setService: SetService, private router: Router) { }

  ngOnInit(): void {
    this.setService.loadsets(this.filterBy)
    this.sets$ = this.setService.sets$
  }
  onSetFilter(filterBy) {
    this.filterBy = filterBy
    this.setService.loadsets(this.filterBy)
    this.sets$ = this.setService.sets$

  }

}
