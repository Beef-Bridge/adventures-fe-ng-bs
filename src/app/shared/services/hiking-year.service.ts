import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { HikingYear } from '../models/hikingYear';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HikingYearService {
  constructor(private _http: HttpClient) {}

  public getHikingYearList$ = (): Observable<HikingYear[]> => {
    return this._http
      .get<HikingYear[]>(`${environment.urlApi}/hiking_year`)
      .pipe(
        tap((response: any) => console.table(response)),
        catchError((error) => this.handleError(error, []))
      );
  }

  public sortHikingYearListByYearDesc = (): Observable<HikingYear[]> => {
    return this.getHikingYearList$().pipe(
      map((hikingYearListing) =>
        hikingYearListing.sort(
          (a: { year: number }, b: { year: number }) => b.year - a.year
        )
      )
    );
  }

  public sortHikingYearListByYearAsc = (): Observable<HikingYear[]> => {
    return this.getHikingYearList$().pipe(
      map((hikingYearListing) =>
        hikingYearListing.sort(
          (a: { year: number }, b: { year: number }) => a.year - b.year
        )
      )
    );
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
