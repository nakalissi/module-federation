import { Component } from "@angular/core";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.css"],
})
export class MenuComponent {
    menuItems = [
        { label: "Home", path: "/" },
        { label: "Flights", path: "/flights/flights-search" },
        { label: "Checkout", path: "/checkout/cart" },
        { label: "React", path: "/react" },
        { label: "Login", path: "/login" },
    ];

    constructor() { }
}