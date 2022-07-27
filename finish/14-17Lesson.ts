// function foo(bar: string | number){
//     if(typeof bar === 'string') {
//         return bar.toUpperCase();
//     }
//     //number
//     return bar.toFixed(2)
// }

class Song{
    kind: 'song';
    constructor(public title: string, public duration: string | number){}
}

function getSongDuration(item: Song){
    if(typeof item.duration === 'string'){
        return item.duration;
    }
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(new Song('Wondergul Wonderful', '05:31'));

console.log(songDurationFromString);

const songDurationFromMS = getSongDuration(new Song('Wondergul Wonderful2222', 330000));

console.log(songDurationFromMS);

//instanceof and type guards

class Foo {
    bar() {}
}
const bar = new Foo();

// console.log(bar instanceof Foo);
// console.log(Object.getPrototypeOf(bar) === Foo.prototype);

class Playlist {
    kind: 'playlist';
    constructor(public name: string, public songs: Song[]){}
}

//wersja z AS

// function getItemName(item: Song | Playlist){
//     if((item as Song).title){
//         return (item as Song).title //Song
//     }
//     return (item as Playlist).name;
// }

//wersja instanceof

// function getItemName(item: Song | Playlist){
//     if(item instanceof Song){
//         return item.title //Song
//     }
//     return item.name; //playlist
// }

//własne zabezpieczenie z IS

// function isSong(item: any): item is Song{
//     return item instanceof Song
// }

//zabezpieczenie z IN
function isSong(item: any): item is Song{
    return 'title' in item;
}

//literal type guards
function getItemName(item: Song | Playlist){
    // if(isSong(item)){
    if(item.kind === 'song'){
        return item.title; //Song
    }
    return item.name;
}

const songName = getItemName(new Song('Wondergul Wonderful2222', 330000));
console.log('Song name: ', songName);

const playlistName = getItemName(
    new Playlist('The best Song', [new Song('Wondergul Wonderful2222123123', 330000) ])
)

console.log('Playlist name: ', playlistName)




