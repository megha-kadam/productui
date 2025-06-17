import { Component } from "@angular/core";
import { mobileProduct } from "src/consts/product";
import { Imobile } from "src/models/product.interface";

@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})
export class productComponent {
    productArr : Array<Imobile> = mobileProduct;
}