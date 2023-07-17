import { Component, OnInit } from '@angular/core';
import { single } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  constructor(private _api:ApiService) { }

  singleProduct:any;

  products:any;
  
  value=1;
  
  ngOnInit(): void {
    this.getProductDetails()
  }

  onIncrement(){
    if(this.value>=1){
      this.value=this.value+1
    }
  }
  onDecrement(){
    if(this.value>=2){
      this.value=this.value-1
    }
    else{
      this.value = 1;
    }
  }

  getProductDetails(){
    this._api.getData().subscribe((res:any)=>{
      this.products = res;
      console.log(this.products)
    })
  }

  singleProductDeatails(i:any){
    console.log("Product clicked id is ",i.id)
    this.singleProduct = i  
  }

  buyProduct(val:any){
   this.singleProduct.quantity=val;
   this.singleProduct.price = this.singleProduct.price
    this._api.postData(this.singleProduct).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
