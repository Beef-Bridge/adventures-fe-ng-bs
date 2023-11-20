import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hike } from 'src/app/shared/models/hike';
import { HikeService } from 'src/app/shared/services/hike.service';

@Component({
  selector: 'app-list-hike',
  templateUrl: './list-hike.component.html',
  styleUrls: ['./list-hike.component.scss'],
})
export class ListHikeComponent implements OnInit {
  public hikesHeaders = ['Nom', 'Massif', 'type', 'Date'];
  hikeList$!: Observable<Hike[]>;

  constructor(private _router: Router, private _hikeService: HikeService) {}

  public ngOnInit(): void {
    this.hikeList$ = this._hikeService.sortHikeListByDateDesc();
  }

  public goToHike = (hike: Hike) => {
    this._router.navigate(["/randonnee", hike.id])
  }
}
