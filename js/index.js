const recipeItems = document.querySelectorAll('.recipe__item');

if (recipeItems.length) {
    recipeItems.forEach(item => {
        const content = item.querySelector('.recipe__item-content-text');

        item.addEventListener('click', e => {
            if (e.target.classList.contains('recipe__item-btn')) {
                e.target.style.opacity = 0;
                content.classList.add('recipe__item-content-text_active')
            }
        })
    })
}
