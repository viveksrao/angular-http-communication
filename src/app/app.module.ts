import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AddBookComponent } from "./add-book/add-book.component";
import { AddReaderComponent } from "./add-reader/add-reader.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { EditReaderComponent } from "./edit-reader/edit-reader.component";
import { CoreModule } from "./core/core.module";
import { AddHeaderInterceptor } from "./core/add-header.interceptor";
import { BookTrackerErrorHandlerService } from "./core/book-tracker-error-handler.service";
import { LogResponseInterceptor } from "./core/log-response.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    AddReaderComponent,
    EditReaderComponent,
    EditBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: BookTrackerErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
