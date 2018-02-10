import { Observable, Observer } from "rxjs";

const numbers = [1, 2, 3, 4, 5, 6];
const source = Observable.from(numbers);

class MyObserver implements Observer<number> {
 
  next(value: any) {
    console.info(`value is ${value}`);
  }

  error(e: any) {
    console.error(`value is ${e}`);
  }

  complete() {
    console.log(`completed`);
  }
}

source.subscribe(new MyObserver());
source.subscribe(new MyObserver());
