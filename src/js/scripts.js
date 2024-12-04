
function startGame() {
    window.location.href = 'Subpage.HTML';
}


window.goToBadChoice = function () {
    const confirmChoice = confirm("Are you sure this is your final decision?");
    if (confirmChoice) {
        window.location.href = 'badchoice.html';
    }
};


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
        if (window.location.pathname.includes('dresspage3.html')) {
            window.location.href = 'goodchoice.html'; 
        } else {
            window.location.href = 'badchoice.html'; 
        }
    }
}

document.addEventListener('DOMContentLoaded', addButtonToPage);
