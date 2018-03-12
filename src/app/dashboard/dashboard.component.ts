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
    this.dataService.getAllBooks().subscribe(
      (data: Book[]) => this.allBooks = data,
      (err: any) => console.log(err),
      () => console.log('Done getting all books!!!')
    );
    this.dataService.getAllReaders().subscribe(
      (data: Reader[]) => this.allReaders = data,
      (err: any) => console.log(err),
      () => console.log('Done getting all readers!!!')
    );
    this.mostPopularBook = this.dataService.mostPopularBook;
    this.title.setTitle(`Angular HTTP Communication ${VERSION.full}`);
  }

  deleteBook(bookID: number): void{
    this.dataService.deleteBook(bookID)
      .subscribe(
        (data: void) => {
          let index: number = this.allBooks.findIndex(book => book.bookID === bookID);
          this.allBooks.splice(index, 1);
        },
        (err: any) => console.log(err)
      );
  }

  deleteReader(readerID: number): void{
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
