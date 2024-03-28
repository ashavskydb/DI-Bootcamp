

document.addEventListener('DOMContentLoaded', function() { // this DOM event i was found on MDN web docs
    const form = document.getElementById('libform');
    const storyElement = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');
    let currentStoryIndex = 0;
    const stories = [];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
            console.error('All fields are required!');
            return;
        }

        const story = `${person} went to ${place} and ${verb} a ${adjective} ${noun}.`;
        stories.push(story);
        displayStory();
    });

    shuffleButton.addEventListener('click', function() {
        currentStoryIndex = Math.floor(Math.random() * stories.length);
        displayStory();
    });

    function displayStory() {
        if (stories.length === 0) {
            console.error('No stories to display!');
            return;
        }
        storyElement.textContent = stories[currentStoryIndex];
    }
});
