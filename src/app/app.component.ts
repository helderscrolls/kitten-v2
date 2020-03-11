import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyB71V666Df3hJg_2oPpx5u_uVzH0ScEZis',
      authDomain: 'makeup-kitten-story.firebaseapp.com',
      databaseURL: 'https://makeup-kitten-story.firebaseio.com',
      projectId: 'makeup-kitten-story',
      storageBucket: 'makeup-kitten-story.appspot.com',
      messagingSenderId: '422780819212',
      appId: '1:422780819212:web:9063aa3f5651decb265b29'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
