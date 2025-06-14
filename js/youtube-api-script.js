const apiKey = "AIzaSyBpABvCH30RaLJQz_sdh9-sN6Nv9HJ7PWE"; // 🔁 Replace with your actual YouTube Data API v3 key
const videoGrid = document.querySelector(".video-grid");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Default search when page loads
fetchVideos("coding tutorials");

// Search button functionality
searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchVideos(query);
  }
});

function fetchVideos(query) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${encodeURIComponent(
    query
  )}&key=${apiKey}&type=video`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.items) {
        displayVideos(data.items);
      } else {
        videoGrid.innerHTML = "<p>No videos found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching videos:", error);
      videoGrid.innerHTML = "<p>Error loading videos.</p>";
    });
}

function displayVideos(videos) {
  videoGrid.innerHTML = ""; // Clear old videos

  videos.forEach((video) => {
    const { title, thumbnails, channelTitle } = video.snippet;
    const videoId = video.id.videoId;

    const videoCard = document.createElement("a");
    videoCard.href = `https://www.youtube.com/watch?v=${videoId}`;
    videoCard.className = "video-card";
    videoCard.target = "_blank"; // Open in new tab

    videoCard.innerHTML = `
      <div class="thambnail">
        <img class="img" src="${thumbnails.high.url}" alt="${title}">
        <span class="timespane">10:00</span>
        <div class="info">
          <img class="logo" src="../assets/home.png" alt="Channel logo">
          <div>
            <h4 class="titl">${title}</h4>
            <p class="Channel_name">${channelTitle}</p>
            <p class="view">1M views • 1 day ago</p>
          </div>
        </div>
      </div>
    `;

    videoGrid.appendChild(videoCard);
  });
}
