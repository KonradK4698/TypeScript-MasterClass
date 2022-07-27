declare enum Sizes {
    Small = 0,
    Medium = 1,
    Large = 2
}
declare enum Sizes {
    ExtraLarge = 3
}
declare const selectedSize = 2;
declare const enum SizesString {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
declare let selected: SizesString;
declare function updateSize(size: SizesString): void;
