const invertButton = document.querySelector('#invert');
const homeButton = document.querySelector('#home');
const body = document.querySelector('body');

let inverted = localStorage.getItem('invert');
if (inverted === 'true') {
    body.className = 'invert';
} else {
    body.className = '';
}

if (homeButton) {
    homeButton.addEventListener('click', goHome);
}
invertButton.addEventListener('click', invertColors);

function invertColors() {
    if (body.className === 'invert') {
        body.className = '';
        localStorage.setItem('invert', 'false');
    } else {
        body.className = 'invert';
        localStorage.setItem('invert', 'true');
    }
}

function goHome() {
    window.location.href = '/';
}

window.addEventListener('resize', resizeWindow);

function resizeWindow() {
    let vrScene = document.querySelectorAll('.vrScene');
    vrScene.forEach(scene => {
        scene.style.width = '100%';
        scene.style.height = scene.offsetWidth * 0.5 + 'px';
    });
}
resizeWindow();
