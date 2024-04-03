import {SalesOrder} from "./sales/domain/model/sales-order";

const developer:"Developer" = 'Developer';

export function hello(who: string = developer):string {
    return `Welcome, ${who};`
}

let welcomeMessage = hello();

console.log("Functional Section");
console.log(welcomeMessage);

const salesOrder = new SalesOrder("C001");
salesOrder.addItem("P001", 2, 5);
salesOrder.addItem("P002", 5, 10);
console.log("Object-Oriented Section");
console.log(`Sales Order Total Price is ${salesOrder.calculateTotalPrice()}`);