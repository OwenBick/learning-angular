import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {log} from 'util';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  upcomingGames: Content[];

  constructor() {
    this.upcomingGames = [{
      id: 1,
      author: 'Bluepoint Games, and SIE Japan Studio',
      imgUrl: 'https://www.siliconera.com/wp-content/uploads/2020/09/Demons-Souls-Screenshots-and-PS5-Box-Art-from-Amazon-Australia-Siliconera-6-710x400.jpg',
      type: 'Action RPG',
      title: 'Demon Souls',
      body: 'Demon\'s Souls is an action role-playing game where players take on the role of an adventurer, whose gender and appearance are customized at the beginning of the game, exploring the cursed land of Boletaria.',
      tags: ['Playstation Exclusive', ' Action RPG', ' Souls-like']
    }, {
        id: 2,
      author: 'Insomniac Games',
      imgUrl: 'https://assets-prd.ignimgs.com/2020/07/31/spiderman-miles-morales-ps5-box-1596160170734.jpg',
      type: 'Fantasy',
        title: 'Marvel\'s Spider-Man: Miles Morales',
        tags: ['Playstation Exclusive', ' Action-adventure', ' Single-Player'],
      body: 'Marvel\'s Spider-Man: Miles Morales is an upcoming action-adventure game developed by Insomniac Games and published by Sony Interactive Entertainment for the PlayStation 4 and PlayStation 5.'
    }, {
        id: 3,
        author: 'Cloud Imperium Games',
        type: 'Action RPG',
        imgUrl: 'https://robertsspaceindustries.com/rsi/static/images/S42-fb.jpg',
        title: 'Squadron 42',
        body: 'Squadron 42 is a story-based single-player game set in the Star Citizen fictional universe described by the developers as a "spiritual successor to Wing Commander". The game boasts big name actors like Mark Hamill, Gary Oldman, Henry Cavill, Mark Strong, John Rhys-Davies, and more...',
        tags: ['PC Exclusive', ' Single-Player', ' Space opera', ' FPS', ' Action RPG']
      }, {
        id: 4,
        author: 'CD Project RED',
        imgUrl: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/06/EbX8hZdWoAEX7xC.jpg',
        type: 'Action RPG',
        title: 'Cyberpunk 2077',
        body: 'Cyberpunk 2077 is an upcoming action role-playing video game developed and published by CD Projekt. It is scheduled to be released for PlayStation 4, Windows, and Xbox One in November 2020, Stadia by the end of the year, and PlayStation 5 and Xbox Series X/S in 2021.',
        tags: ['PlayStation 5', ' Xbox Series X and Series S', ' Google Stadia', ' Xbox One', ' Microsoft Windows']
      }, {
        id: 5,
        author: '343 Industries',
        title: 'Halo Infinite',
        type: 'FPS',
        body: 'Halo Infinite is an upcoming first-person shooter game developed by 343 Industries and published by Xbox Game Studios for Microsoft Windows, Xbox One, and Xbox Series X and Series S.'
      }];
  }

  ngOnInit(): void {

  }

  submitInput(title: string): void {
    let matchFound = false;
    const gameInfo: string[] = [];
    for (const upcomingGame of this.upcomingGames) {
        if (upcomingGame.title === title) {
          matchFound = true;
          gameInfo[0] = upcomingGame.title;
          gameInfo[1] = upcomingGame.author;
        }
    }
    if (matchFound) {
      console.log(`The game "${gameInfo[0]}" is an upcoming game created by ${ gameInfo[1] }. `);

    } else {
      console.log(`The game "${title}" was not found! Make sure you entered it correctly.`);
    }
  }


}
