import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './book/books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { ReaderComponent } from './reader/reader.component';

const routes: Routes = [
  { 
    path: "books", 
    component: BooksComponent,
    children: [
      {
        path: ':page',
        component: BooksListComponent,
      },
      {
        path: '',
        redirectTo: "0",
        pathMatch: "full"
      }
    ]    
  },
  { path: "readers", component: ReaderComponent},
  { path: "", redirectTo: "/books", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }