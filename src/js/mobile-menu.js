const toggleButton = document.querySelector('.open-nav');
toggleButton.addEventListener('click', function () {
	toggleButton.classList.toggle('toggle');
});


const navOverlay = document.querySelector('.nav-overlay');
// open mobile nav on click
toggleButton.addEventListener('click', function() {
    navOverlay.classList.toggle('hidden');
});
