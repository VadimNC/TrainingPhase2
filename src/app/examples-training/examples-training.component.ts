import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-examples-training',
  templateUrl: './examples-training.component.html',
  styleUrls: ['./examples-training.component.css']
})
export class ExamplesTrainingComponent implements OnInit {
  public show: boolean = false;
  public smbUp: string = '';
  public arr: string[] = ['Есть', 'жизнь', 'на', 'Марсе'];
  public arrLength: number[] = [];
  public arrTask3: number[] = [1, 2, 3, 4, 5];
  public masTask4End: number[] = [];

  public myMethod1(str: string): string {
    if (!str) return str;
    let x = str[0].toUpperCase() + str.slice(1)
    this.smbUp = x;
    return this.smbUp;
  }

  public myMethod2(str: string[]): number[] {
    this.arrLength = str.map((word) => {
      return word.length;
    })
    return this.arrLength;
    console.log('lhl=' + this.arrLength);
  }

  public myMethod3(masNum: number[]): number[] {
    let mas1: number[] = [];
    this.masTask4End = mas1;
    let mas2 = masNum.reduce((sum, current) => {
      mas1.push(sum);
      return sum + current;
    });
    mas1.push(mas2);
    return this.masTask4End;
  }

  constructor() {
  }

  ngOnInit() {
  }
}
