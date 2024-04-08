function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.every(word => typeof word === 'string')) {
            const capitalizedWords = words.map(word => word.toUpperCase());
            res(capitalizedWords);
        } else {
            rej("Array contains non-string elements");
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(words) && words.length > 4) {
            const sortedWords = words.sort();
            res(sortedWords);
        } else {
            rej("Array length is not bigger than 4");
        }
    });
}

makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));