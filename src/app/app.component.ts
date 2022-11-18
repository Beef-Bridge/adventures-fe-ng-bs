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

  ngOnInit(): void {
    console.table(this.hikeList);
  }

  selectHike(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`On a cliqué sur la rando ${this.hikeList[index].title}`);
  }
}
