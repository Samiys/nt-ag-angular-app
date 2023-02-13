import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, last, catchError, throwError, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailViewService {

  constructor(
    private http: HttpClient
  ) { }

  getArtistInfo(artistName: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `artist.getinfo&artist=${artistName}&api_key=${environment.api_key}&format=json`)
        .pipe(map( (response: any) => {
          return response;
            }), last(), catchError((error: HttpErrorResponse) => throwError(error.error)),
            shareReplay(1)
        );
  }

  topFiveTracks(artistName: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `artist.gettoptracks&artist=${artistName}&api_key=${environment.api_key}&format=json&limit=5`)
        .pipe(map( (response: any) => {
          return response;
            }), last(), catchError((error: HttpErrorResponse) => throwError(error.error)),
            shareReplay(1)
        );
  }

  topFiveAlbums(artistName: string): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `artist.gettopalbums&artist=${artistName}&api_key=${environment.api_key}&format=json&limit=5`)
        .pipe(map( (response: any) => {
          return response;
            }), last(), catchError((error: HttpErrorResponse) => throwError(error.error)),
            shareReplay(1)
        );
  }
}
