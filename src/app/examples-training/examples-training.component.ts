import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-examples-training',
  templateUrl: './examples-training.component.html',
  styleUrls: ['./examples-training.component.css']
})
export class ExamplesTrainingComponent {
  public objShow = {show1: false, show2: false, show3: false, show4: false, show5: false, show6: false, show7: false};
  public resultStringWithSymbolUp = '';
  public arrayOfStringsForCountSymbolsAmount: string[] = ['Есть', 'жизнь', 'на', 'Марсе'];
  public arrLengthOfEachString: number[] = [];
  public arrSumOfNumbers: number[] = [1, 2, 3, 4, 5, 9];
  public arrayOfSums: number[] = [];
  public isSpamInMessage: boolean;
  public strTruncateResult: string;
  public extractCurrencyValuePrice: number;
  public objectForTestingIsEmpty = {test: 'test'};
  public isObjectEmpty: boolean;

  public bigFirstSymbol(str: string): string {
    if (!str) {
      return str;
    }
    this.resultStringWithSymbolUp = str[0].toUpperCase() + str.slice(1);
    return this.resultStringWithSymbolUp;
  }

  public stringToNum(str: string[]): number[] {
    this.arrLengthOfEachString = str.map((word: string) => {
      return word.length;
    });
    return this.arrLengthOfEachString;
  }

  public getSums(masNum: number[]): number[] {
    const mas1 = [];
    this.arrayOfSums = mas1;
    const mas2 = masNum.reduce((sum, current) => {
      mas1.push(sum);
      return sum + current;
    });
    mas1.push(mas2);
    return this.arrayOfSums;
  }

  public checkSpam(str: string): void {
    this.isSpamInMessage = str.toUpperCase().includes('AUDI') || str.toUpperCase().includes('BMW');
  }

  public truncate(str: string, maxlength: number): string {
    if (str.length > maxlength) {
      return this.strTruncateResult = str.slice(0, (maxlength - 3)) + '...';
    }
  }

  public extractCurrencyValue(str: string): number {
    str = '$120';
    const s = str.slice(1, str.length);
    const n = parseInt(s, 10);
    return this.extractCurrencyValuePrice = n;
  }

  public isEmpty(obj: object): void {
    this.isObjectEmpty = Object.keys(obj).length === 0;
  }
}
