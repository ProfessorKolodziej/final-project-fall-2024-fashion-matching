
function startGame() {
    window.location.href = 'Subpage.HTML';
}

function goToBadChoice() {
    const confirmChoice = confirm("Are you sure this is your final decision?");
    if (confirmChoice) {
        window.location.href = 'badchoice.html';
    }
}