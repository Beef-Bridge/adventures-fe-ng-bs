import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hike } from '../models/hike';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HikeService {
  constructor(private _http: HttpClient) {}

  /**
   * Convention de nommage "fonctions fléchées" (ou Arrow function) :
   *
   * getHikeList$       : nom de la fonction (avec le '$' pour indiquer qu'elle retourne un observable)
   * = ():              : la liste des paramètres que recoit la fonction (séparée par une virgule)
   * Observable<Hike[]> : le typage de retour de la fonction
   * =>                 : la flèche qui marque la séparation entre les paramètres et l’implémentation de la fonction
   * { ... }            : Le corps de la fonction entre des accolades.
   */
  public getHikeList$ = (): Observable<Hike[]> => {
    return this._http.get<Hike[]>(`${environment.urlApi}/hikes`).pipe(
      tap((response: any) => console.table(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  public sortHikeListByDateDesc = (): Observable<Hike[]> => {
    return this.getHikeList$().pipe(
      map((hikeListing) =>
        hikeListing.sort(
          (a: { doneAt: Date }, b: { doneAt: Date }) =>
            new Date(b.doneAt).getTime() - new Date(a.doneAt).getTime()
        )
      )
    );
  }

  public sortHikeListByDateAsc = (): Observable<Hike[]> => {
    return this.getHikeList$().pipe(
      map((hikeListing) =>
        hikeListing.sort(
          (a: { doneAt: Date }, b: { doneAt: Date }) =>
            new Date(a.doneAt).getTime() - new Date(b.doneAt).getTime()
        )
      )
    );
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
