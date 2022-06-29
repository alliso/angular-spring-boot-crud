import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewReaderModalComponent } from '../new-reader-modal/new-reader-modal.component';
import { ReaderModalComponent } from '../reader-modal/reader-modal.component';
import { Reader } from '../shared/reader';
import { ReaderService } from './reader.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  readers: Reader[]
  constructor(  private readerService: ReaderService,
                private dialog: MatDialog) { }

  ngOnInit(): void {
    this.readerService.getReaders().subscribe((data: Reader[]) => {
      this.readers = data;
    })
  }

  openPopup(id: number) {
    const dialogRef = this.dialog.open(ReaderModalComponent, { width: '30rem', height: '20rem', data:id, panelClass: "modal-box"});
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }

  openNewreader() {
    const dialogRef = this.dialog.open(NewReaderModalComponent, { width: '30rem', height: '20rem'});
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    })
  }

}
