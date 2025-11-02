import { Component } from "@angular/core";
import { FormArrayName } from "@angular/forms";
import { profile } from "console";

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent1{
    public productName:string='samsung M31'
    public productId : string = 'S-132'
    
   userInfo ={
    fname :'Jhon',
    lname:'Doe',
    nativeplace:'Mumbai',
    profile:'Full Stack Developer'
   }

   userInfo2 ={
    fname:'May',
    lname:'Doe',
    nativeplace:'pune',
    profile:'Mean stack Developer'
   }

   userInfo3={
    fname :'shrushti',
    lname:'patil',
    nativeplace:'delhi',
    profile:'Engineer'
   }

   userInfo4 ={
    fname:'vaishnavi',
    lname:'biradar',
    nativeplace:'hydrabad',
    profile:'Doctor'
   }

    skills : Array<string> = ['HTML','CSS','JS']
    skills1 :Array<string>=['React','Angular','DSA']

    skills2:Array<string>=['pizza','Burger','Wadapav']
     
}