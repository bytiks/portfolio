// Select elements
const dotsButton = document.querySelector('.dots-menu button');
const slideMenu = document.querySelector('.slide-menu');
const overlay = document.querySelector('.overlay');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Function to apply the theme based on localStorage
const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        body.style.background = "linear-gradient(135deg, #1e1e2f, #121212)"; // Dark theme gradient
    } else {
        body.classList.remove('dark');
        body.style.background = "linear-gradient(135deg, #f3f2f2, #ffffff)"; // Light theme gradient
    }
};

// Apply the saved theme on page load
applyTheme();

// When the dots button is clicked, toggle the menu
dotsButton.addEventListener('click', () => {
    if (slideMenu.style.right === '0px') {
        slideMenu.style.right = '-323px';
        overlay.style.display = 'none'; // Hide overlay
    } else {
        slideMenu.style.right = '0px';
        overlay.style.display = 'block'; // Show overlay
    }
});

// Close the menu when clicking outside (on overlay)
overlay.addEventListener('click', () => {
    slideMenu.style.right = '-323px';
    overlay.style.display = 'none'; // Hide overlay
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark'); // Toggle dark theme

    // Update background gradient based on the current theme
    if (body.classList.contains('dark')) {
        body.style.background = "linear-gradient(135deg, #1e1e2f, #121212)"; // Dark theme gradient
        localStorage.setItem('theme', 'dark');
    } else {
        body.style.background = "linear-gradient(135deg, #f3f2f2, #ffffff)"; // Light theme gradient
        localStorage.setItem('theme', 'light');
    }
});

// Close the slide menu on page load if menu is open
if (slideMenu.style.right === '0px') {
    slideMenu.style.right = '-323px';
    overlay.style.display = 'none'; // Hide overlay on page load
}
