import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    private router: Router
  ) { }

  async ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.renderer.listen('document', 'click',(e:Event)=> {
      this.isMenuOpen=false;
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

  clearInput(artist_name: string){
    this.router.navigate(['/detail-view/', artist_name]);
    this.searchTerm = '';
  }

}
