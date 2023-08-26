import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'TestingAngular';  
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
