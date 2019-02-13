import {Component} from '@angular/core';
import {ExamplesService} from '../examples.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-examples-training',
  templateUrl: './examples-training.component.html',
  styleUrls: ['./examples-training.component.css']
})
export class ExamplesTrainingComponent {
  public objShow = {};
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
  public sumSalaries: number;
  public nameEmployee: string;
  public menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };
  public objectObservable = {className: ''};
  public objectObservable2 = {className: ''};
  public subscription: Subscription;
  public str2 = '';
  public subscription2: Subscription;
  public arrayNumberStart = [5, 3, 8, 1];
  public arrayNumberEnd = [];
  public arrayReverseStart = [5, 2, 1, -10, 777];
  public arrayReverseEnd = [];
  public arrayOld = [5, 2, 1, -10, 777];
  public arrayNew = [];
  public selected = 'salariesFull';
  public arrayRandomStart = [1, 2, 3, 4, 5];
  public arrayRandomEnd = [];
  public arrayObservable: any;
  public subscription3: Subscription;
  public list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  public listEnd = '';
  public n: Array<number> = [];
  public anagramsStart = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
  public anagramsEnd: Array<string> = [];
  public uniqueStart = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];
  public uniqueEnd: Array<string>;

  public selectedChadge(event: any) {
    this.selected = event.target.value;
  }

  constructor(private examplesService: ExamplesService) {
  }

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

  public salarySum(): number {
    const arrayNumber: Array<any> = [];
    if (this.selected === 'salariesNull') {
      return this.sumSalaries = 0;
    } else if (this.selected === 'salariesFull') {
      for (const k in this.salariesFull) {
        if (this.salariesFull.hasOwnProperty(k)) {
          let valueArrayObject: number;
          valueArrayObject = this.salariesFull[k];
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

  public addClass(obj: object, cls: string): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.examplesService.getObj1().subscribe((data: object) => {
        let newArray = [];
        for (const k in obj) {
          if (obj.hasOwnProperty(k)) {
            newArray = data['className'].split(' ');
            for (let i = 0; i < newArray.length; i++) {
              if (obj.hasOwnProperty(k)) {
                if (newArray.indexOf(cls) < 0) {
                  newArray.splice(newArray.length, 0, cls);
                  if (this.objectObservable.className) {
                    this.objectObservable.className = this.objectObservable.className + ' ' + cls;
                  } else {
                    this.objectObservable.className = newArray.join(' ');
                  }
                }
              }
            }
          }
        }
      }
    );
  }

  public camelize(str: string): void {
    const arrayLowerCase = str.split('-');
    const arrayUpperCase = [];
    for (let i = 1; i < arrayLowerCase.length; i++) {
      arrayUpperCase.push(arrayLowerCase[i].charAt(0).toUpperCase() + arrayLowerCase[i].substring(1));
    }
    this.str2 = arrayLowerCase[0] + arrayUpperCase.join(',');
  }

  public removeClass(obj: any, cls: string): void {
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
    this.subscription2 = this.examplesService.objObservable2.subscribe((data: object) => {
        let newArray = [];
        for (const k in obj) {
          if (obj.hasOwnProperty(k)) {
            newArray = data['className'].split(' ');
            for (let i = 0; i < newArray.length; i++) {
              if (newArray[i] === cls) {
                delete newArray[i];
              }
              this.objectObservable2.className = newArray.join(' ');
            }
          }
        }
      }
    );
  }

  public filterRangeInPlace(arr: number[], a: number, b: number): void {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        this.arrayNumberEnd = arr;
      }
    }
  }

  public customSortReverse(arr: string[]): void {
    this.arrayReverseEnd = arr.reverse();
  }

  public createNewArray(arr: string[]): void {
    this.arrayNew = arr.sort(compareNumeric);
  }

  randomArray(arr: Array<number>): void {
    arr.sort(function () {
      return .5 - Math.random();
    });
    this.arrayRandomEnd = arr;
  }

  public sortOnAge(): void {
    let dataObjectFromObservable;
    let sortedObjects;
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
    this.subscription3 = this.examplesService.getArrayObjects().subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          dataObjectFromObservable = data[i];
          for (const key in dataObjectFromObservable) {
            if (dataObjectFromObservable.hasOwnProperty(key)) {
            }
          }
        }
        sortedObjects = data.sort(function (a, b) {
          return parseFloat(a.age) - parseFloat(b.age);
        });
        this.arrayObservable = sortedObjects;
      }
    );
  }

  public printListCycle(list): void {
    let x = '';
    while (list) {
      x = x + ' ' + list.value;
      list = list.next;
    }
    this.listEnd = x;
  }

  public printListRecursion(list): void {
    this.n.push(list.value);
    if (list.next) {
      this.printListRecursion(list.next);
    }
    this.listEnd = this.n.join(',');
  }

  public printReverseListRecursion(list) {
    if (list.next) {
      this.printReverseListRecursion(list.next);
    }
    this.listEnd = this.listEnd + ',' + list.value;
  }

  public printReverseListCycle(list): void {
    const arr = [];
    const arr2 = [];
    while (list) {
      arr.push(list.value);
      list = list.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      arr2.push(arr[i]);
    }
    this.listEnd = arr2.join(',');
  }

  public aclean(arr: string): Array<string> {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      const sorting = arr[i].toUpperCase().split('').sort().join('');
      obj[sorting] = arr[i];
    }
    for (const k in obj) {
      if (obj.hasOwnProperty(k)) {
        this.anagramsEnd.push(obj[k]);
      }
    }
    return this.anagramsEnd;
  }

  public unique(arr: Array<string>): Array<string> {
    const result = [];
    nextStr:
      for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        for (let j = 0; j < result.length; j++) {
          if (result[j] === str) {
            continue nextStr;
          }
        }
        result.push(str);
      }
    return this.uniqueEnd = result;
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
