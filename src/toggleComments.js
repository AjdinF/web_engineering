function toggleComments() {
    const commentWrapper = document.querySelector('.comment-wrapper'); // Select the comment section
    const toggleButton = document.getElementById('show-comments-toggle'); // Select the toggle button

    if (commentWrapper && toggleButton) {
        // Check if the comment section is currently hidden
        const isHidden = commentWrapper.hasAttribute('hidden');

        // Toggle the visibility of the comments section
        if (isHidden) {
            commentWrapper.removeAttribute('hidden'); // Show the comments
            toggleButton.setAttribute('aria-expanded', 'true'); // Update aria attribute
            toggleButton.textContent = "Hide comments"; // Update button text
            commentWrapper.style.display = 'block'; // Ensure it is displayed
            // Optionally set focus on the first input
            const nameInput = document.getElementById('name');
            if (nameInput) {
                nameInput.focus();
            }
        } else {
            commentWrapper.setAttribute('hidden', ''); // Hide the comments
            toggleButton.setAttribute('aria-expanded', 'false'); // Update aria attribute
            toggleButton.textContent = "Show comments"; // Update button text
            commentWrapper.style.display = 'none'; // Ensure it is hidden
        }
    }
}

// Setup event listeners on window load
window.onload = function() {
    const toggleButton = document.getElementById('show-comments-toggle'); // Select the toggle button

    if (toggleButton) {
        // Add click event listener to the button
        toggleButton.addEventListener('click', toggleComments);

        // Add keydown event listener for Enter and Space keys
        toggleButton.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default behavior (like page scroll for space)
                toggleComments(); // Call the toggle function
            }
        });
    }
};