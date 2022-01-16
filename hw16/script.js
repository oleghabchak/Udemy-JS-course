
const axios = require('axios')
const arr = [1,2,3]
let a = arr.length
console.log(a);


let fibonnachi = [1, 1, 2, 3 , 5]
let nextF = fibonnachi.push(8)
fibonnachi
.map( num => num + 5)
.reduce((acc,n) => acc + n, 0)
console.log(fibonnachi.map(n=> n +3));

async function getData() {
    const {data} = await axios.get('https://reqres.in/api/users/3')
    data
}
getData()