import { Component, OnInit } from '@angular/core';
import {Calculator} from '../mains/calculator';
@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {
  title = 'Мое первое приложение на Angular';

  calculator = new Calculator();

  onSum(val1, val2){

    this.res = this.calculator.sum(val1, val2);
  }

  onDiffer(val1, val2){
    this.res = this.calculator.differ(val1, val2);
  }

  onMult(val1, val2){
    this.res = this.calculator.mult(val1, val2);
  }

  onDivs(val1, val2){
    this.res = this.calculator.divs(val1, val2);
  }

  constructor() { }

  ngOnInit() {
  }

}
