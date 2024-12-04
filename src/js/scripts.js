


function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Check';
    button.className = 'custom-button';
    button.onclick = handleCheckButtonClick; 
    return button;
}


function addButtonToPage() {
    const container = document.querySelector('.clothes-container'); 
    if (container) {
        const button = createButton();
        container.appendChild(button); 
    } 
}


function handleCheckButtonClick() {
    const confirmChoice = confirm("Are you sure this is your final decision?");
    if (confirmChoice) {
        const imgElement = document.querySelector('.modle-container img');
        const imgSrc = imgElement ? imgElement.src : '';

        if (window.location.pathname.includes('dresspage3.html')) {
            window.location.href = 'finalchoice.html';
        } else { 
            window.location.href = `badchoice.html?img=${encodeURIComponent(imgSrc)}`;
        }
    }
}


document.addEventListener('DOMContentLoaded', addButtonToPage);

//
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


function loadImage() {
    const imgSrc = getQueryParam('img'); 
    const imgElement = document.querySelector('.modleb-container img');

    if (imgSrc) {
        imgElement.src = imgSrc; 
        imgElement.alt = "Model";
    }
}


document.addEventListener('DOMContentLoaded', loadImage);

//multiple html links//
function goToBadChoice(imgSrc) {
    window.location.href = `badchoice.html?img=${encodeURIComponent(imgSrc)}`;
}


// return button //
document.addEventListener('DOMContentLoaded', () => {
    const buttonContainer = document.getElementById('button-container');

    const returnButton = document.createElement('button');
    returnButton.textContent = 'Return'; 
    returnButton.className = 'return-button'; 

    returnButton.addEventListener('click', () => {
        window.location.href = 'Subpage.html';
    });

    buttonContainer.appendChild(returnButton);
});

//home button //
document.addEventListener('DOMContentLoaded', () => {
    const homeButtonContainer = document.getElementById('home-button-container');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.className = 'home-button'; 

    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    homeButtonContainer.appendChild(homeButton);
});


// start game //
document.addEventListener('DOMContentLoaded', () => {
    const startButtonContainer = document.getElementById('start-button-container');

    const startButton = document.createElement('button');
    startButton.className = 'start-button'; 
    startButton.innerHTML = `<span class="start-button-icon">★</span> Start Dressing`; 

    startButton.addEventListener('click', startGame);

    startButtonContainer.appendChild(startButton);
});

function startGame() {
    window.location.href = 'Subpage.HTML'; 
}
