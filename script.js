const phoneButton = document.getElementById('ring');
const phoneMessage = document.getElementById('pop');
const cakeButton = document.getElementById('bake');

// event listenerzzzz
phoneButton.addEventListener('click', toggleRing);
cakeButton.addEventListener('click', toggleBake);

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