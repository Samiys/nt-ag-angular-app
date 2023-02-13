import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MainViewService } from './main-view.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  topArtists: any;

  constructor(
    private mainViewSerivce: MainViewService
  ) { }

  async ngOnInit() {
    this.topArtists = await firstValueFrom(this.mainViewSerivce.getTopArtists());
    console.log(this.topArtists);
  }

}
