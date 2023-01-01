let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.heade');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


let theme = document.querySelector('#theme-toggler');

theme.onclick = () => {
    theme.classList.toggle('fa-sun');

    if (theme.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}