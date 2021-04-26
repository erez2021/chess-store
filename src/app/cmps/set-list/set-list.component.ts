import { Component, Input, OnInit } from '@angular/core';
import {Set} from '../../models/set'


@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {

  constructor() { }

  @Input() sets: Set[]

  ngOnInit(): void {
  }

}
