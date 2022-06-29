import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReaderService } from '../reader/reader.service';
import { Reader } from '../shared/reader';

@Component({
  selector: 'app-reader-modal',
  templateUrl: './reader-modal.component.html',
  styleUrls: ['./reader-modal.component.scss']
})
export class ReaderModalComponent implements OnInit {
  public readerForm:FormGroup;

  reader: Reader = new Reader();

  constructor(  public dialogRef: MatDialogRef<ReaderModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: number,
                private readerService: ReaderService,
                private fb: FormBuilder) { 
                  this.readerForm = this.fb.group(
                    {
                      id:""
                    }
                  )
                }

  ngOnInit(): void {
    if (this.data != 0)
      this.readerService.getReaderById(this.data).subscribe(data => {
        this.reader = data;
      })
  }

  addBookById() {
    let id = this.readerForm.get("id")?.value;
    this.readerService.addBookById(this.reader.id, id).subscribe(data => {
      this.ngOnInit();
    });
  }

  deleteBookById(id: number) {
    this.readerService.deleteBookById(this.reader.id, id).subscribe(data => {
      this.ngOnInit();
    });
  }

  deleteReaderById(id: number) {
    this.readerService.deleteReader(id).subscribe(() => {
      this.ngOnInit();
    })
  }

}
