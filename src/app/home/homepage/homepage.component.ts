import { Component, OnInit } from '@angular/core';
import { faMountain, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { HikingYearI } from 'src/app/shared/interfaces/hikingYear-i';
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

  hikingYearList$!: Observable<HikingYearI[]>;

  constructor(private _hikingYearService: HikingYearService) {}

  ngOnInit(): void {
    this.hikingYearList$ =
      this._hikingYearService.sortHikingYearListByYearDesc();
  }
}
