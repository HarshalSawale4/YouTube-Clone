document.addEventListener("DOMContentLoaded", function () {
    let page = 1;
    const videoContainer = document.getElementById('video-container');
    const loadMoreButton = document.getElementById('load-more-button');
    const loadMoreContainer = document.getElementById('load-more-container');
    
    // Function to simulate loading videos (replace with real video data or API calls)
    function loadVideos(page) {
        // Simulate a delay to fetch data
        setTimeout(() => {
            const newVideos = [];
            
            // Simulate adding 10 new videos
            for (let i = 0; i < 10; i++) {
                const videoDiv = document.createElement('div');
                videoDiv.classList.add('video-div');
                
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/dQw4w9WgXcQ`; // You can replace this with dynamic video URLs

                videoDiv.appendChild(iframe);
                newVideos.push(videoDiv);
            }
            
            // Add new videos to the container
            newVideos.forEach(video => {
                videoContainer.appendChild(video);
            });
            
            // Optionally, hide the "Load More" button after all videos are loaded
            if (page >= 5) {  // Let's assume we have 5 pages of videos to show.
                loadMoreContainer.style.display = 'none'; // Hide the Load More button after 5 pages
            }
        }, 1500); // Simulate a delay for fetching videos
    }

    // Load the first batch of videos when the page loads
    loadVideos(page);

    // Handle "Load More" button click
    loadMoreButton.addEventListener('click', function () {
        page++; // Increment page number
        loadVideos(page); // Load more videos
    });
});
