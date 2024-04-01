const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    const ordinalIndex = index < 3 ? index + 1 : 0;
    const suffix = ordinal[ordinalIndex]
    console.log('${index + 1}${suffix} choice is ${color}');
});

