import { Component, OnInit } from '@angular/core';
import { Hike } from './hike';
import { HIKES } from './mock-hikes-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'adventures-fe-ng-bs';
  hikeList: Hike[] = HIKES;
  hikeSelected: Hike | undefined;

  ngOnInit(): void {
    console.table(this.hikeList);
  }

  selectHike(hikeId: string) {
    const hike: Hike | undefined = this.hikeList.find(
      (hike) => hike.id == +hikeId
    );
    if (hike) {
      console.log(`On a demandé le pokémon ${hike.title}`);
      this.hikeSelected = hike;
    } else {
      console.log(`On a demandé un pokémon qui n'existe pas`);
      this.hikeSelected = hike;
    }
  }
}
