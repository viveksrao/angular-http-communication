import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BooksResolverService } from './core/books-resolver.service';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, resolve: { resolvedBooks: BooksResolverService} },
  { path: 'addbook', component: AddBookComponent },
  { path: 'addreader', component: AddReaderComponent },
  { path: 'editreader/:id', component: EditReaderComponent },
  { path: 'editbook/:id', component: EditBookComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
