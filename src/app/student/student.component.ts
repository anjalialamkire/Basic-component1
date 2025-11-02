import { Component } from "@angular/core";


@Component({
    selector:'app-student',
    templateUrl:'./student.Component.html',
    
    styleUrls:['./student.component.scss']
})

export class StudentComponent{
   stdArr=[
    {
      fname:"Tony",
      Lname:"Stark",
      isActive:"true",
      email:'tony@starkindu.com',
      contact:'1234567'
    }
   
   ]
}