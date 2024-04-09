const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteBtn = document.getElementById('deleteBtn');

searchForm.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if(searchTerm === '') return;

    try {
        const gifData = await fetchRandomGif(searchTerm);
        const gifUrl = gifData.images.fixed_height.url;
        appendGif(gifUrl, searchTerm);
      } catch (error) {
        console.error('Error fetching gif:', error);
      }
    });

    function fetchRandomGif(searchTerm) {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;
        return fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error('Failed to fetch gif data');
            }
            return response.json();
        })
        .then(data => {
            if (!data || !data.data || !data.data.images || !data.data.images.fixed_height) {
                throw new Error('Invalid gif data');
            }
            return data.data;
        });

    }

    function appendGif(url, category) {
        const gifElement = document.createElement('div');
        gifElement.innerHTML = `
    <img src="${url}" alt="${category}">
    <button class="deleteBtn">Delete</button>
  `;
  gifContainer.appendChild(gifElement);

   const deleteBtn = gifElement.querySelector('.deleteBtn');
   deleteBtn.addEventListener('click', () => {
    gifContainer.removeChild(gifElement);
  });
}

deleteBtn.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});

