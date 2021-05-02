import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterBy = {
    term: ''
  }
  constructor() { }

  @Output() onSetFilter = new EventEmitter<any>()

  ngOnInit(): void {
  }
setFilter() {
  this.onSetFilter.emit(this.filterBy)
}
}
