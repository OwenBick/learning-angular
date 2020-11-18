import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {UPCOMING_GAMES} from '../helper-files/contentDB';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getUpcomingGamesObs(): Observable<Content[]>{
    this.messageService.add('Content retrieved!');
    return of(UPCOMING_GAMES);
  }
}
