import {Content} from './content-interface';

export class ContentList {
  private _content: Content[];

  constructor(content: Content) {
    this._content = [];
    this._content[0] = content;
  }

  getContent(): Content[] {
    return this._content;
  }

  addContent(content: Content): void {
    this.getContent().push(content);
  }

  contentSize(): number {
    return this._content.length;
  }

  outputHtml(input: number): string {
   if (input <= this.contentSize()) {
    return `<h1>ID: ${this._content[input].id}</h1>
                <h3>${this._content[input].author}</h3>
                <img src="${this._content[input].imgUrl}" alt="${this._content[input].author}" width="250" height="300">
                <p>${this._content[input].type}</p>\n
                <p>${this._content[input].title}</p>\n
                <p>${this._content[input].body}</p>\n`;
   } else {
       return `<div>Sorry but there is no such item! ${input} ${this.contentSize()}</div>`;
   }
  }
}


