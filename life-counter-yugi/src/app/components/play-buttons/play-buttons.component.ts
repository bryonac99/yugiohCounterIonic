import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-play-buttons',
  templateUrl: './play-buttons.component.html',
  styleUrls: ['./play-buttons.component.scss'],
})
export class PlayButtonsComponent  implements OnInit {

  private _defaultScore: boolean = false;

  result: string = '8000';
  scoreVisible: boolean = true;
  operation: string = '';

  @Input()
  public get defaultScore() {
    return this._defaultScore
  }

  public set defaultScore(value: boolean) {
    this._defaultScore = value;
    this.resetScore();
  }

  @Input()
  rotate: boolean = false;
  @Input()
  calculatorOpened: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {}

  minusClick() {
    this.calculatorOpened = true;
    this.scoreVisible = false;
    this.operation = 'minus';
  }

  plusClick() {
    this.calculatorOpened = true;
    this.scoreVisible = false;
    this.operation = 'plus';
  }
  
  calculatorClosed(event:any) {
    this.calculatorOpened = false;
    this.scoreVisible = true;
  }

  halfPoints() {
    let result = Number(this.result);
    result = result / 2;
    this.result = result.toString();
  }

  resetScore() {
    this.result = '8000';
  }

  resultChanged(event:string) {
    this.result = event;
  }

  

}
