import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Calculator';

  count = 5;

  listOfNumbers = [0,1,2,3,4,5]
  listOfNames = []
  number1=0
  number2=0
  sum = 0
  add = () => {
    this.sum = this.number1+this.number2
  }


}
