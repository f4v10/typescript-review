import { v4 as uuidv4 } from 'uuid';
import {SalesOrderItem} from "./sales-order-item";

export class SalesOrder {
    private readonly _id: string;
    private readonly _customerId: string;
    private _items: SalesOrderItem[];

    constructor(customerId: string) {
        this._id = uuidv4();
        this._customerId = customerId;
        this._items = [];
    }

    get id(): string {
        return this._id;
    }

    get customerid(): string {
        return this._customerId;
    }

    addItem(productId: string, quantity: number, unitPrice: number): void {
        this._items.push(new SalesOrderItem(productId, quantity, unitPrice, this._id));
    }

    calculateTotalPrice(): number {
        return this._items.reduce((total:number, item:SalesOrderItem) => total + item.calculateItemPrice(), 0);
    }
}