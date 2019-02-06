import {Component, OnInit} from '@angular/core';
import {ExamplesService} from '../examples.service';

@Component({
  selector: 'app-examples-training',
  templateUrl: './examples-training.component.html',
  styleUrls: ['./examples-training.component.css']
})
export class ExamplesTrainingComponent {
  public objShow = {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
    show8: false,
    show9: false,
    show10: false,
    show11: false
  };
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
  public salariesFull = {
    'Vasya': 100,
    'Petya': 300,
    'Dasha': 250
  };
  public salariesNull = {};
  public sumSalaries: number;
  public nameEmployee: string;
  public menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };
  public obj = {className: 'open menu'};

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

  public salarySum(obj: object): number {
    const arrayNumber: Array<any> = [];
    if (Object.keys(obj).length === 0) {
      return this.sumSalaries = 0;
    } else {
      for (const k in obj) {
        if (obj.hasOwnProperty(k)) {
          let valueArrayObject: number;
          valueArrayObject = obj[k];
          arrayNumber.push(valueArrayObject);
          this.sumSalaries = arrayNumber.reduce((a, b) => a + b, 0);
        }
      }
    }
    return this.sumSalaries;
  }

  public bigSalary(obj: any): string {
    const arrayNumber: Array<any> = [];
    if (Object.keys(obj).length === 0) {
      return this.nameEmployee = 'No employees';
    } else {
      for (const k in obj) {
        if (obj.hasOwnProperty(k)) {
          const valueArrayObject: string = obj[k];
          arrayNumber.push(valueArrayObject);
          arrayNumber.sort(compareNumeric);
          if (arrayNumber[arrayNumber.length - 1] === obj[k]) {
            this.nameEmployee = k;
          }
        }
      }
    }
    return this.nameEmployee;
  }

  public multiplyNumeric(obj: object): any {
    for (const k in obj) {
      if (obj.hasOwnProperty(k)) {
        if (isNumeric(obj[k])) {
          obj[k] *= 2;
        }
      }
    }
  }

  public addClass(obj: object, cls: string): string {
    let propertiesObj;
    let newArray = [];
    for (const k in obj) {
      if (obj.hasOwnProperty(k)) {
        propertiesObj = obj[k];
        newArray = propertiesObj.split(' ');
        for (let i = 0; i < newArray.length; i++) {
          if (obj.hasOwnProperty(k)) {
            if (newArray.indexOf(cls) < 0) {
              newArray.splice(newArray.length, 0, cls);
              this.obj.className = newArray.join(' ');
              return this.obj.className;
            } else {
              return this.obj.className;
            }
          }
        }
      }
    }
  }
}

function compareNumeric(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
