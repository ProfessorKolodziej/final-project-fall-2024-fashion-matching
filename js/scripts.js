
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
