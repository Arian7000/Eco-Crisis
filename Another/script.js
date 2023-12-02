document.addEventListener('DOMContentLoaded', function () {
    const loginPage = document.getElementById('loginPage');
    const mainContent = document.getElementById('mainContent');
    const loginForm = document.getElementById('loginForm');
    const showRegisterLink = document.getElementById('showRegister');

    const viewAsGuestLink = document.getElementById('viewAsGuest');
    const logoutButton = document.getElementById('logoutButton');

    // Check if user is already logged in (using local storage)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        // User is logged in, show main content
        loginPage.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        // User is not logged in, show login page
        loginPage.style.display = 'flex';
        mainContent.style.display = 'none';
    }

    

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // In a real application, you'd perform authentication here
        // For simplicity, let's simulate a successful login
        const username = document.getElementById('loginUsername').value;
        alert(`Welcome, ${username}!`);
        // Set login status in local storage
        localStorage.setItem('isLoggedIn', 'true');
        // Show the main content and hide the login page
        loginPage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    document.addEventListener('DOMContentLoaded', function () {
    const showRegisterLink = document.getElementById('showRegister');

    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Redirect to registration page or show registration form.');
            // Add your registration logic here
        });
    }

    // Rest of your code
});


    document.addEventListener('DOMContentLoaded', function () {
    const registrationPage = document.getElementById('registrationPage');
    const registrationForm = document.getElementById('registrationForm');
    const showLoginLink = document.getElementById('showLogin');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // In a real application, you'd send the registration data to a server
        // For simplicity, let's simulate a successful registration
        alert('Registration successful! Redirecting to thank you page.');
        // Redirect to the thank you page or any other page after registration
        window.location.href = 'thankyou.html';
    });

    showLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Redirect to the login page
        window.location.href = 'login.html';
    });
});


    viewAsGuestLink.addEventListener('click', function (e) {
        e.preventDefault();
        // Simulate viewing as a guest
        loginPage.style.display = 'none';
        mainContent.style.display = 'block';
    });

    logoutButton.addEventListener('click', function () {
        // Simulate logout by clearing local storage and reloading the page
        localStorage.removeItem('isLoggedIn');
        location.reload();
    });

});


document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    let slideInterval;

    function showSlides() {
        const slides = document.getElementsByClassName("feature");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].style.animation = "slide 1s ease-in-out";
    }

    // Function to manually go to the next slide
    window.nextSlide = function () {
        clearInterval(slideInterval); // Stop the automatic slideshow
        showSlides(); // Show the next slide
        slideInterval = setInterval(showSlides, 5000); // Start the automatic slideshow again
    };

    window.redirectTo = function (url) {
        window.location.href = url;
    };

    // Set an initial interval for automatic slideshow
    slideInterval = setInterval(showSlides, 5000);
});


document.addEventListener('DOMContentLoaded', function () {
    // ... (existing code)

    const donationForm = document.getElementById('donationForm');

    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // In a real application, you'd handle the donation submission here
        // For simplicity, let's simulate a successful donation
        const fullName = document.getElementById('fullName').value;
        const amount = document.getElementById('amount').value;
        alert(`Thank you, ${fullName}! You have successfully donated $${amount}.`);
        // You can redirect the user to a thank you page or perform other actions as needed
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const donationForm = document.getElementById('donationForm');
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const paymentDetailsSection = document.getElementById('paymentDetails');

    // Event listener for the payment method dropdown change
    paymentMethodSelect.addEventListener('change', function () {
        // Hide all payment details sections initially
        hideAllPaymentDetailsSections();

        // Show the payment details section based on the selected payment method
        const selectedPaymentMethod = paymentMethodSelect.value;
        const paymentDetailsSectionToShow = document.getElementById(`${selectedPaymentMethod}Details`);
        if (paymentDetailsSectionToShow) {
            paymentDetailsSectionToShow.style.display = 'block';
        }
    });

    // Event listener for the form submission
    donationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add your donation form submission logic here
        alert('Donation submitted successfully!');
    });

    // Function to hide all payment details sections
    function hideAllPaymentDetailsSections() {
        const allPaymentDetailsSections = document.querySelectorAll('.payment-details');
        allPaymentDetailsSections.forEach(section => {
            section.style.display = 'none';
        });
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const weatherForm = document.getElementById('weatherForm');
    const weatherDetails = document.getElementById('weatherDetails');

    weatherForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Fetch weather data using OpenWeatherMap API
        const apiKey = 'fa87405e05ca9116c29d74968c482617';
        const city = document.getElementById('city').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display weather details
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                // Display an error message
                weatherDetails.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
            });
    });

    function displayWeather(data) {
        // Extract relevant weather information from the API response
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;

        // Display weather details in the weatherDetails div
        weatherDetails.innerHTML = `<p>Weather in ${cityName}: ${temperature}°C, ${description}</p>`;
    }
});
