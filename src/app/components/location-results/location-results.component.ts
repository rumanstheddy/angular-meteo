import { Component, Input } from '@angular/core';
import { LocationData } from '../../interfaces/location-data';
import { Router } from '@angular/router';

@Component({
  selector: 'results-box',
  templateUrl: './location-results.component.html',
  styleUrl: './location-results.component.scss',
})
export class LocationResultsComponent {
  @Input() searchResults: LocationData[] = [];

  handleClick(latitude: number, longitude: number) {
    this.router.navigateByUrl(`/forecast/${latitude}/${longitude}`);
  }

  ngOnInit() {}

  constructor(private router: Router) {}
}
