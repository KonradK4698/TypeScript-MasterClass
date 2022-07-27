import * as lodash from 'lodash';

lodash.chunk([1,2,3,4], 2);
lodash.mixin({
    log(item: string){
        console.log(":::", item);
    }
})

lodash.log('Hello!');

export class Foo {
    constructor(public name: string){}
    bar(age: number){}
}
