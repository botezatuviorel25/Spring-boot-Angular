import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificareConfirmareComponent } from './modificare-confirmare.component';

describe('ModificareConfirmareComponent', () => {
  let component: ModificareConfirmareComponent;
  let fixture: ComponentFixture<ModificareConfirmareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificareConfirmareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificareConfirmareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
