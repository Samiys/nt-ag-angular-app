import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: ElementRef;
  @ViewChild('menu') menu: ElementRef;
  searchTerm: string;
  artistsName: string[] = [];
  results$: Observable<any[]>;
  searchText = '';
  isMenuOpen = false;

  constructor(
    private navigationSerivce: NavigationService,
    private renderer: Renderer2,
    private _eref: ElementRef
  ) { }

  async ngOnInit() {
    this.renderer.listen('document', 'click',(e:Event)=> {
      this.isMenuOpen=false;
      // if(e.target !== this.toggleButton.nativeElement && e.target!==this.menu.nativeElement){
      // }
    });
  }

  toggleMenu() {
    console.log('menu');
    this.isMenuOpen = !this.isMenuOpen;
  }

  openMenu(e) {
    if(this.searchTerm.length > 0) {
      this.isMenuOpen = true;
      this.artistsName = [];
      this.searchArtist();
      return;
    }
    this.isMenuOpen = false;
  }

  async searchArtist() {
    try {
      this.navigationSerivce.searchArtist(this.searchTerm).subscribe(resp => {
        if(resp) {
          resp.results.artistmatches.artist.map(artist => {
            this.artistsName.push(artist.name);
          });
        }
      });
    } catch (error) {
      throw new Error('Something went wrong.')
    }
  }

}
