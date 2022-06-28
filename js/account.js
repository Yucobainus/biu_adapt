const ITEMS_VALUE = ['email', 'password', 'remove'];

ITEMS_VALUE.forEach(itemValue => {
    const checkbox = document.querySelector(`[data-account-input-${itemValue}]`)
    const element = document.querySelector(`[data-account-wrap-${itemValue}]`)

    if (checkbox && element) {
        checkbox.addEventListener('change', e => {
            if (e.target.checked) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        })
    }
})
