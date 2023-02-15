import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation/navigation.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {
  artistsOneName: string[] = [];
  artistsTwoName: string[] = [];
  searchArtist1: string;
  searchArtist2: string;
  isArtistOneMenuOpen = false;
  isArtistTwoMenuOpen = false;
  artistOneNameDetail: string;
  artistTwoNameDetail: string;

  constructor(
    private navigationSerivce: NavigationService
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
        }
      });
    } catch (error) {
      throw new Error('Something went wrong.')
    }
  }

  async showArtistOneDetail(artist_name: string) {
    this.artistOneNameDetail = artist_name;
    this.isArtistOneMenuOpen = false;
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

  async showArtistTwoDetail(artist_name: string) {
    this.artistTwoNameDetail = artist_name;
    this.isArtistTwoMenuOpen = false;
  }

}
