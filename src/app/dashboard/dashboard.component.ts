import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

import { Book } from '../models/book';
import { Reader } from '../models/reader';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private dataService: DataService, private title: Title) { }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;
    this.title.setTitle(`Angular HTTP Communication ${VERSION.full}`);
  }

  deleteBook(bookID: number): void{
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void{
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
