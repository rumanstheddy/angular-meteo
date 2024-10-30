import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsBoxComponent } from './results-box.component';

describe('ResultsBoxComponent', () => {
  let component: ResultsBoxComponent;
  let fixture: ComponentFixture<ResultsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
