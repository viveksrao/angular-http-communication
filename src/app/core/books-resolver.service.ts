import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Book } from '../models/book';
import { DataService } from './data.service';
import { BookTrackerError } from '../models/book-tracker-error';



@Injectable()
export class BooksResolverService implements Resolve<Book[] | BookTrackerError> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[] | BookTrackerError>{
    return this.dataService.getAllBooks()
      .pipe(
        catchError(err => of(err))
      );
  }

}
