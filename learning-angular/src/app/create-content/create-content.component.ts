import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newGameEvent = new EventEmitter<Content>();
  newGame: Content;
  screenMessage: string;

  constructor() {
    this.newGame = {
      id: 0,
      title: '',
      author: '',
      body: '',
      imgUrl: '',
      type: '',
      tags: []
    };
  }

  ngOnInit(): void {
        this.newGame.title = '';
    }

  addGame(): void {
    const promise = new Promise((success, fail) => {
      if (this.newGame.id == null || this.newGame.title.trim() === '' || this.newGame.author.trim() === '' || this.newGame.body.trim() === '' || this.newGame.type.trim() === ''){
        fail('Please fill in all the required fields!');
      } else {
        console.log('Admission successful', this.newGame.title, this.newGame.author);
        this.newGameEvent.emit(this.newGame);
        this.screenMessage = '';
        success();
      }
    });
    promise.then(successResult => this.screenMessage).catch(failResult => this.screenMessage = failResult);
  }
}
