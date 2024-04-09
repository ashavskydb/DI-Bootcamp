const apiUrl = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;

const api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchTerm = 'sun';
const limit = 10;
const offset = 2;

const url = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&offset=${offset}&rating=g&api_key=${api_key}`;


fetch(url)
.then((resolve) => {
    if (!resolve.ok) {
        throw new Error('Network response is not ok');
    }
    return resolve.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
});

