document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight * 0.75 && sectionTop > -windowHeight * 0.25) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const mainTitle = document.getElementById('welcome');
    const welcomeText = "WELCOME EJrooM";
    let index = 0;

    function displayText() {
        mainTitle.textContent += welcomeText[index];
        index++;
        if (index < welcomeText.length) {
            setTimeout(displayText, 100);
        }
    }

    displayText();
});
document.addEventListener("DOMContentLoaded", function() {
    const name = document.getElementById('name');


    function activateShakeEffect() {
        name.classList.remove('hidden');

    }

    setTimeout(activateShakeEffect, 1000);
});
