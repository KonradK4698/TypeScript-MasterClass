declare class Pizza {
    private name;
    private price;
    constructor(name: string, price: number);
}
declare class List<T> {
    private list;
    addItem(item: T): void;
    getList(): T[];
}
declare const list: List<Pizza>;
declare const pizzas: Pizza[];
declare class Coupon {
    private name;
    constructor(name: string);
}
declare const anotherList: List<Coupon>;
declare function reverse(str: string): string;
declare function reverse<T>(arr: T[]): T[];
