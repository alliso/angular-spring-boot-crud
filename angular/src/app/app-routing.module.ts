import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './book/books.component';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [
  { path: "books", component: BooksComponent},
  { path: "pruebas", component: PruebasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
