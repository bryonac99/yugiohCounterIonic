import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.page.html',
  styleUrls: ['./game-table.page.scss'],
})
export class GameTablePage implements OnInit {

  rotate: boolean = true;
  defaultScore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  resetScore() {
    this.defaultScore = !this.defaultScore;
  }

}
