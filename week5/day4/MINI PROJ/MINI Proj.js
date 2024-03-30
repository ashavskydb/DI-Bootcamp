document.addEventListener("DOMContentLoaded", function() {
    const total_grid = document.querySelectorAll("#sidebar > *");
    const gridContainer = document.getElementById('grid-container');
    const colorPicker = document.getElementById('color-picker');
    const clearButton = document.getElementById('clear-button');
    const shuffleButton = document.getElementById('shuffle-button');

    let selectedColor = "rgb(0, 0, 0)";
    let isDrawing = false;
    let mousedown = false;

 
    colorPicker.innerHTML = generateColorPalette(); 
    const colorBlocks = document.querySelectorAll(".color");
    colorBlocks.forEach((block) => {
        block.addEventListener("click", function(event) {
            selectedColor = event.target.style.backgroundColor;
        });
    });

   
    function generateColorPalette() {
        let paletteHTML = "";
        for (let i = 0; i < 21; i++) {
            const randomColor = getRandomColor();
            paletteHTML += `<div class="color" style="background-color: ${randomColor};"></div>`;
        }
        return paletteHTML;
    }

  
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.addEventListener('mousedown', startDrawing);
            square.addEventListener('mouseover', draw);
            gridContainer.appendChild(square);
        }
    }


    function startDrawing(event) {
        isDrawing = true;
        draw(event.target);
    }

    function draw(square) {
        if (isDrawing && mousedown) {
            square.style.backgroundColor = selectedColor;
        }
    }


    document.addEventListener('mousedown', function() {
        mousedown = true;
    });

    document.addEventListener('mouseup', function() {
        mousedown = false;
        isDrawing = false;
    });


    clearButton.addEventListener('click', clearGrid);

    
    function clearGrid() {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.style.backgroundColor = 'white';
        });
    }

    
    shuffleButton.addEventListener('click', shuffleColors);

   
    function shuffleColors() {
        const colorBlocks = document.querySelectorAll(".color");
        colorBlocks.forEach((block) => {
            const randomColor = getRandomColor();
            block.style.backgroundColor = randomColor;
        });
    }

   
    const color_blocks = document.querySelectorAll(".color");
    const fill_blocks = document.querySelectorAll(".square");
    
    for (color_block of color_blocks) {
        color_block.addEventListener("click", function(event) {
            selectedColor = event.target.style.backgroundColor;
        });
    }

    for (fill_block of fill_blocks) {
        fill_block.addEventListener("mousedown", function(event) {
            if (selectedColor !== null) {
                event.target.style.backgroundColor = selectedColor;
            }
        });
        fill_block.addEventListener("mouseover", function(event) {
            if (mousedown && selectedColor !== null) {
                event.target.style.backgroundColor = selectedColor;
            }
        });
    }
});
