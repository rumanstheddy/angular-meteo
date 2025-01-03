import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationResultsComponent } from './location-results.component';

describe('LocationResultsComponent', () => {
  let component: LocationResultsComponent;
  let fixture: ComponentFixture<LocationResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
