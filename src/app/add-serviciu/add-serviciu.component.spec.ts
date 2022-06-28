import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiciuComponent } from './add-serviciu.component';

describe('AddServiciuComponent', () => {
  let component: AddServiciuComponent;
  let fixture: ComponentFixture<AddServiciuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiciuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddServiciuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
