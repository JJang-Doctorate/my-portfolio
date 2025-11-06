// Back to Top Button Logic

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Dark Mode Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('change', switchTheme, false);

// Modal Logic
const openModalTriggers = document.querySelectorAll('[data-modal-target]');
const modals = document.querySelectorAll('.modal');

openModalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modal = document.querySelector(trigger.dataset.modalTarget);
        openModal(modal);
    });
});

modals.forEach(modal => {
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        closeModal(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.style.display = 'block';
}

function closeModal(modal) {
    if (modal == null) return;
    modal.style.display = 'none';
}
