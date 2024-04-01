(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    var sentence = "You will be a " + jobTitle + "in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.";
    document.getElementById('output').innerText = sentence;
})
(2, "Alice", "Boston", "Developer");