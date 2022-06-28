import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarileMeleListComponent } from './programarile-mele-list.component';

describe('ProgramarileMeleListComponent', () => {
  let component: ProgramarileMeleListComponent;
  let fixture: ComponentFixture<ProgramarileMeleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramarileMeleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramarileMeleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
