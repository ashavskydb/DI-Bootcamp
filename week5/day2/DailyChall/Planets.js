
const planets = [
    { name: "Mercury", moons: 0, color: "darkgrey" },
    { name: "Venus", moons: 0, color: "yellow" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 79, color: "orange" },
    { name: "Saturn", moons: 82, color: "goldenrod" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "blueviolet" }
  ];
  
 
  function createPlanets() {
    const section = document.querySelector('.listPlanets');
  
    planets.forEach(planet => {
      const planetDiv = document.createElement('div');
      planetDiv.classList.add('planet', planet.name.toLowerCase());
      planetDiv.style.backgroundColor = planet.color;
      planetDiv.textContent = planet.name;
  
      if (planet.moons > 0) {
        for (let i = 0; i < planet.moons; i++) {
          const moonDiv = document.createElement('div');
          moonDiv.classList.add('moon');
          planetDiv.appendChild(moonDiv);
        }
      }
  
      section.appendChild(planetDiv);
    });
  }

  document.addEventListener('DOMContentLoaded', createPlanets);
  