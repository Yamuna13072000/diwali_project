import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  allOrderItems:any;

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders(){
    this._api.getOrderItems().subscribe((res)=>{
      console.log(res)
      this.allOrderItems = res;
    })
  }

}
