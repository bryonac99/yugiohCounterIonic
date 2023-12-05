import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-buttons',
  templateUrl: './play-buttons.component.html',
  styleUrls: ['./play-buttons.component.scss'],
})
export class PlayButtonsComponent  implements OnInit {

  @Input()
  rotate: boolean= false;
  result: string = '8000';

  constructor() { }

  ngOnInit() {}

}
