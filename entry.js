document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Hide the entry screen
        document.getElementById('entry-screen').style.display = 'none';
        // Redirect to another page
        window.location.href = "landing.html"; // Replace "yourpage.html" with the actual URL you want to redirect to
    }, 3000); // 3000 milliseconds = 3 seconds
});
