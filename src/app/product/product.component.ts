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
    profile:'FullStackDeveloper'
   }

   userInfo2 ={
    fname:'May',
    lname:'Doe',
    nativeplace:'pune',
    profile:'MeanstackDeveloper'
   }


    skills : Array<string> = ['HTML','CSS','JS']
    skills1 :Array<string>=['React','Angular','DSA']
     
}