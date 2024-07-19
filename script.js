document.addEventListener('DOMContentLoaded', () => {
    const clickBtn = document.getElementById('click-btn');
    const scoreSpan = document.getElementById('score');
    let score = 0;

    clickBtn.addEventListener('click', () => {
        score++;
        scoreSpan.textContent = score;
    });
});
