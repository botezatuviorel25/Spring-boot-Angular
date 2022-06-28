import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PachetListComponent } from './pachet-list.component';

describe('PachetListComponent', () => {
  let component: PachetListComponent;
  let fixture: ComponentFixture<PachetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PachetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PachetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
