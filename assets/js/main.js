const button = document.querySelector('button[data-collapse-toggle="navbar-default"]');
const nav = document.getElementById('navbar-default');

button.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});
