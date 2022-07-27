interface Order {
    id: string;
    amount: number;
    currency: string;
}
interface Stripe {
    type: 'stripe';
    card: string;
    cvc: string;
}
interface PayPal {
    type: 'paypal';
    email: string;
}
declare type CheckoutCard = Order & Stripe;
declare type CheckoutPayPal = Order & PayPal;
declare const order: Order;
declare const orderCard: CheckoutCard;
declare const orderPayPal: CheckoutPayPal;
declare const assigned: Order & Stripe;
declare type Payload = CheckoutCard | CheckoutPayPal;
declare function checkout(payload: Payload): void;
interface Item {
    name: string;
}
interface Artist extends Item {
    songs: number;
}
interface Artist {
    getSongs(): number;
}
declare type Astist2 = {
    name: string;
} & Item;
declare const newArtist: Artist;
declare class ArtistCreator {
    name: string;
    constructor(name: string);
}
declare function artistFactory({ name }: ArtistCreator): ArtistCreator;
