const phoneButton = document.getElementById('ring');
const phoneMessage = document.getElementById('pop');
const cakeButton = document.getElementById('bake');
const readButton = document.getElementById('read');
const gameButton = document.getElementById('game');
// event listenerzzzz
phoneButton.addEventListener('click', toggleRing);
cakeButton.addEventListener('click', toggleBake);
gameButton.addEventListener('click', toggleGame);
readButton.addEventListener('click', toggleRead);
function toggleRing() {
    phoneMessage.classList.toggle('hidden');
    if (phoneMessage.classList.contains('hidden')) {
        phoneMessage.textContent = 'Phone a friend';
    } else {
        phoneMessage.textContent = 'HELL YEAH UR A STAR LOVE YOU';
    }
}
function toggleBake() {
    phoneMessage.classList.toggle('hidden')
    if (phoneMessage.classList.contains('hidden')) {
        phoneMessage.textContent = 'Phone a friend';
    } else {
        phoneMessage.textContent = 'BAKE UR HEART OUT';
    }
}
function toggleRead() {
    phoneMessage.classList.toggle('hidden');
    if (phoneMessage.classList.contains('hidden')) {
        phoneMessage.textContent = 'Phone a friend';
    } else {
        phoneMessage.textContent = 'reading is nice';
    }
}
function toggleGame() {
    phoneMessage.classList.toggle('hidden');
    if (phoneMessage.classList.contains('hidden')) {
        phoneMessage.textContent = 'Phone a friend';
    } else {
        phoneMessage.textContent = 'play a game on a board';
    }
}