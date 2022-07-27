class Pizza{
    constructor(private name: string, private price: number){}
}

class List<T> {
    private list: T[];

    addItem(item: T): void{
        this.list.push(item);
    }

    getList(): T[]{
        return this.list;
    }
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));

const pizzas = list.getList();

class Coupon {
    constructor(private name: string){}
}

const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZZZAASSS123'))

//function overloads 
function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
    if(typeof stringOrArray === 'string'){
        return stringOrArray.split('').reverse().join('');
    }
    return stringOrArray.slice().reverse();
}

reverse('Pepperoni');
reverse(['bacon', 'pepperoni', 'chilli', 'mushroms']);
reverse([1,2,3,4]);
reverse('ASC');