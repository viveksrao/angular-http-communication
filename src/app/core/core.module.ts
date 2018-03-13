import { NgModule, ErrorHandler, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { PlainLoggerService } from './plain-logger.service';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { BookTrackerErrorHandlerService } from './book-tracker-error-handler.service';
import { BooksResolverService } from './books-resolver.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LoggerService,
    DataService,
    PlainLoggerService,
    {
      provide: ErrorHandler, useClass: BookTrackerErrorHandlerService
    },
    BooksResolverService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf()  parentModule: CoreModule){
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
