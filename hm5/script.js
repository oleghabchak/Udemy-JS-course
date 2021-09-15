const btns = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay')

// getbtn.onclick = function() {
//     alert('hi')
// };
// getbtn.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// getbtn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});


const link = document.querySelector('a');
link.addEventListener('click', function(event){
    event.preventDefault();

    console.log(event.target);
});