import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hike } from '../models/hike';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HikeService {
  constructor(private _http: HttpClient) {}

  public list$ = (): Observable<Hike[]> => {
    let hikeList = this._http
      .get<Hike[]>(`${environment.urlApi}/hikes`)
      .pipe(map((data: Hike[]) => data.map((hike) => new Hike(hike))));

    return hikeList;
  };
}
