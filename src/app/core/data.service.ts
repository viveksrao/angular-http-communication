import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { allBooks, allReaders } from '../data';
// import { LoggerService } from './logger.service';
import { Reader } from '../models/reader';
import { Book } from '../models/book';
import { BookTrackerError } from '../models/book-tracker-error';



@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void{
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[]{
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getBookById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }

}
