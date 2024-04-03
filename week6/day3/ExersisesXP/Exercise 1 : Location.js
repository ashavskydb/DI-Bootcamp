const person = {
    name: 'John Doe', // A "person" object is defined, which includes attributes such as name, age, and location. The "location" attribute is also an object with properties like country, city, and coordinates.
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person; //This line of code uses destructuring assignment to extract values from the person object into variables.

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//My opinion is that the result will be the output: "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)".