import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, debounceTime, last, map, of, shareReplay, switchMap, throttleTime, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private http: HttpClient
  ) { }

  searchArtist(artist: string): Observable<any> {
    return of(artist).pipe(
      switchMap(artistName =>
        this.http.get<any>(
          environment.apiUrl +
            `artist.search&artist=${artistName}&api_key=${environment.api_key}&format=json`
        )
      ),
      catchError((error: HttpErrorResponse) => throwError(error.error)),
      shareReplay(1)
    );
  }

}
