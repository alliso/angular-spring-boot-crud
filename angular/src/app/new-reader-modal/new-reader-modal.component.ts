import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReaderService } from '../reader/reader.service';
import { Reader } from '../shared/reader';


@Component({
  selector: 'app-new-reader-modal',
  templateUrl: './new-reader-modal.component.html',
  styleUrls: ['./new-reader-modal.component.scss']
})
export class NewReaderModalComponent implements OnInit {
  public newReaderForm: FormGroup;

  constructor(  public dialogRef: MatDialogRef<NewReaderModalComponent>,
                @Inject(MAT_DIALOG_DATA) public data: number,
                private readerService: ReaderService,
                private fb: FormBuilder) {
                  this.newReaderForm = this.fb.group(
                    {
                      firstName: "",
                      lastName: ""
                    }
                  )
                 }

  ngOnInit(): void {
  }

  saveNewReader() {
    let newReader: Reader = new Reader();
    newReader.firstName = this.newReaderForm.get("firstName")?.value;
    newReader.lastName = this.newReaderForm.get("lastName")?.value;
    this.readerService.createReader(newReader).subscribe(() => this.dialogRef.close());
  }

}
