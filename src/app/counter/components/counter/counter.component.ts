import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>

        <button (click)="increasedBy(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increasedBy(-1)">-1</button>
    `,
    // styleUrls: ['./counter/']
})
export class CounterComponent {

    public counter: number = 10;

    // increasedBy( value: string ): void {
    //   if(value === 'increase') {
    //     this.counter += 1;
    //   } else {
    //     this.counter -= 1;
    //   }
    // }
  
    increasedBy( value: number ): void {
      this.counter += value;
    }
  
    resetCounter() {
      this.counter = 10;
    }
}