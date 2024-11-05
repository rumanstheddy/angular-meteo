import { Component, OnDestroy } from '@angular/core';
import { LocationData } from '../../interfaces/location-data';
import { OpenMeteoService } from '../../services/open-meteo.service';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnDestroy {
  title = 'Meteoscope';
  searchResults: LocationData[] = [];
  search = '';
  data = 'Sample data';

  private searchSubject = new Subject<string>();
  private searchSubscription: Subscription | null = null;

  handleChange(text: string) {
    text.length > 0 && this.searchSubject.next(text);
  }

  constructor(private openMeteoService: OpenMeteoService) {}

  ngOnInit() {
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((searchQuery) =>
          this.openMeteoService.getLocationsFromSearch(searchQuery)
        )
      )
      .subscribe({
        next: ({ results }) => {
          this.searchResults = results;
          console.log(this.searchResults);
        },
        error: (err) => console.log(err),
      });
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }
}
