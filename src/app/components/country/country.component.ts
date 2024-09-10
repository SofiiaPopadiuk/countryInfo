import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { yearInterval } from '../../configs/country.config';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countryCode: string;
  currentYear = new Date().getFullYear();
  yearControl = new FormControl(this.currentYear);

  get yearsInterval() {
    const years: number[] = [];
    for (
      let year = yearInterval.startYear;
      year <= yearInterval.endYear;
      year++
    ) {
      years.push(year);
    }

    return years;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.countryCode = params['countryCode'];
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
