import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMountain, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Hike } from 'src/app/shared/models/hike';
import { HikeService } from 'src/app/shared/services/hike.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  // icones FontAwesome
  faMountain = faMountain;
  faLocationDot = faLocationDot;

  public hikeList: Hike[] = [];

  constructor(private _hikeService: HikeService) {}

  ngOnInit(): void {
    this._hikeService.list$().subscribe((hikes: Hike[]) => {
      console.table(hikes);
      this.hikeList = hikes;
    });
  }
}
