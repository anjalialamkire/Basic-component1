import { Component } from "@angular/core";
import { Istudent } from "../models/product";


@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',

    styleUrls:['./student.component.scss']
})

export class StudentComponent{
   stdArr :Array<Istudent> =[
    {
      fname:"Tony",
      lname:"Stark",
      isActive:true,
      email:'tony@starkindu.com',
      contact:1234567
    },
    {
        fname:'peter',
        lname:'parkar',
        isActive:false,
        email:'peter@starkindu.com',
        contact:34567890
    },
    {
        fname:'john',
        lname:'Doe',
        isActive:true,
        email:'john@Doe.com',
        contact:12345865
    },


   
   ]
}