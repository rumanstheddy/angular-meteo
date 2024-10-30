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
import { ResultsBoxComponent } from './components/results-box/results-box.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ResultsBoxComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration(), provideHttpClient(), OpenMeteoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
