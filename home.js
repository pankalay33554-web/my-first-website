const images = [
    "Shwegugyi-Bagan-Myanmar-01-gje.jpg",
    "Ananda-Bagan-Myanmar-25-gje.jpg",
    "Shwezigon-Bagan-Myanmar-06-gje.jpg",
    "Dhammayangyi-Bagan-Myanmar-12-gje.jpg",
    "Sulamani_Temple.jpg"
];

let current = 0;

/* Lightbox */
function openBox(i) {
    current = i;
    document.getElementById("lightImg").src = images[current];
    document.getElementById("lightbox").style.display = "flex";
}

function closeBox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImg(step) {
    current += step;
    if (current < 0) current = images.length - 1;
    if (current >= images.length) current = 0;
    document.getElementById("lightImg").src = images[current];
}

/*======================Tour grid===========================*/
const modal = document.getElementById('tourModal');

function openTour(event) {
    const card = event.currentTarget;
    document.getElementById('tourImg').src = card.dataset.img;
    document.getElementById('tourImg').alt = card.dataset.title;
    document.getElementById('tourTitle').textContent = card.dataset.title;
    document.getElementById('tourPhone').textContent = card.dataset.phone;
    document.getElementById('tourFB').href = card.dataset.fb;
    document.getElementById('tourFB').textContent = card.dataset.title;
    document.getElementById('tourTikTok').href = card.dataset.tiktok;
    document.getElementById('tourTikTok').textContent = card.dataset.tiktok.split('/@')[1];
    document.getElementById('tourEmail').href = 'mailto:' + card.dataset.email;
    document.getElementById('tourEmail').textContent = card.dataset.email;
    modal.style.display = 'flex';
}

function closeTour() {
    modal.style.display = 'none';
}

// Attach event listeners
document.querySelectorAll('.tour-card').forEach(card => {
    card.addEventListener('click', openTour);
});
