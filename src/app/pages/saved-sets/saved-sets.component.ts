import { Component, OnInit } from '@angular/core';
import { SetService } from 'src/app/services/set.service';
import {Set} from '../../models/set'

@Component({
  selector: 'app-saved-sets',
  templateUrl: './saved-sets.component.html',
  styleUrls: ['./saved-sets.component.scss']
})
export class SavedSetsComponent implements OnInit {

items: Array<object>= []
  constructor(private setService: SetService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('savedSets'))
    
  }
  removeFromSaved(itemId: string){  
    this.setService.removeFromSaved(itemId)
    this.items = JSON.parse(localStorage.getItem('savedSets'))
 }
 removeSaved() {
   this.items = []
  this.setService.saveItemsToStorage(this.items)
 }
}
