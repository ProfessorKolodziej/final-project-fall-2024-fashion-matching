
function startGame() {
    window.location.href = 'Subpage.HTML';
}



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

function goToBadChoice(imgSrc) {
    window.location.href = `badchoice.html?img=${encodeURIComponent(imgSrc)}`;
}