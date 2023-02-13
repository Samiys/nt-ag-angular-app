import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, last, catchError, throwError, shareReplay } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainViewService {

  constructor(
    private http: HttpClient
  ) { }

  getTopArtists(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + `geo.gettopartists&country=spain&api_key=${environment.api_key}&format=json&limit=10`)
        .pipe(map( (response: any) => {
          return response;
            }), last(), catchError((error: HttpErrorResponse) => throwError(error.error)),
            shareReplay(1)
        );
  }
}
