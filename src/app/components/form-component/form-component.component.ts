import { Component } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  variable = "";

  setValue(){
    this.variable = "VariableName";
  }
  submit(login:any){
    console.log("Form submitted.", login);
  }
}
