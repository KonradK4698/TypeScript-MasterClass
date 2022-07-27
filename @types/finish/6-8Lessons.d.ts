declare const person: {
    name: string;
    age: number;
};
declare type Person = typeof person;
declare type PersonKeys = keyof Person;
declare type PersonTypes = Person[PersonKeys];
declare function getProperty<T, K extends keyof T>(obj: T, key: K): T[K];
declare const personName: string;
declare const anotherPerson: Person;
declare const anotherPerson2: typeof person;
