import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import {SetService} from './set.service'

@Injectable({
  providedIn: 'root'
})
export class SetResolverService {

  constructor(private setService: SetService) { }

  resolve(route: ActivatedRouteSnapshot){
    const {id} = route.params
    return this.setService.getSetById(id)
}
}
