import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hike } from '../models/hike';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HikeService {
  constructor(private _http: HttpClient) {}

  public list$ = (): Observable<Hike[]> => {
    // URL de la ressource vers l'API "hikes" (fichier api/db.json)
    const URL_API: string = 'http://localhost:3001/hikes';

    return this._http
      .get<Hike[]>(URL_API)
      .pipe(map((data: Hike[]) => data.map((hike) => new Hike(hike))));
  };
}
