console.log('ajax');

const button = document.querySelector('#button');
const nameElem = document.querySelector('#name');
const heightElem = document.querySelector('#height');
const genderElem = document.querySelector('#gender');
const birthYearElem = document.querySelector('#birth-year');
const homeWorldElem = document.querySelector('#home-world');

button.addEventListener('click', getInfo);

async function getInfo() {
    updateWithLoading();
    const randomNumber = Math.floor((Math.random() * 83) + 1); 
    const apiUrl = `https://www.swapi.tech/api/people/${randomNumber}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch character');
        }
        const data = await response.json();
        updateInfo(data.result.properties);
    } catch (error) {
        updateInfoWithError();
        console.error('There was an error:', error);
    }
}

async function updateInfo(character) {
    nameElem.innerText = character.name;
    heightElem.innerText = `Height: ${character.height}`;
    genderElem.innerText = `Gender: ${character.gender}`;
    birthYearElem.innerText = `Birth Year: ${character.birth_year}`;

    try {
        const response = await fetch(character.homeworld);
        if (!response.ok) {
            throw new Error('Failed to fetch homeworld');
        }
        const data = await response.json();
        homeWorldElem.innerText = `Home World: ${data.result.properties.name}`;
    } catch (error) {
        console.error('Error fetching homeworld:', error);
    }
}

function updateInfoWithError() {
    nameElem.innerText = 'Oh No! That person isnt available.';
    heightElem.innerText = '';
    genderElem.innerText = '';
    birthYearElem.innerText = '';
    homeWorldElem.innerText = '';
}

function updateWithLoading() {
    nameElem.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    heightElem.innerText = '';
    genderElem.innerText = '';
    birthYearElem.innerText = '';
    homeWorldElem.innerText = '';
}
