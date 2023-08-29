import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    /*------------------------------------------
  --------------------------------------------
  Declare Form
  --------------------------------------------
  --------------------------------------------*/
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private http: HttpClient) { }
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.myForm.controls;
  }
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  } 
  
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    const formData:any = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);
     
    this.http.post('http://localhost/SATZ/ng/php/upload.php', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
}
