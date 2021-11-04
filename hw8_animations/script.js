const btn = document.querySelector('.btn'),
        elem = document.querySelector('.box');
    let pos = 0;

function myAnimation() {
        pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";

    if(pos < 300){
        requestAnimationFrame(myAnimation);
    }
}
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));



// const logger =function() {
//     if (i === 3){
//         clearInterval(timerIN);
//     }
//     console.log('Hello');
//     i++;
// };

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500)
// }, 500);