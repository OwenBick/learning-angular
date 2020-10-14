import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() game: Content;

  constructor() {
  }

  ngOnInit(): void {

  }

  onImageClickListener(): void {
    console.log(this.game.id);
  }

}
