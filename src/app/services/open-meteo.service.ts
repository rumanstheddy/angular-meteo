import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationData } from '../interfaces/location-data';
import { ForecastData } from '../interfaces/forecast-data';

@Injectable({
  providedIn: 'root',
})
export class OpenMeteoService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://geocoding-api.open-meteo.com/v1/';

  getLocationsFromSearch(
    searchQuery: string,
    resultCount: number = 5
  ): Observable<{ generationtime_ms: number; results: LocationData[] }> {
    const apiUrl = `${this.baseUrl}/search?name=${searchQuery}&count=${resultCount}&language=en&format=json`;
    return this.http.get<{
      generationtime_ms: number;
      results: LocationData[];
    }>(apiUrl);
  }

  getForecastFromLocation(
    latitude: number,
    longitude: number,
    temp_unit: string
  ): Observable<ForecastData> {
    const apiUrl = [
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m`,
      temp_unit === 'F' && `&temperature_unit=fahrenheit`,
    ]
      .filter(Boolean)
      .join('');
    console.log(apiUrl);
    return this.http.get<ForecastData>(apiUrl);
  }
}
