import { Component } from "@angular/core";
import { postsArr } from "../consts/cards";
import { Icard } from "../models/cards";

@Component({
    selector:'app-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.scss']
})

export class CardComponent{
    postsArr : Array<Icard> = postsArr
}