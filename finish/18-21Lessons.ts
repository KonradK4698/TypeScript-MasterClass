interface Order {
    id: string;
    amount: number; 
    currency: string;
}

interface Stripe{
    type: 'stripe';
    card: string; 
    cvc: string; 
}

interface PayPal {
    type: 'paypal';
    email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & { name: string};

const order: Order = {
    id: 'xj23s',
    amount: 100,
    currency: 'USD'
};

const orderCard: CheckoutCard = {
    ...order,
    type: 'stripe',
    card: '1000 2000 300 04000',
    cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
    ...order,
    type: 'paypal',
    email: "email@mail.com"
};

const assigned = Object.assign({}, order, orderCard)

//siscriminated unions type
type Payload = CheckoutCard | CheckoutPayPal

function checkout(payload: Payload){
    if(payload.type === 'stripe'){
        console.log(payload.card, payload.cvc);
    }
    if(payload.type === 'paypal'){
        console.log(payload.email);
    }
}

//interface vs type aliases
interface Item {
    name: string;
}

interface Artist extends Item{
    songs: number;
}

interface Artist {
    getSongs(): number;
}

type Astist2 = {
    name: string;
} & Item;

const newArtist: Artist = {
    name: 'ABC',
    songs: 5, 
    getSongs() { return this.songs}
}

//interface vs classes

// interface Artist2 {
//     name: string; 
// }

class ArtistCreator /*implements Artist2*/ {
    constructor(public name: string) {}
}

function artistFactory({ name }: ArtistCreator){
    // return { id: 101, name};
    return new ArtistCreator(name);
}

artistFactory({name: 'Konrad'});