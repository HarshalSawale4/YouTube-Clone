window.addEventListener('load', function () {
    // Get the splash screen and content elements
    const splashScreen = document.querySelector('.splash-screen');
    const content = document.querySelector('.content');

    // Set a delay for the splash screen before hiding it
    setTimeout(function () {
        splashScreen.classList.add('hidden'); // Fade out splash screen
        content.style.display = 'block'; // Show main content
        
        // Redirect to the main page after the animation is complete
        setTimeout(function () {
            window.location.href = 'page.html'; // Redirect to the main page
        }, 2000); // Delay for 1 second to give time for the fade-out effect
    }, 3000); // Splash screen stays for 3 seconds
});
