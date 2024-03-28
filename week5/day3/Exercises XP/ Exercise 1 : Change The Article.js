// Exercise 1 : Change The Article

// const h1Element = document.querySelector('h1');
// console.log(h1Element.textContent);

// const articleElement = document.querySelector('article');
// const lastParagraph = articleElement.querySelector('p:last-child');
// articleElement.removeChild(lastParagraph);

// const h2Element = Document.querySelector('h2')
// h2Element.addEventListener('click', function() {
//     h2Element.style.backroundColor= 'red';
// });

// const h3Element = document.querySelector('h3');

// h3Element.addEventListener('click', function() {
//     h3Element.style.display = 'none';
// });

// const boldButton = document.getElementById('boldButton');

// boldButton.addEventListener('click', function() {
   
//     const paragraphs = document.querySelectorAll('article p');

//     paragraphs.forEach(function(paragraph) {
//         paragraph.style.fontWeight = 'bold';
//     });
// });

// h1Element.addEventListener('mouseover', function() {
//     const randomFontSize = Math.floor(Math.random() * 101);
//     h1Element.style.fontSize = randomFontSize + 'px';
// });

// const fadeOutParagraph = document.getElementById('fadeOutParagraph');
// fadeOutParagraph.addEventListener('mouseover', function() {
//     fadeOutParagraph.style.opacity = '0';
// });


const h1Element = document.querySelector('h1');
console.log(h1Element.textContent);

const articleElement = document.querySelector('article');
const lastParagraph = articleElement.querySelector('p:last-child');
articleElement.removeChild(lastParagraph);

const h2Element = document.querySelector('h2');
h2Element.addEventListener('click', function() {
    h2Element.style.backgroundColor = 'red';
});

const h3Element = document.querySelector('h3');
h3Element.addEventListener('click', function() {
    h3Element.style.display = 'none';
});

const boldButton = document.getElementById('boldButton');
boldButton.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('article p');
    paragraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
});

h1Element.addEventListener('mouseover', function() {
    const randomFontSize = Math.floor(Math.random() * 101);
    h1Element.style.fontSize = randomFontSize + 'px';
});

const fadeOutParagraph = document.getElementById('fadeOutParagraph');
fadeOutParagraph.addEventListener('mouseover', function() {
    fadeOutParagraph.style.opacity = '0';
});
