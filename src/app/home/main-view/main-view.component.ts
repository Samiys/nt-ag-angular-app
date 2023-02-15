import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MainViewService } from './main-view.service';
import { countries } from '../../shared/country-data';
import { Countries } from '../../shared/interface.type';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  topArtists: any;
  selectedCountry: string = 'Germany';
  countries: Countries[] = countries;
  isLoading: boolean = true;

  constructor(
    private mainViewSerivce: MainViewService
  ) { }

  ngOnInit() {
    this.fetchTopArtists(this.selectedCountry);
  }

  async updateList() {
    this.fetchTopArtists(this.selectedCountry);
  }

  async fetchTopArtists(selectedCountry: string) {
    this.topArtists = (await firstValueFrom(this.mainViewSerivce.getTopArtists(selectedCountry))).topartists.artist;
    if(this.topArtists)
      this.isLoading = false;
  }

}
