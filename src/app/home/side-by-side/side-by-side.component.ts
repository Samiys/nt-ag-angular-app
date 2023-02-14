import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {
  artistsName: string[] = [];
  artistsOneName: string[] = [];
  artistsTwoName: string[] = [];
  searchArtist1: string;
  searchArtist2: string;
  isMenuOpen = false;
  isArtistOneMenuOpen = false;
  isArtistTwoMenuOpen = false;

  constructor(
    private navigationSerivce: NavigationService,
  ) { }

  ngOnInit(): void {
  }

  openArtistOneMenu() {
    if(this.searchArtist1.length > 0) {
      this.isArtistOneMenuOpen = true;
      this.artistsOneName = [];
      this.searchArtistOne();
      return;
    }
    this.isArtistOneMenuOpen = false;
  }

  async searchArtistOne() {
    try {
      this.navigationSerivce.searchArtist(this.searchArtist1).subscribe(resp => {
        if(resp) {
          resp.results.artistmatches.artist.map(artist => {
            this.artistsOneName.push(artist.name);
          });
          console.log(this.artistsOneName);

        }
      });
    } catch (error) {
      throw new Error('Something went wrong.')
    }
  }

  openArtistTwoMenu() {
    if(this.searchArtist2.length > 0) {
      this.isArtistTwoMenuOpen = true;
      this.artistsTwoName = [];
      this.searchArtistTwo();
      return;
    }
    this.isArtistTwoMenuOpen = false;
  }

  async searchArtistTwo() {
    try {
      this.navigationSerivce.searchArtist(this.searchArtist2).subscribe(resp => {
        if(resp) {
          resp.results.artistmatches.artist.map(artist => {
            this.artistsTwoName.push(artist.name);
          });
        }
      });
    } catch (error) {
      throw new Error('Something went wrong.')
    }
  }

}
