const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');


// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// // console.log(btns[3].classList.add('red'));
// // console.log(btns[1].classList.remove('red') );
// console.log(btns[3].classList.toggle('blue'));


btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else { btns[1].classList.remove('red') }

    btns[5].classList.toggle('red')
});

wrapper.addEventListener('click',  (event) => {
    if (event.target && event.target.classList.contains(blue)) {
        console.log('hello');
    }
});

// btns.forEach( btn => {
//     btn.addEventListener('click', () => {
//         console.log(('hello'));
//     });
// })

const btn = document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn);