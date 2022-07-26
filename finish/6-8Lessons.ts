const person = {
    name: 'Konrad',
    age: 24
}

type Person = typeof person;
type PersonKeys = keyof Person; //union type name | age

type PersonTypes = Person[PersonKeys];

function getProperty<T, K extends keyof T>(obj: T, key: K) {

    return obj[key];
}

const personName = getProperty(person, 'name')

const anotherPerson: Person = {
    name: 'John',
    age: 30
}

const anotherPerson2: typeof person = {
    name: 'John',
    age: 30
}
