import { Component, Input, OnInit } from '@angular/core';
import { DetailViewService } from './detail-view.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  @Input() artistOneInput: any;
  @Input() artistTwoInput: any;
  artistDetail: any = '';
  artistName: string = '';
  topFiveTracks: any;
  topFiveAlbums: any;

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

  async getArtistData(artist_name: string){
    this.artistDetail = (await firstValueFrom(this.detailViewService.getArtistInfo(artist_name))).artist;
    this.topFiveTracks = (await firstValueFrom(this.detailViewService.topFiveTracks(artist_name))).toptracks.track;
    this.topFiveAlbums = (await firstValueFrom(this.detailViewService.topFiveAlbums(artist_name))).topalbums.album;
  }

}
