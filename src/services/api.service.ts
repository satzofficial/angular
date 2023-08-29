import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../app/model/users';
import { Product } from '../app/model/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  redirectUrl!: string;
  PHP_API_SERVER: string = 'http://localhost/SATZ/ng/php';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  
  public userlogin(username: any, password: any) {    
    return this.httpClient
      .post<any>(this.PHP_API_SERVER + '/login.php', { username, password })
      .pipe(
        map((Users) => {
          this.setToken(Users[0].name);
          this.getLoggedInName.emit(true);
          return Users;
        })
      );
  }

  public userregistration(name: any, email: any, pwd: any) {
    return this.httpClient
      .post<any>(this.PHP_API_SERVER + '/register.php', { name, email, pwd })
      .pipe(
        map((Users) => {
          return Users;
        })
      );
  }


  readProducts(): Observable<Product[]>{
		return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER}/index.php`);
	}
	createProduct(product: Product): Observable<Product>{
		return this.httpClient.post<Product>(`${this.PHP_API_SERVER}/create_product.php`, product);
	}
	updateProduct(product: Product){
		return this.httpClient.put<Product>(`${this.PHP_API_SERVER}/update_product.php`, product);
	}
	deleteProduct(id: number){
		return this.httpClient.delete<Product>(`${this.PHP_API_SERVER}/delete_product.php/?id=${id}`);
	}

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
}