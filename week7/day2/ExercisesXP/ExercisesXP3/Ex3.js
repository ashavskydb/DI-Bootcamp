fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));

    async function getStarShips() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!response.ok) {
            throw new Error('Failed to fetch starship data');
        }
        const objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (error) {
        console.error('Error fetching starship data:', error);
    }
}

getStarShips();