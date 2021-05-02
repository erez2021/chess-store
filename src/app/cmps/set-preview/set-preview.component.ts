import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetService } from 'src/app/services/set.service';
import {Set} from '../../models/set'

@Component({
  selector: 'app-set-preview',
  templateUrl: './set-preview.component.html',
  styleUrls: ['./set-preview.component.scss']
})
export class SetPreviewComponent implements OnInit {

  @Input() set: Set
isSaved: boolean = false
  constructor(private router: Router, private setService:SetService) { }

  ngOnInit(): void {
  }
  saveSet(setId) {
    this.isSaved = !this.isSaved
    this.setService.saveSet(setId)
  }

  get togglePic() {
    var img1 = "../../assets/icons/savewhite.png";
    var img2 = "../../assets/icons/save.png";
    return this.isSaved ? img2 : img1;
  }



}
