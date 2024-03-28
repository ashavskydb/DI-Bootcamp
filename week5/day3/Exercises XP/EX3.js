var allBoldItems

function getBoldItems() {
    var paragraph = document.querySelector('p');
    var boldItems = paragraph.querySelectorAll('strong');
    allBoldItems = Array.from(boldItems);
}

getBoldItems();

console.log(allBoldItems);

function highlight() {
    allBoldItems.forEach(function(boldItem) {
        boldItem.style.color = 'blue';
    });
}
highlight();

function returnItemsToDefault() {
    allBoldItems.forEach(function(boldItem){
        boldItem.style.color = 'black';
    });
}

var paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

returnItemsToDefault();
