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
  detailView: any;
  artistName: string = '';

  constructor(
    private detailViewService: DetailViewService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.artistName = this.route.snapshot.params['name'];
    console.log(this.artistName);
    this.detailView = await firstValueFrom(this.detailViewService.getArtistInfo(this.artistName));
    console.log(this.detailView);
  }

}
