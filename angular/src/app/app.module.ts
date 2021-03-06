import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModalComponent } from './book-modal/book-modal.component';
import { BooksComponent } from './book/books.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ReaderComponent } from './reader/reader.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { BooksListComponent } from './books-list/books-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { ReaderModalComponent } from './reader-modal/reader-modal.component';
import { NewReaderModalComponent } from './new-reader-modal/new-reader-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookModalComponent,
    PruebasComponent,
    ReaderComponent,
    TopMenuComponent,
    BooksListComponent,
    ReaderModalComponent,
    NewReaderModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
