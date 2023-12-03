import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { OrderService } from 'src/app/services/order.service';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/models/order.model';
import { data, error } from 'jquery';
import { DatePipe } from '@angular/common';

// export interface OrderModel {
//   id: number;
//   clientName: string;
//   clientCellphoneNumber: string;
//   orderStatus: string;
//   createdAt: Date;
//   orderPrice: number;
// }

// const DATA: OrderModel[] = [
//   {
//     "id": 24543,
//     "clientName": "Lucas Lucena",
//     "clientCellphoneNumber": "(83) 98690 7270",
//     "orderStatus": "PREPARING",
//     "createdAt": new Date("2023-03-01T22:10:00"),
//     "orderPrice": 10.50
//   },
//   {
//     "id": 24544,
//     "clientName": "Daniel Xavier",
//     "clientCellphoneNumber": "(83) 12345 6789",
//     "orderStatus": "FINISHED",
//     "createdAt": new Date("2023-11-18T22:30:00"),
//     "orderPrice": 40.53
//   },
//   {
//     "id": 3,
//     "clientName": "Fernando Alves",
//     "clientCellphoneNumber": "(83) 32165 4879",
//     "orderStatus": "DISPATCHED",
//     "createdAt": new Date("2023-11-18T22:03:00"),
//     "orderPrice": 100.54
//   },
//   {
//     "id": 3,
//     "clientName": "Mariluce Maria",
//     "clientCellphoneNumber": "(83) 94526 7846",
//     "orderStatus": "CANCELED",
//     "createdAt": new Date("2023-11-18T22:00:00"),
//     "orderPrice": 10.50
//   },
//   {
//     "id": 4,
//     "clientName": "Fernanda Aguiar",
//     "clientCellphoneNumber": "(83) 54136 8784",
//     "orderStatus": "ORDERED",
//     "createdAt": new Date("2023-11-18T22:00:00"),
//     "orderPrice": 10.50
//   }
// ];


@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent implements AfterViewInit{

  constructor(private orderService: OrderService) {}

  columns: string[] = ['id', 'clientName', 'address', 'orderStatus', 'createdAt', 'orderPrice', 'actions'];
  dataSource = new MatTableDataSource<OrderModel>();
  orders: OrderModel[] = [];

  ngOnInit(): void {
    this.fetchOrders();
    // this.orders.forEach(order => {
    //   order.createdAtFormatted = order.createdAt?.getHours().toString() + ':' + order.createdAt?.getMinutes().toString()  + ':' + order.createdAt?.getSeconds().toString()
    // })

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  fetchOrders(): void {
    this.orderService.getOrdersSortedByStatus().subscribe({
      next: (res) => {
        this.orders = res.content;

        this.orders.forEach((order: OrderModel) => {
          if (order.createdAt) {
            // order.createdAtFormatted = this.datePipe.transform(order.createdAt, 'HH:mm:ss')!;
          }
        })

        this.dataSource = new MatTableDataSource<OrderModel>(this.orders);
        this.dataSource.paginator = this.paginator;
      },
      error: (error) => {
        console.error('Erro ao carregar os pedidos: ', error);
      }
    })
  }

}
