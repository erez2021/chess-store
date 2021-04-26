import { Injectable } from '@angular/core';
import { Set} from '../models/set'
import { Observable, BehaviorSubject , throwError, of} from 'rxjs';

const SETS = [
  {
    _id: 'u101',
    name: 'Wooden Chess Set',
    price: 18.80,
    description: 'Made from great materils, designed hand made. the best quality you can achive. lukury pieces to place at home.',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/products/the-championship-chess-set-combo-21183685505_medium.jpg?v=1603145282',
    inStock: true,
    onSale: false
  },
  {
    _id: 'u102',
    name: 'Club Chess Set',
    price: 13.70,
    description: 'For all players , in all levels. easy and fun playing with them. made from plastic, last for many years and don\'t change color with time passed..',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/products/basic-club-chess-set-21184143297_medium.jpg?v=1575932029', 
    inStock: true,
    onSale: true
  },
  {
    _id: 'u103',
    name: 'Giant Chess',
    price: 180.90,
    description: 'Great pleasure for kids, it\'s an adventure playing with them and move them. can put it on yard or anywhre outside.',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/collections/DSC06623-resort-giant-chess_medium.jpg?v=1563395757',
    inStock: true,
    onSale: false
  },
  {
    _id: 'u104',
    name: 'Electronic Chess Set',
    price: 99.90,
    description: 'Play against a computer, very comfortable to play with. suits for all levels from beginners to masters. try it and you can\'t stop playing with it.',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/collections/Electronics-banner_651088d5-c25f-49d7-a29c-a92b955c6d71_medium.jpg?v=1563395881',
    inStock: true,
    onSale: true
  },
  {
    _id: 'u105',
    name: 'Travel Chess Set',
    price: 7.50,
    description: 'Small chess set that you can take anywhere you want. with magnets so you can play even in car when traveling. kids love it!',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/products/9-milled-leather-travel-magnetic-chess-set-with-wood-pieces-21377967169_medium.jpg?v=1606364347',
    inStock: true,
    onSale: true
  },
  {
    _id: 'u106',
    name: 'Chess table',
    price: 120.50,
    description: 'An elegantic chess table made from quality real wood. hand made. designed by an artist. can order with wood pieces and board.',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/collections/JLPWT2-25_medium.jpg?v=1563397395',
    inStock: false,
    onSale: false
  },
  {
    _id: 'u107',
    name: 'Chess For 3',
    price: 59.90,
    description: 'A very competetive game for 3 players. different strategy. develop team play and long lasting thinking. ',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/products/large-3-player-chess-set-22627803521_600x.jpg?v=1575932088',
    inStock: true,
    onSale: true
  },
  {
    _id: 'u108',
    name: 'Blind Chess Set',
    price: 30.50,
    description: 'Designed for blind people. very abstract pieces with special board that you can feel the squares. can buy with special chess clock',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/products/wooden-chess-set-for-the-visually-impaired-3-75-king-14480733306967_medium.jpg?v=1597179594',
    inStock: true,
    onSale: false
  },
  {
    _id: 'u109',
    name: 'Unique Chess Set',
    price: 155.50,
    description: 'Designed from the best materials there is. Great to put on th eliving room or play with geusts. different designs and very unique',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/collections/Unique-Chess-Sets_medium.jpg?v=1563394159',
    inStock: true,
    onSale: false
  },
  {
    _id: 'u110',
    name: 'Plastic Chess Set',
    price: 15.90,
    description: 'Very light pieces, comfortable to play with. long lasting and not breaking easily. great for children and adults',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/collections/E100G-3_medium.jpg?v=1563394879',
    inStock: true,
    onSale: false
  },
  {
    _id: 'u111',
    name: 'Silicone Chess Set',
    price: 22.50,
    description: 'Cool silicone pieces. new in market. the pieces never break, very light and fun to play with. great for small children also.',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/products/chess-set-combo-7-golden-peru-1240000331814_medium.jpg?v=1575932153',
    inStock: true,
    onSale: true
  },
  {
    _id: 'u112',
    name: 'Marble Chess Set',
    price: 234.50,
    description: 'Designed from luxury marble. every piece is designed seperatly and carefuly. Suits for chess lovers who want to show it to everyone',
    img: 'https://cdn.shopify.com/s/files/1/1297/3303/products/16-marble-chess-set-in-coral-and-red-21183606081_medium.jpg?v=1575932005',
    inStock: false,
    onSale: false
  },
]

@Injectable({
  providedIn: 'root'
})
export class SetService {

  
  private _setsDb: Set[] = SETS;
  private _sets$ = new BehaviorSubject([])
  public sets$ = this._sets$.asObservable()
  public filterBy= {
    term: ''
  }

  constructor() { }

  public loadsets(filterBy = null): void {
    let sets = this._setsDb;
    if (filterBy && filterBy.term) {
      sets = this._filter(sets, filterBy.term)
    }
    this._sets$.next(sets)
  }

  public getSetById(id: string): Observable<Set> {
    const set = this._setsDb.find(set => set._id === id)
    return set ? of(set) : throwError(`Set id ${id} not found!`)
  }

  private _sort(sets: Set[]): Set[] {
    return sets.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }

  
  private _filter(sets: Set[], term) {
    term = term.toLocaleLowerCase()
    return sets.filter(set => {
      return set.name.toLocaleLowerCase().includes(term) 

    })
  }

}







  

 









