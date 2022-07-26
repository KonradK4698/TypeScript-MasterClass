interface PersonMap {
    name: string; 
    age?: number;
}

const personMap: PersonMap = {
    name: ' Konrad',
    age: 24
}

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

function freezePerson<T>(obj: T): Readonly<T>{
    return Object.freeze(obj);
}

const newPersonMap = freezePerson(personMap);

// newPersonMap.age = 23

//partial mapped type

interface PartialPerson {
    name?: string; 
    age?: number;
}

type MyPartial<T> = {
    [P in keyof T]: T[P]
}

function upadtePerson(person: PersonMap, prop: Partial<PersonMap>){
    return {...person, ...prop};
}

upadtePerson(personMap, {name: 'ABC'});

//required mapped type

type MyRequired<T> = {
    [P in keyof T]-?: T[P]
}

function printAge(person: MyRequired<PersonMap>){
    return `${person.name} is ${person.age}`;
}

const personMapRequired: Required<PersonMap> = {
    name: ' Konrad',
    age: 24
}

const age = printAge(personMapRequired);

//pick mapped type

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

const personPick: Pick<PersonMap, 'name' | 'age'> = {
    name: 'Konrad',
    age: 24
}

//record mapped type
// let dictionary: { [key: string]: any} = {}; 
let dictionary: Record<string, TrackStates> = {}; 

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates,  string> = {
    current: 'js02js9',
    next:  '8jasdn'
};

// Numbers are coerced to String
dictionary[0] = item;
