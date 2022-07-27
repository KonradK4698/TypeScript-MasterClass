declare class Song {
    title: string;
    duration: string | number;
    kind: 'song';
    constructor(title: string, duration: string | number);
}
declare function getSongDuration(item: Song): string;
declare const songDurationFromString: string;
declare const songDurationFromMS: string;
declare class Foo {
    bar(): void;
}
declare const bar: Foo;
declare class Playlist {
    name: string;
    songs: Song[];
    kind: 'playlist';
    constructor(name: string, songs: Song[]);
}
declare function isSong(item: any): item is Song;
declare function getItemName(item: Song | Playlist): string;
declare const songName: string;
declare const playlistName: string;
