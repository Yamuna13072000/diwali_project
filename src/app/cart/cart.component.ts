import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { single } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  userAddressForm!:FormGroup;
  cartItems:any;
  singleItemInCart:any;

  constructor(private _api:ApiService) { }

  ngOnInit(): void {
    this.getCartItems()

    this.userAddressForm = new FormGroup({
      fullname : new FormControl(""),
      email : new FormControl(""),
      mobile : new FormControl(""),
      address : new FormControl(""),
    })
  }


  getCartItems(){
    this._api.getCartElements().subscribe((res)=>{
      this.cartItems = res;
      console.log(this.cartItems)
    })
  }

  deleteItem(id:any){
    this._api.deletebyId(id).subscribe((res)=>{
      console.log("Item deleted")
      this.getCartItems()
    })
  }

  getSingleCartItem(item:any){
    this.singleItemInCart = item;
  }

  buyProduct(){
    //console.log(this.userAddressForm.value)
    this.singleItemInCart.fullname=this.userAddressForm.value.fullname
    this.singleItemInCart.email=this.userAddressForm.value.email
    this.singleItemInCart.mobile=this.userAddressForm.value.mobile
    this.singleItemInCart.address=this.userAddressForm.value.address

    // console.log(this.singleItemInCart);
    this._api.buyproducts(this.singleItemInCart).subscribe((res)=>{
      console.log(res);
      alert("Order Placed succesfully")
      this.userAddressForm.reset()
      this.deleteItem(this.singleItemInCart.id)

    },
    (error)=>{
      console.log(error)
      alert("You are alredy purchased this item please check in orders")
      this.userAddressForm.reset()
    })
  }
}
