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

  handleClick(
    latitude: number,
    longitude: number,
    name: string,
    admin1: string,
    country: string,
  ) {
    this.router.navigate([`/forecast/${latitude}/${longitude}`], {
      state: { name: name, admin1: admin1, country: country },
    });
  }

  ngOnInit() {}

  constructor(private router: Router) {}
}
