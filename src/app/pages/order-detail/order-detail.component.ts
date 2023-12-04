import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { OrderModel } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  
  orderId: number | null = null;
  order: OrderModel | null = null;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService) {}

  ngOnInit() {
    const paramOrderId = parseInt(this.route.snapshot.paramMap.get('orderId')!);
    if (paramOrderId) {
      this.orderId = paramOrderId;
      this.fetchOrder(this.orderId);
    } else {
      alert('Pedido não encontrado');
      this.router.navigate(['/delivery']);
    }
  }

  fetchOrder(orderId: number): void {
    this.orderService.getOrderById(orderId).subscribe({
      next: (res) => {
        this.order = res;
      },
      error: (error) => {
        console.error("Erro ao carregar o pedido: ", error);
      }
    })
  }

}
