import { Component } from '@angular/core';
import { LocationData } from '../../interfaces/location-data';
import { OpenMeteoService } from '../../services/open-meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Meteoscope';
  searchResults: LocationData | null = null;
  search = '';

  handleChange(text: string) {
    this.search = text;
  }

  constructor(private openMeteoService: OpenMeteoService) {}

  ngOnInit() {
    this.openMeteoService.getLocationsFromSearch(this.search).subscribe({
      next: (data) => {
        this.searchResults = data;
        console.log(this.searchResults);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
