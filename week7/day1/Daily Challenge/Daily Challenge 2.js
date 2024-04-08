const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

  function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        rej("Morse JavaScript object is empty");
      } else {
        res(morseJS);
      }
    });
  }

  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const input = prompt("Enter a word or sentence:");
      if (!input || input.trim() === "") {
        rej("Input is empty");
      } else {
        const morseTranslation = [];
        for (let char of input.toLowerCase()) {
          if (morseJS[char]) {
            morseTranslation.push(morseJS[char]);
          } else {
            rej(`Character '${char}' doesn't exist in the Morse JavaScript object`);
            return; 
          }
        }
        res(morseTranslation);
      }
    });
  }
  
  function joinWords(morseTranslation) {
    const morseText = morseTranslation.join("<br>");
    console.log(morseText); 
  }
  
 
  toJs()
  .then(toMorse)
  .then(joinWords)
  .catch((error) => {
    console.error(error);
    alert("Error occurred: " + error);
  });