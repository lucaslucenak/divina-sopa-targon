import { Component } from '@angular/core';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'targon';

  constructor(private orderService: OrderService) {
    orderService.getOrdersSortedByStatus().subscribe(res => console.log(res.content))
  }

}
