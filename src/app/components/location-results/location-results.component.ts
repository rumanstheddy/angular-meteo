import { Component, Input } from '@angular/core';
import { LocationData } from '../../interfaces/location-data';

@Component({
  selector: 'results-box',
  templateUrl: './location-results.component.html',
  styleUrl: './location-results.component.scss',
})
export class LocationResultsComponent {
  @Input() searchResults: LocationData[] = [];

  ngOnInit() {}
}
