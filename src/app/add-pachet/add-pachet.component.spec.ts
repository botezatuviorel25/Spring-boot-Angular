import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPachetComponent } from './add-pachet.component';

describe('AddPachetComponent', () => {
  let component: AddPachetComponent;
  let fixture: ComponentFixture<AddPachetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPachetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPachetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
