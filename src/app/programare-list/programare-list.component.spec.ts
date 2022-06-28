import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramareListComponent } from './programare-list.component';



describe('ProgramareListComponent', () => {
  let component: ProgramareListComponent;
  let fixture: ComponentFixture<ProgramareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramareListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
