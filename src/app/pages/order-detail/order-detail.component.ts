import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  
  orderId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const orderId = parseInt(this.route.snapshot.paramMap.get('orderId')!);
    if (orderId && orderId != 0) {
      this.orderId = orderId;
    } else {
      alert('Pedido não encontrado');
      this.router.navigate(['/delivery']);
    }
  }

}
