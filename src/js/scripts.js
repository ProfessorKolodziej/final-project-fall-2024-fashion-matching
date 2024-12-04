
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
    button.onclick = handleCheckButtonClick; 
    return button;
}


function addButtonToPage() {
    const container = document.querySelector('.clothes-container'); 
    if (container) {
        console.log('Container found, adding button'); 
        const button = createButton();
        container.appendChild(button); 
    } else {
        console.log('Container not found!'); 
    }
}


function handleCheckButtonClick() {
    const currentPage = window.location.pathname; 
    console.log(`Current page: ${currentPage}`); 
    const confirmChoice = confirm("Are you sure this is your final decision?");
    
    if (confirmChoice) {
        if (currentPage.includes('dresspage3.html')) {
            console.log('Redirecting to goodchoice.html');
            window.location.href = 'goodchoice.html';  
        } else {
            console.log('Redirecting to badchoice.html'); 
            window.location.href = 'badchoice.html'; 
        }
    }
}

document.addEventListener('DOMContentLoaded', addButtonToPage);
