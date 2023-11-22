import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { OrderModel } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private noxusUrl = environment.noxusUrl;

  constructor(private httpClient: HttpClient) { }
  
  getOrdersSortedByStatus() {
    const headers = new Headers();

    const localStorageJwtToken = localStorage.getItem('jwtToken');

    if (localStorageJwtToken) {
      headers.append('Authorization', localStorageJwtToken);
    return this.httpClient.post<any>(`${this.noxusUrl}/authentication/login`, {headers: headers});

    } else {
      alert("Autentique novamente.")
    }
  }

}
