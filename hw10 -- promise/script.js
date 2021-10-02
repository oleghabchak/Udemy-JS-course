'use strict';

console.log('Запит даних');

const req = new Promise(function( resolve, reject){
    setTimeout(() => {
        console.log('підготовка даних...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then((product)=>{
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
    });