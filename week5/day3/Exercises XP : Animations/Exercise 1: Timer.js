
function showAlert() {
    alert("Hello World");
  }
  
  function addParagraph() {
    const container = document.getElementById("container");
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
  }
  
 
  setTimeout(showAlert, 2000);
  
  setTimeout(addParagraph, 2000);
  
 
  function addParagraphInterval() {
    addParagraph();
    
    const paragraphs = document.querySelectorAll("#container p");
    if (paragraphs.length >= 5) {
      clearInterval(intervalId);
    }
  }
  
  const intervalId = setInterval(addParagraphInterval, 2000);
  

  document.getElementById("clear").addEventListener("click", function() {
    clearInterval(intervalId);
  });
  