import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, CountryInfo } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('/AvailableCountries');
  }

  getCountryInfo(countryCode: string): Observable<CountryInfo> {
    return this.http.get<CountryInfo>(`/CountryInfo/${countryCode}`);
  }
}
