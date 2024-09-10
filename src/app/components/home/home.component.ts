import { Component } from '@angular/core';
import { map } from 'rxjs';

import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';
import { widgetNumber } from '../../configs/country.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  countries$ = this.countryService.getCountries();
  randomCountries$ = this.countries$.pipe(
    map((countries) => this.getRandomCountries(countries, widgetNumber))
  );

  constructor(private countryService: CountryService) {}

  private getRandomCountries(countries: Country[], count: number): Country[] {
    if (countries.length <= count) {
      return countries;
    }

    const shuffled = countries.slice().sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
  }
}
