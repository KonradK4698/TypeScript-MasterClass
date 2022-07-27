enum Sizes {
    Small, 
    Medium, 
    Large
}

enum Sizes{
    ExtraLarge = 3, 

}

const selectedSize = 2;

console.log(Sizes.Medium, Sizes[Sizes.Medium])

console.log(Sizes[selectedSize])

const enum SizesString {
    Small = 'small', 
    Medium = 'medium', 
    Large = 'large'
}

let selected: SizesString = SizesString.Small;

function updateSize(size: SizesString): void {
    selected = size;
}

updateSize(SizesString.Large);
console.log(selected);