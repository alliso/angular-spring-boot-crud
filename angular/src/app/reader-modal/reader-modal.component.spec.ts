import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderModalComponent } from './reader-modal.component';

describe('ReaderModalComponent', () => {
  let component: ReaderModalComponent;
  let fixture: ComponentFixture<ReaderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
