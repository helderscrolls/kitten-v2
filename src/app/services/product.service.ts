import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  dogList = [
    {
      name: 'Bob',
      race: 'Shiba',
      age: 69,
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description:
        "Le shiba est une race de chien originaire du Japon. C'est un chien de petite taille de type spitz."
    },
    {
      name: 'Dada',
      race: 'Pitbull',
      age: 369,
      img: 'https://placedog.net/500',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet pulvinar elit. Praesent laoreet risus elit, eget faucibus arcu malesuada quis. Donec vel erat eleifend, dignissim risus at, faucibus justo. Etiam tempor arcu eu orci eleifend interdum. Etiam scelerisque sapien nec euismod lacinia. Aenean bibendum risus consequat risus ornare auctor. Donec pharetra metus nunc, eget vestibulum neque fringilla et. Aenean turpis leo, semper sed nibh quis, vestibulum cursus sapien. Sed bibendum porta quam, mattis pellentesque ligula tristique et. Etiam semper dui sit amet quam varius gravida.'
    },
    {
      name: 'Toto',
      race: 'Marseillais',
      age: 169,
      img: 'https://placedog.net/600',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet pulvinar elit. Praesent laoreet risus elit, eget faucibus arcu malesuada quis. Donec vel erat eleifend, dignissim risus at, faucibus justo. Etiam tempor arcu eu orci eleifend interdum. Etiam scelerisque sapien nec euismod lacinia. Aenean bibendum risus consequat risus ornare auctor. Donec pharetra metus nunc, eget vestibulum neque fringilla et. Aenean turpis leo, semper sed nibh quis, vestibulum cursus sapien. Sed bibendum porta quam, mattis pellentesque ligula tristique et. Etiam semper dui sit amet quam varius gravida.'
    }
  ];

  storeDogList() {
    const newDogList = this.dogList;
    localStorage.setItem('dogList', JSON.stringify(newDogList));
  }

  retrieveDogList() {
    return JSON.parse(localStorage.getItem('dogList') || '[]');
  }
}
