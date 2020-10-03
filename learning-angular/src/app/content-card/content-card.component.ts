import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList;
  outputHtml: string;


  constructor() {
    this.contentList = new ContentList({
      id: 1,
      author: 'George R.R Martin',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg/800px-Portrait_photoshoot_at_Worldcon_75%2C_Helsinki%2C_before_the_Hugo_Awards_%E2%80%93_George_R._R._Martin.jpg',
      type: 'Fantasy',
      title: '<b>The Winds of Winter</b>',
      body: 'The Winds of Winter is the planned sixth novel in the epic fantasy series A Song of Ice and Fire<br> by American writer George R. R. Martin. <br>Martin believes the last two volumes of the series will total over 3,000 manuscript pages.'
    });
    this.contentList.addContent({
      id: 2,
      author: 'Dr. Seuss',
      imgUrl: 'https://bsp-static.playbill.com/dims4/default/40c9726/2147483647/crop/684x816%2B0%2B13/resize/300x358%3E/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Fd6%2F56%2Fa0b414c24f0cb13606d4122f930a%2Ftheodorseussgeisel-headshot-hr.jpg',
      type: 'Children Books',
      title: '<b>Green Eggs and Ham</b>',
      body: 'Green Eggs and Ham is a children\'s book by Dr. Seuss, first published on August 12, 1960. As of 2019, the book has sold 8 million copies worldwide'
    });
    this.contentList.addContent({
      id: 3,
      author: 'J. R. R. Tolkien',
      imgUrl: 'https://www.tolkiensociety.org/app/uploads/2016/11/pamela_chandler_tolkien1-290x366.jpg',
      type: 'Fantasy',
      title: '<b>The Lord of the Rings</b>',
      body: 'The Lord of the Rings is an epic high fantasy novel by the English author and scholar J. R. R. Tolkien. Set in Middle-earth,<br> the world at some distant time in the past, the story began as a sequel to Tolkien\'s 1937 children\'s book The Hobbit, but eventually developed into a much larger work.'
    });

    this.outputHtml = this.contentList.outputHtml(0) + this.contentList.outputHtml(1) + this.contentList.outputHtml(2);
  }

  ngOnInit(): void {
  }

}
