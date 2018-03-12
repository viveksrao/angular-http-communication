import { Component, OnInit } from '@angular/core';

import { Book } from "../models/book";
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  saveBook(formValues: any): void{
    let newBook: Book = <Book>formValues;
    newBook.bookID = 0;
    console.log(newBook);
    this.dataService.addBook(newBook)
      .subscribe(
        (data: Book) => console.log(data),
        (err: any) => console.log(err)
      );
  }

}
