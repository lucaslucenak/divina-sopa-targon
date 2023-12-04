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
    return this.httpClient.get<any>(`${this.noxusUrl}/order/sort-by-status`);
  }

  getOrderById(orderId: number) {
    return this.httpClient.get<any>(`${this.noxusUrl}/order/${orderId}`);
  }

}
