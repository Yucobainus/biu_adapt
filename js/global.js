const scale = ({main, width, lengthToWidthRatio}) => {
    main.style.transform = "scale(" + lengthToWidthRatio + ")";
    main.style.marginLeft = `-${(1920 - width) * 0.5}px`;
    // main.style.marginTop = `-${(1920 - width) * 0.82}px`;
    document.body.style.height = `${main.clientHeight * lengthToWidthRatio}px`
}
const notScale = main => {
    main.style.transform = 'scale(1)';
    main.style.marginLeft = '0px';
    // main.style.marginTop = '0px';
    document.body.style.height = 'auth'
}
const process = () => {
    const body = document.body;
    const main = document.querySelector('main');

    let width = body.clientWidth
    let lengthToWidthRatio = width / 1920;

    if (width > 940) {
        scale({main, width, lengthToWidthRatio})
    } else {
        notScale(main)
    }
}

// window.addEventListener('resize', process);
// process();










// .index-slider know-how
const knowSlider = new Swiper(".know-how", {
    pagination: {
        el: ".know-how__pagination",
        clickable: true
    },
    on: {
        slideChange: function (e) {
            sliderChange(e);
        }
    }
});


// funds__slider
const fundsSlider = new Swiper(".funds__slider", {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
        nextEl: '.funds__btn-next',
        prevEl: '.funds__btn-prev',
    },
    on: {
        slideChange: function (e) {
            sliderChange(e);
        }
    }
});

const sliderChange = (e) => {
    const elementWrapper = e.$wrapperEl[0]
    const value = elementWrapper.style.transform.replace('translate3d(', '').replace('px, 0px, 0px)', '');

    elementWrapper.style.marginLeft = `${value}px`
}



const swiper = () => {
    const wrappers = document.querySelectorAll('.swiper-wrapper');
    wrappers.forEach(wrapper => {
        wrapper.classList.add('not-transform')
    })
}
swiper()













// parallax
const parallax = (nodeSelector, parentNodeSelector) => {
    const main = document.querySelector('main');

    document.addEventListener('scroll', e => {
        const scale = Number(main.style.transform.replace('scale(', '').replace(')', ''));
        const currentPosition = window.scrollY;
        const offsetTop = document.querySelector(`${parentNodeSelector}`).offsetTop * scale;
        const bias = offsetTop - currentPosition;

        const decorNode = document.querySelector(`${nodeSelector}`);
        decorNode.style.transform = `translateY(${bias}px)`;
    })
}

const recipeDecorTop = document.querySelector('.recipe__decor-top')
const recipeDecorCenter = document.querySelector('.recipe__decor-center')
if (recipeDecorTop) {
    parallax('.recipe__decor-top', '.recipe')
}
if (recipeDecorCenter) {
    parallax('.recipe__decor-center', '.recipe')
}












// accordion
const accordion = () => {
    const accordionHeaders = document.querySelectorAll('[data-accordion-header]');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const name = header.getAttribute('data-accordion-header');
            const body = document.querySelector(`[data-accordion-content='${name}']`)


            header.classList.toggle('active')
            body.classList.toggle('active')
        })
    })
}
accordion();
