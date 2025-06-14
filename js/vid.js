const apiKey = 'AIzaSyBpABvCH30RaLJQz_sdh9-sN6Nv9HJ7PWE';

document.getElementById('search-button').addEventListener('click', function () {
  const query = document.getElementById('search-input').value.trim();
  if (!query) return;

  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=9&q=${encodeURIComponent(query)}&key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
      const videoGrid = document.querySelector('.video-grid');
      videoGrid.innerHTML = '';

      if (!data.items || data.items.length === 0) {
        videoGrid.innerHTML = '<p>No videos found.</p>';
        return;
      }

      data.items.forEach(item => {
        const videoId = item.id.videoId;
        const title = item.snippet.title;
        const thumbnail = item.snippet.thumbnails.high.url;
        const channelTitle = item.snippet.channelTitle;

        const videoCard = `
          <a href="https://www.youtube.com/watch?v=${videoId}" class="video-card" target="_blank">
            <div class="thambnail">
              <img class="img" src="${thumbnail}" alt="${title}">
              <span class="timespane">▶</span>
              <div class="info">
                <img class="logo" src="../assets/home.png" alt="Channel logo">
                <div>
                  <h4 class="titl">${title}</h4>
                  <p class="Channel_name">${channelTitle}</p>
                  <p class="view">YouTube</p>
                </div>
              </div>
            </div>
          </a>
        `;

        videoGrid.innerHTML += videoCard;
      });
    })
    .catch(error => {
      console.error('Error fetching videos:', error);
      alert('Error fetching videos. Check your API key or quota.');
    });
});

window.addEventListener('load', () => {
  fetchVideos("Trending"); // or use a default topic like "Technology"
});
