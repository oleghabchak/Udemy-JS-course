let output, add,pull;
score = localStorage.getItem('score');
output = document.querySelector('p');
add = document.querySelector('button');
output.innerHTML = localStorage.getItem('score')
add.onclick = function(){
    score++;
    let ls_var_name = "score";
    // Перший параметер це назва комірки другий це її значення
   
    localStorage.setItem(ls_var_name, score)
    
    output.innerHTML = score ;
}



