const cookieContainer = document.getElementById('cookieContainer');
const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');
// Verifica se já existe uma escolha salva
if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        cookieContainer.classList.add('active');
    }, 4000);
}
acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieContainer.classList.remove('active');
});

declineBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieContainer.classList.remove('active');
});