

// Function to toggle the visibility of the contact details
const contactBtn = document.getElementById('contactBtn');
const contactDetails = document.getElementById('contact-details');

contactBtn.addEventListener('click', () => {
    contactDetails.classList.toggle('show');
    // Change the button text based on visibility
    if (contactDetails.classList.contains('show')) {
        contactBtn.textContent = "Hide Contact Details";
        contactBtn.style.animation = 'none'; // Stop the animation when active
    } else {
        contactBtn.textContent = "Show Contact Details";
        contactBtn.style.animation = 'bounce 1s infinite'; // Restart the animation
    }
});

// Function to toggle a bio section on the "Meet the Team" card
function toggleBio(elementId) {
    const bioElement = document.getElementById(elementId);
    bioElement.classList.toggle('show');
}
