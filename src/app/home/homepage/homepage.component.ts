import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMountain, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Observable, map } from 'rxjs';
import { HikeI } from 'src/app/shared/interfaces/hike-i';
import { Hike } from 'src/app/shared/models/hike';
import { HikingYear } from 'src/app/shared/models/hikingYear';
import { HikeService } from 'src/app/shared/services/hike.service';
import { HikingYearService } from 'src/app/shared/services/hiking-year.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  // icones FontAwesome
  faMountain = faMountain;
  faLocationDot = faLocationDot;

  public hikingYearList: HikingYear[] = [];

  hikeList$!: Observable<HikeI[]>;

  constructor(
    private _hikingYearService: HikingYearService,
    private _hikeService: HikeService
  ) {}

  ngOnInit(): void {
    //   this._hikingYearService
    //     .list$()
    //     .subscribe((hikingYearListing: HikingYear[]) => {
    //       this.hikingYearList = hikingYearListing;
    //     });

    //   this._hikeService.list$().subscribe(
    //     (hikeListing: Hike[]) => {
    //       this.hikeList = hikeListing;
    //     }
    //   );

    this.hikeList$ = this._hikeService.sortHikeListByDateDesc();
  }
}
