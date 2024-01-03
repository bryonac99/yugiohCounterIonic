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
  isFlipping: boolean = false;
  coin: string = '';
  coinOpened: boolean = false;
  coinOpened1: boolean = false;
  diceOpened: boolean = false;
  diceOpened1: boolean = false;

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

  
  flipCoin() {
    this.isFlipping = true;
    setTimeout(() => {
      this.isFlipping = false;
      this.showResult();
    }, 1000); // Tempo dell'animazione (1s)
  }

  showResult() {
    const randomNumber = Math.random(); // Genera un numero casuale tra 0 e 1
    this.result = randomNumber < 0.5 ? 'Testa' : 'Croce';
  }

  coinToss(rotate: boolean) {
    let btn = rotate ? 'coin1' : 'coin';
    this.coinOpened = btn === 'coin' ? true : false;
    this.coinOpened1 = btn === 'coin1' ? true : false;
    let coin = document.getElementById(btn);
      if (coin) {
        const button = coin as HTMLElement;
        button.classList.add('rotate-animation');
      
        setTimeout(() => {
          button.classList.remove('rotate-animation');
        }, 1000);
      ;
    }
    let random = this.getRandomInt(2);
    this.coin = random === 0 ? 'heads' : 'tails'
  }

  getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

  back(coin:string) {
    let ownCoin = coin === 'coin' ? 'coin' : 'coin1';
    if (ownCoin === 'coin') {
      this.coinOpened = false;
    }
    else if (ownCoin === 'coin1') {
      this.coinOpened1 = false;
    }
  }

  backDice(dice:string) {
    let ownDice = dice === 'dice' ? 'dice' : 'dice1';
    if (ownDice === 'dice') {
      this.diceOpened = false;
    }
    else if (ownDice === 'dice1') {
      this.diceOpened1 = false;
    }
  }

  diceRoll(rotate: boolean) {
    let btn = rotate ? 'dice1' : 'dice';
    this.diceOpened = btn === 'dice' ? true : false;
    this.diceOpened1 = btn === 'dice1' ? true : false;
    const numbers = [1, 2, 3, 4, 5, 6];
    const animationDuration = 30;
    const animationIterations = 5;
    const diceResult = document.getElementById(btn);

    if (diceResult) {
      for (let i = 0; i < animationIterations * numbers.length; i++) {
        setTimeout(() => {
          const randomNumberIndex = Math.floor(Math.random() * numbers.length);
          diceResult.innerText = numbers[randomNumberIndex].toString();
        }, i * animationDuration);
      }
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        diceResult.innerText = numbers[randomIndex].toString();
      }, animationIterations * numbers.length * animationDuration);
    }
  }

}
