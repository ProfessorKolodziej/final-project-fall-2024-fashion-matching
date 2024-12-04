
function startGame() {
    window.location.href = 'Subpage.HTML';
}


window.goToBadChoice = function () {
    const confirmChoice = confirm("Are you sure this is your final decision?");
    if (confirmChoice) {
        window.location.href = 'badchoice.html';
    }
};

// 创建按钮并设置其属性和事件
function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Check';
    button.onclick = handleCheckButtonClick; // 设置点击事件
    return button;
}

// 添加按钮到页面的指定位置
function addButtonToPage() {
    const container = document.querySelector('.clothes-container'); // 选择容器
    if (container) {
        console.log('Container found, adding button'); // 调试信息
        const button = createButton();
        container.appendChild(button); // 添加按钮
    } else {
        console.log('Container not found!'); // 如果找不到容器
    }
}

// 点击按钮后的操作，根据页面调整跳转目标
function handleCheckButtonClick() {
    const currentPage = window.location.pathname; // 获取当前页面的路径
    console.log(`Current page: ${currentPage}`); // 调试当前页面
    const confirmChoice = confirm("Are you sure this is your final decision?");
    
    if (confirmChoice) {
        if (currentPage.includes('dresspage3.html')) {
            console.log('Redirecting to goodchoice.html'); // 调试信息
            window.location.href = 'goodchoice.html'; // dresspage3.html 跳转到 goodchoice.html
        } else {
            console.log('Redirecting to badchoice.html'); // 调试信息
            window.location.href = 'badchoice.html'; // 其他页面跳转到 badchoice.html
        }
    }
}

// 页面加载完成后调用函数添加按钮
document.addEventListener('DOMContentLoaded', addButtonToPage);
