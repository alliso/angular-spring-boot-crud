import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReaderModalComponent } from './new-reader-modal.component';

describe('NewReaderModalComponent', () => {
  let component: NewReaderModalComponent;
  let fixture: ComponentFixture<NewReaderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReaderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
