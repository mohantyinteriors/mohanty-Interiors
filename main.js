document.addEventListener('DOMContentLoaded', (event) => {
    const imagePaths = [
        './images/05.jpg',
        './images/06.jpg',
        './images/07.jpg',
        './images/08.jpg',
        './images/09.jpg',
        './images/10.jpg',
        './images/11.jpg',
        './images/12.jpg',
        './images/13.jpg',
        './images/14.jpg',
        './images/15.jpg',
        './images/16.jpg',
        './images/17.jpg',
        './images/18.jpg',
        './images/19.jpg',
        './images/20.jpg',
        './images/21.jpg',
        './images/22.jpg',
        './images/23.jpg',
        './images/24.jpg',
        './images/25.jpg',
        './images/26.jpg',
    ];
    
    const swiperWrapper = document.getElementById('swiper-wrapper');

    imagePaths.forEach(path => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<div class="frame"><img src="${path}" alt="Image"></div>`;
        swiperWrapper.appendChild(slide);
    });

    var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
// JavaScript for typing animation
document.addEventListener('DOMContentLoaded', function () {
    const typingAnimationElement = document.getElementById('typing-animation');
    const typingTexts = ['Crafting Timeless Interiors','Transforming Spaces, Elevating Lives', 'Designing Dreams into Reality', 'Your Space, Our Craftsmanship','Exquisite Designs, Exceptional Spaces']; // Array of texts to display
    let index = 0;
    let charIndex = 0;
    let text = typingTexts[index];

    function type() {
        if (charIndex < text.length) {
            typingAnimationElement.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed (milliseconds)
        } else {
            setTimeout(erase, 1500); // Pause before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingAnimationElement.textContent = text.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Adjust erasing speed (milliseconds)
        } else {
            index = (index + 1) % typingTexts.length;
            text = typingTexts[index];
            setTimeout(type, 500); // Pause before typing again
        }
    }

    // Start the typing animation
    setTimeout(type, 1000); // Initial delay before typing starts
});

// Mapp
// Example JavaScript to toggle dark mode
const mapContainer = document.getElementById('map');

function toggleDarkMode() {
    mapContainer.classList.toggle('dark-mode-map');
}

// Example: Toggle dark mode on button click
const toggleDarkModeButton = document.getElementById('toggle-dark-mode-button');
toggleDarkModeButton.addEventListener('click', toggleDarkMode);
// Review and comments

