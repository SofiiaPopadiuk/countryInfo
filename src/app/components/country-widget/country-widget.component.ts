import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Observable } from 'rxjs';

import { CountryInfo } from '../../models/country.model';
import { HolidayService } from '../../services/holiday.service';
import { Holiday } from '../../models/holiday.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-widget',
  templateUrl: './country-widget.component.html',
  styleUrls: ['./country-widget.component.scss']
})
export class CountryWidgetComponent implements OnInit, OnChanges {
  @Input() countryCode: string;
  @Input() year: number = null;

  countryHolidays$: Observable<Holiday[]>;
  country$: Observable<CountryInfo>;

  constructor(
    private holidayService: HolidayService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.countryHolidays$ = this.year
      ? this.holidayService.getPublicHolidaysByYear(this.countryCode, this.year)
      : this.holidayService.getNextPublicHolidays(this.countryCode);

    this.country$ = this.countryService.getCountryInfo(this.countryCode);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.['year']) {
      this.countryHolidays$ = this.holidayService.getPublicHolidaysByYear(
        this.countryCode,
        this.year
      );
    }
  }
}
