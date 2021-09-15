const getbtn = document.querySelector('button');

// getbtn.onclick = function() {
//     alert('hi')
// };
getbtn.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.remove();
});