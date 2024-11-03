function createGrid(size) {
    // 获取container元素
    const container = document.querySelector('.container');
    // 设置容器的样式，使其适应新的网格大小
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '960px';
    container.style.height = '960px';
    // 清空容器中的现有方块
    container.innerHTML = '';
    // 使用循环创建size * size 个div
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');

        // 设置每个网格方块的样式
        div.style.flex = `1 0 ${960 / size}px`;
        div.style.height = `${960 / size}px`;
        div.style.border = '1px solid #ddd';

        // 添加鼠标悬停事件来改变背景颜色
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = getRandomColor();
        });

        container.appendChild(div);
    }
}

// 随机颜色生成函数
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// 初始创建一个16*16网格
createGrid(16);

document.getElementById('reset-button').addEventListener('click', function() {
    const newSize = prompt("请输入新的网格大小 (例如: 16):");
    if (newSize) {
        createGrid(newSize);
    }
});