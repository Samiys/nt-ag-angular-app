import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';
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
  searchTermChanged: Subject<string> = new Subject<string>();
  artistsName: string[] = [];
  searchText = '';
  isMenuOpen = false;
  searchResults$: Observable<any>;

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
    this.navigationSerivce.searchArtist(this.searchTerm).subscribe({
      next: (resp) => {
        resp.results.artistmatches.artist.map(artist => {
          this.artistsName.push(artist.name);
        });
      },
      error: (e) => {
        throw new Error(e.message)
      }
    });
  }

  clearInput(artist_name: string){
    this.router.navigate(['/detail-view/', artist_name]);
    this.searchTerm = '';
  }

}
