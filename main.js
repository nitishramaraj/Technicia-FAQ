const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const arrow = btn.children[1];

        answer.classList.toggle('show');
        arrow.classList.toggle('show-arrow');

    })
})