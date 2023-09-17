// controlseffect start
const WrapperPoints = document.querySelector('.wrapper-points')
const PointArea = document.querySelectorAll('.point-area')
const Points = document.querySelectorAll('.point')
const Texts = document.querySelectorAll('.text')
const Picture = document.querySelectorAll('.carousel')

//наводим курсор на выделенную кнопку
WrapperPoints.addEventListener('mouseover', (event) => {
    for (let i = 0; i < PointArea.length; i++) {
        if (PointArea[i] === event.target && Points[i].classList.contains('ring')) {
            Points[i].classList.add('border-white')
        }
    }
})

//убираем курсор с выделенной кнопки
WrapperPoints.addEventListener('mouseout', (event) => {
    for (let i = 0; i < PointArea.length; i++) {
        if (PointArea[i] === event.target && Points[i].classList.contains('ring') && Points[i] !== event.relatedTarget) {
            Points[i].classList.remove('border-white')
        }
    }
})

//наводим курсор на не выделенную кнопку
WrapperPoints.addEventListener('mouseover', (event) => {
    for (let i = 0; i < PointArea.length; i++) {
        if (PointArea[i] === event.target && !Points[i].classList.contains('ring')) {
            Points[i].classList.add('back-white')
        }
    }
})

//убираем курсор с не выделенной кнопки
WrapperPoints.addEventListener('mouseout', (event) => {
    for (let i = 0; i < PointArea.length; i++) {
        if (PointArea[i] === event.target && !Points[i].classList.contains('ring') && Points[i].classList.contains('back-white') && Points[i] !== event.relatedTarget) {
            Points[i].classList.remove('back-white')
        }
    }
})

// клик на кнопку
WrapperPoints.addEventListener('click', (event) => {
    for (let i = 0; i < PointArea.length; i++) {
        if (PointArea[i] === event.target || Points[i] === event.target) {
            Points[i].classList.remove('back-white')
            Points[i].classList.add('ring')
            Texts[i].classList.remove('Transition-left')
            Picture[i].classList.remove('Transition-right')
        } else {
            Points[i].classList.remove('ring')
            Texts[i].classList.add('Transition-left')
            Picture[i].classList.add('Transition-right')
            //Picture[i].classList.add('hidden')
        }
    }
})

// Points[i].classList.toggle('back-white')
//for (i = 0; i < PointArea.length; i++) {
// if (Points[i].classList.contains('ring')) {
//      Points[i].classList.toggle
//  }=== event.relatedTarget && Points[i].classList.contains('ring')) {
//})
//}