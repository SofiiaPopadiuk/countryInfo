import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  @Input() countries: Country[];
  filteredCountries$: Observable<Country[]>;
  countryControl = new FormControl('');

  ngOnInit() {
    this.filteredCountries$ = this.countryControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '', this.countries))
    );
  }

  private _filter(value: string, countries: Country[]): Country[] {
    const filterValue = value.toLowerCase();

    return countries.filter((country) =>
      country.name.toLowerCase().includes(filterValue)
    );
  }
}
