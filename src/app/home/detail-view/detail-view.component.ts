import { Component, OnInit } from '@angular/core';
import { DetailViewService } from './detail-view.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
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
    console.log(this.artistName);
    this.artistDetail = (await firstValueFrom(this.detailViewService.getArtistInfo(this.artistName))).artist;
    this.topFiveTracks = (await firstValueFrom(this.detailViewService.topFiveTracks(this.artistName))).toptracks.track;
    this.topFiveAlbums = (await firstValueFrom(this.detailViewService.topFiveAlbums(this.artistName))).topalbums.album;
    console.log(this.artistDetail);
    console.log(this.topFiveTracks);
    console.log(this.topFiveAlbums);
  }

}
