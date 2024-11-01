import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationData } from '../interfaces/location-data';

@Injectable({
  providedIn: 'root',
})
export class OpenMeteoService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://geocoding-api.open-meteo.com/v1/';

  getLocationsFromSearch(
    searchQuery: string,
    resultCount: number = 5
  ): Observable<LocationData> {
    const apiUrl = `${this.baseUrl}/search?name=${searchQuery}&count=${resultCount}&language=en&format=json`;
    return this.http.get<LocationData>(apiUrl);
  }
}
