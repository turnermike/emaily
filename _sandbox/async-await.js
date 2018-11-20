// make ajax request using 'fetch' function.
// https://rallycoding.herokuapp.com/api/music_albums
// fetch returns a promise
// we chain a .then statement to process the request

// function fetchAlbums() {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json => console.log(json));
// }

// refactored function (same as above)
// use async keyword and await keyword before the promise
// asign result of promise to variables
async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();

    console.log(json);
}

fetchAlbums();