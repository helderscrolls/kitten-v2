import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private firebase: AngularFireDatabase) {

  }

  storeMakeupList(formValue) {
    const db = this.firebase.list('makeup-kitten-story');
    db.push(formValue);
  }

  retrieveMakeupList() {
    return this.firebase.list('makeup-kitten-story').valueChanges();
  }
}


  // makeupList = [
  //   {
  //     name: 'Desert Dusk',
  //     brand: 'Huda Beauty',
  //     date: '2017',
  //     img:
  //       'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwa0d573da/images/hi-res/SKU/SKU_5/407400_swatch.jpg'
  //   },
  //   {
  //     name: 'Gloss',
  //     brand: 'Fenty Beauty',
  //     date: '2018',
  //     img:
  //       'https://www.sephora.fr/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw17dc0d7f/images/hi-res/SKU/SKU_5/398410_swatch.jpg'
  //   },
  //   {
  //     name: 'Mascara',
  //     brand: 'Urban Decay',
  //     date: '2015',
  //     img:
  //       'data:image/jpeg;base64,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'
  //   }
  // ];

  // storeMakeupList() {
  //   const newMakeupList = this.makeupList;
  //   localStorage.setItem('makeupList', JSON.stringify(newMakeupList));
  // }

  // retrieveMakeupList() {
  //   return JSON.parse(localStorage.getItem('makeupList') || '[]');
  // }

