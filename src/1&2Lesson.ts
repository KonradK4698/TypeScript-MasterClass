//Object literal
const myObj = {
    myMethod() {
        console.log('Object: ', this)
    }
}

myObj.myMethod();

// Function 
function myFunction(this: any, ...text: string[]){
    console.log('Function ', this, text);
}
myFunction('ABC', 'DEF');
const bindFunction = myFunction.bind(myObj);
bindFunction( 'ABC', 'DEFdd');
bindFunction( '123', 'DEFdd');
bindFunction( 'ABC', 'DEFccdd');
myFunction.call(myObj, 'ABC', 'DEF');
myFunction.apply(myObj, ['ABC', 'DEF']);


//lesson 3
class MyClass{
    myMethod() {
        const foo = 123;
        console.log('1', this);
        setTimeout(() => {
            console.log('2', this);
        }, 0);
    }
}

const myInstance = new MyClass();
myInstance.myMethod();


//lesson 4

const elem = document.querySelector('.click');

function handleClick(this: HTMLAnchorElement, event: Event){
    event.preventDefault();
    console.log(this.href);
}


elem.addEventListener('click', handleClick, false);