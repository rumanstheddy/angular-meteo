import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OpenMeteoService } from './services/open-meteo.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocationResultsComponent } from './components/location-results/location-results.component';
import { NgFor } from '@angular/common';
import { ForecastComponent } from './pages/forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationResultsComponent,
    ForecastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgFor],
  providers: [provideClientHydration(), provideHttpClient(), OpenMeteoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
