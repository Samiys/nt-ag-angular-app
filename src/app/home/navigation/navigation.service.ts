import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concatMap, forkJoin, last, map, of, shareReplay, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private http: HttpClient
  ) { }

  searchArtist(artist: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `artist.search&artist=${artist}&api_key=${environment.api_key}&format=json`)
        .pipe(map( (response: any) => {
          return response;
            }), last(), catchError((error: HttpErrorResponse) => throwError(error.error)),
            shareReplay(1)
        );
  }

}
