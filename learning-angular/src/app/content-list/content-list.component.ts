import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {UPCOMING_GAMES} from '../helper-files/contentDB';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  upcomingGames: Content[];

  constructor(private contentService: ContentService) {
    this.upcomingGames = UPCOMING_GAMES;
  }

  ngOnInit(): void {
    this.contentService.getUpcomingGamesObs().subscribe(games => this.upcomingGames = games);
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
