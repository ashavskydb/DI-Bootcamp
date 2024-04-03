document.getElementById("myForm").addEventListener("submit", handleSubmit);
    
function preventDefault(e) {
    e.preventDefault();
    const formData = new FormData (document.getElementById("myForm"));
    const entries = formData.entries();
    const data = Object.fromEntries(entries)

    const dataString = JSON.stringify(data);
    const p = document.createElement("p");
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = dataString;
}




