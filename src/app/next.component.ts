import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'next',
  template: `
    <h1>Next</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  ngOnInit() {
    const sqnc = new Observable(countOnetoTen);

    sqnc.subscribe(x => {
      console.log(x);
    });

    function countOnetoTen(observer) {
      for (var i = 1; i <= 10; i++) {
        observer.next(i);
      }
      return { unsubscribe() {} };
    }
  }
}
