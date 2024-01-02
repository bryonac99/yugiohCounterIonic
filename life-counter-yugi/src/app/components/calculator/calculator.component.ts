import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent  implements OnInit {


  displayRows: string[][] = [[], [], []];
  lines: string[] = [''];
  result:string = '0';

  @Input()
  operation: string = '';
  @Input()
  oldResult: string = '';
  @Input()
  rotate: boolean = false;
  @Output() onBack = new EventEmitter<boolean>();
  @Output() onChangeResult = new EventEmitter<string>();

  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  num1= ['1','2','3']
  num2= ['4','5','6']
  num3= ['7','8','9']



  constructor() { }

  ngOnInit() {}

  appendToResult(number: string) {
    if (this.result === '0') 
      this.result = '';
    this.result += number.toString();
    console.warn(this.rotate)
  }

  cancelResult() {
    if (this.result === '0') {
      this.onBack.emit(true);
    }
    else if (this.result.length === 1)
      this.result = '0'
    else
      this.result = this.result.slice(0,-1)
  }

  setResult() {
    let result = Number(this.result);
    let oldResult = Number(this.oldResult);
    let newResult = this.operation === 'minus' ? oldResult - result : oldResult + result;
    this.onChangeResult.emit(newResult.toString());
    this.onBack.emit(true);
  }


}
