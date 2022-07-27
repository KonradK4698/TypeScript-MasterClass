interface PersonMap {
    name: string;
    age?: number;
}
declare const personMap: PersonMap;
declare type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
};
declare function freezePerson<T>(obj: T): Readonly<T>;
declare const newPersonMap: Readonly<PersonMap>;
interface PartialPerson {
    name?: string;
    age?: number;
}
declare type MyPartial<T> = {
    [P in keyof T]: T[P];
};
declare function upadtePerson(person: PersonMap, prop: Partial<PersonMap>): {
    name: string;
    age?: number;
};
declare type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};
declare function printAge(person: MyRequired<PersonMap>): string;
declare const personMapRequired: Required<PersonMap>;
declare const age: string;
declare type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
declare const personPick: Pick<PersonMap, 'name' | 'age'>;
declare let dictionary: Record<string, TrackStates>;
interface TrackStates {
    current: string;
    next: string;
}
declare const item: Record<keyof TrackStates, string>;
