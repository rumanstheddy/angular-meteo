import { Component, Input } from '@angular/core';
import { LocationData } from '../../interfaces/location-data';

@Component({
  selector: 'results-box',
  templateUrl: './results-box.component.html',
  styleUrl: './results-box.component.scss',
})
export class ResultsBoxComponent {
  @Input() searchResults: LocationData | null = null;
}
