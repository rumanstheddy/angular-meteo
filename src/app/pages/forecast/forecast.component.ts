import { Component } from '@angular/core';
import { OpenMeteoService } from '../../services/open-meteo.service';
import { ForecastData, WeatherUnits } from '../../interfaces/forecast-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
})
export class ForecastComponent {
  latitude: number = 0;
  longitude: number = 0;
  forecastResults: ForecastData | null = null;
  // private forecastSubject = new Subject<string>();
  // private forecastSubscription: Subscription | null = null;
  locationName: string = '';
  locationState: string = '';
  locationCountry: string = '';

  forecastDisplayList = [
    { label: 'Temperature', key: 'temperature_2m' as const },
    { label: 'Apparent Temperature', key: 'apparent_temperature' as const },
    { label: 'Relative Humidity', key: 'relative_humidity_2m' as const },
    { label: 'Precipitation', key: 'precipitation' as const },
    { label: 'Wind Speed', key: 'wind_speed_10m' as const },
  ];

  getUnits(key: keyof WeatherUnits): string | undefined {
    return this.forecastResults?.current_units[key];
  }

  constructor(
    private openMeteoService: OpenMeteoService,
    private router: Router,
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;

    this.locationName = state?.['name'];
    this.locationState = state?.['admin1'];
    this.locationCountry = state?.['country'];
  }

  ngOnInit() {
    const currentRoute = this.router.routerState.root;
    const params = currentRoute.snapshot.paramMap;

    this.latitude = Number(params.get('lat'));
    this.longitude = Number(params.get('long'));

    console.log(this.router.getCurrentNavigation());

    this.openMeteoService
      .getForecastFromLocation(this.latitude, this.longitude, 'C')
      .subscribe({
        next: (data) => {
          this.forecastResults = data;
          // console.log(data);
        },

        error: (err) => {
          console.log(err);
        },
      });

    // this.forecastSubscription = this.forecastSubject
    //   .pipe(
    // debounceTime(250),
    // distinctUntilChanged(),
    //   switchMap((temp_units) => {
    //     console.log(temp_units);
    //     return this.openMeteoService.getForecastFromLocation(
    //       52.52,
    //       13.41,
    //       temp_units
    //     );
    //   })
    // )
    // .subscribe({
    //   next: (data) => {
    //     this.forecastResults = data;
    //     console.log(data);
    //   },
    //   error: (err) => console.log(err),
    // });

    // this.forecastSubject.next('C');
  }

  // ngOnDestroy(): void {
  //   this.forecastSubscription?.unsubscribe();
  // }
}
