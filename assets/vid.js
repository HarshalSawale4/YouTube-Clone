// Replace with your YouTube API key
const API_KEY = 'AIzaSyAXVO7Xo5DpcrN-TLAarlZtG34bASrva_o';
const searchQuery = 'programming'; // Example search query
const maxResults = 10; // Number of videos to fetch

// Function to fetch videos from YouTube API
async function fetchVideos() {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&maxResults=${maxResults}&q=${searchQuery}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayVideos(data.items);
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}

// Function to display videos in the HTML
function displayVideos(videos) {
    const videoGrid = document.querySelector('.video-grid');

    videos.forEach(video => {
        const videoCard = document.createElement('a');
        videoCard.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
        videoCard.classList.add('video-card');

        videoCard.innerHTML = `
            <div class="thambnail">
                <img class="img" src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                <span class="timespane">0:00</span> <!-- You can fetch duration using another API call -->
            </div>
            <div class="info">
                <img class="logo" src="home.png" alt="Channel logo">
                <div>
                    <h4 class="titl">${video.snippet.title}</h4>
                    <p class="Channel_name">${video.snippet.channelTitle}</p>
                    <p class="view">1.2cr • 2 Days ago</p> <!-- You can fetch views and upload date using another API call -->
                </div>
            </div>
        `;

        videoGrid.appendChild(videoCard);
    });
}

// Fetch videos when the page loads
fetchVideos();