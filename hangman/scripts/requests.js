
const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch the puzzle.');
    };
};

// const getCurrentCountry = async () => {
//     const location = await getLocation();
//     return getCountry(location.country);
// };

// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch the puzzle.');
//         };
//     }).then((data) => {
//         return data.puzzle;
//     });
// };

// const getCountry = async (countryCode) => {
//     const response = await fetch('http://restcountries.eu/rest/v2/all', {});

//     if (response.status === 200) {
//         const data = await response.json();
//         return data.find((country) => country.alpha2Code === countryCode);
//     } else {
//         throw new Error('Unable to fetch country data');
//     };
// };

// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all', {}).then((response) => {
//         if(response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch country data');
//         };
//     }).then((data) => {
//             return data.find((country) => country.alpha2Code === countryCode);
//     });
// };

// const getLocation = async () => {
//     const response = await fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c', {});

//     if(response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('Unable to fetch location data');
//     };
// };

// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=1a11bd55cc8f9c', {}).then((response) => {
//         if(response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch location data');
//         };
//     });
// };

// const getCountry = (countryCode) => new Promise( (resolve, reject) => {

//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data');
//         };
//     });

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
//     countryRequest.send();

// });

// const getPuzzle = (wordCount) => new Promise( (resolve, reject) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {        // 4 is 'DONE', the final response
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place');
//         };
//     });

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// });

// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3', false);
//     request.send();

//     if (request.readyState === 4 && request.status === 200) {        // 4 is 'DONE', the final response
//         const data = JSON.parse(request.responseText);
//         return data;
//     } else if (request.readyState === 4) {
//         throw new Error('Things did not go well');
//     };

// };

// const getPuzzle = () => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {        // 4 is 'DONE', the final response
//             const data = JSON.parse(e.target.responseText);
//             console.log(data);
//             return data;
//         } else if (e.target.readyState === 4) {
//             console.log('An error has taken place');
//         }
//     });

//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
//     request.send();
// };