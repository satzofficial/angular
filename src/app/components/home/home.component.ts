import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = "HomeComponentTitle";
  homeComponent = "HomeComponent";
  isDisabled:boolean = true;
  redSize: string= 'red size20';
  red: string = 'red';
  
  getClass(){
    return 'SATZ getClass';
  }

  hasError() {
    return false
  }
}
