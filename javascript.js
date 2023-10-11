document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('about-link');
    const aboutContent = document.getElementById('about-content');
    const contactLink = document.getElementById('contact-link');
    const contactContent = document.getElementById('contact-content');
    const colorChangeButton = document.getElementById('color-change-button');
    const textElements = document.querySelectorAll('#title, #about-content p, #contact-content p, #about-link, #contact-link, #contact-content a');
    const area51Image = document.getElementById('area51Image');

    let isGreen = false;

    function toggleContent(content) {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent(aboutContent);
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        toggleContent(contactContent);
    });

    colorChangeButton.addEventListener('click', function() {
        if (!isGreen) {
            textElements.forEach(element => element.style.color = 'green');
            colorChangeButton.querySelector('span').style.color = 'green';
            isGreen = true;
        } else {
            textElements.forEach(element => element.style.color = '');
            colorChangeButton.querySelector('span').style.color = '';
            isGreen = false;
        }

        if (area51Image.getAttribute('src') === "alien.jpg") {
            area51Image.setAttribute('src', "alienverde-removebg-preview.png");
        } else {
            area51Image.setAttribute('src', "alien.jpg");
        }
    });
});

document.getElementById('additional-button').addEventListener('click', function() {
    let audioPlayer = document.getElementById('audio-player');
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});
