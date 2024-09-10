import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Holiday } from '../models/holiday.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  constructor(private http: HttpClient) {}

  getNextPublicHolidays(countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`/NextPublicHolidays/${countryCode}`);
  }

  getPublicHolidaysByYear(
    countryCode: string,
    year: number
  ): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`/PublicHolidays/${year}/${countryCode}`);
  }
}
