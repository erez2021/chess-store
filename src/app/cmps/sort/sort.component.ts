import { Component, OnInit , Input} from '@angular/core';
import { Set} from '../../models/set'
import {SetService} from '../../services/set.service'

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  constructor(private setService: SetService) { }

  @Input() sets: Set[]

  ngOnInit(): void {
  }

  sortByName(){
    this.setService.sort(this.sets)
  }

  sortByPrice() {
this.sets.sort((a, b) => a.price - b.price); 
  }
}
