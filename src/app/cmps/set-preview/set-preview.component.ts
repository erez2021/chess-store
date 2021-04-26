import { Component, Input, OnInit } from '@angular/core';
import {Set} from '../../models/set'

@Component({
  selector: 'app-set-preview',
  templateUrl: './set-preview.component.html',
  styleUrls: ['./set-preview.component.scss']
})
export class SetPreviewComponent implements OnInit {

  @Input() set: Set

  constructor() { }



  ngOnInit(): void {
  }

}
