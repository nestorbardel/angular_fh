interface AudioPlayer{
    audioVolume: number;
    songDuration:number;
    song: string;
    details:Details;
}

interface Details{
    author:string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed sheeran",
        year:2015
    }
}

const song: string = 'New Song';
const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author} = details;



// console.log('Song: ', anotherSong);
// console.log('Duration: ', duration);
// console.log('Author: ', author);

const [p1, p2, trunks = 'Not Found']: string[] = ['Goku', 'Vegeta'];

console.error('Personaje 3: ', trunks);







export{}