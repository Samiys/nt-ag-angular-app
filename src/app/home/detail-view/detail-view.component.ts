import { Component, Input, OnInit } from '@angular/core';
import { DetailViewService } from './detail-view.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ArtistDetail, TopAlbums, TopTracks } from '../../shared/interface.type';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  @Input() artistOneInput: string;
  @Input() artistTwoInput: string;
  artistDetail: ArtistDetail;
  artistName: string = '';
  topFiveTracks: TopTracks[];
  topFiveAlbums: TopAlbums[];
  isLoading: boolean = true;

  constructor(
    private detailViewService: DetailViewService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.artistName = this.route.snapshot.params['name'];
    if(this.artistName)
      this.getArtistData(this.artistName);
  }

  ngOnChanges() {
    this.getArtistData(this.artistOneInput ? this.artistOneInput : this.artistTwoInput);
  }

  getArtistData(artist_name: string){
    this.detailViewService.getArtistInfo(artist_name).subscribe({
      next: (resp) => {
        this.artistDetail = resp.artist;
      },
      error: (e) => {
        throw new Error(e.message)
      },
      complete: () => {
        this.isLoading = false;
      },
    });

    this.detailViewService.topFiveTracks(artist_name).subscribe({
      next: (resp) => {
        this.topFiveTracks = resp.toptracks.track;
      },
      error: (e) => {
        throw new Error(e.message)
      },
      complete: () => {
        this.isLoading = false;
      },
    });

    this.detailViewService.topFiveAlbums(artist_name).subscribe({
      next: (resp) => {
        this.topFiveAlbums = resp.topalbums.album;
      },
      error: (e) => {
        throw new Error(e.message)
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

}
