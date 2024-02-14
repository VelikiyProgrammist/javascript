/*
let num = 12;
const button = document.querySelector('#output');
button.addEventListener('click',function() {
    console.log(num)
})
*/


/*
const button = document.querySelector('#output');
const value = document.querySelector('#input');
button.addEventListener('click', function input(){
        console.log(12)
    }
)
*/
/*
const button = document.querySelector('#output');
const vivod = document.querySelector('#input');
button.addEventListener('click', function input(){
        console.log(vivod.value)
    }
)
*/
let isRed = false;
const button = document.querySelector('#redButton')
button.addEventListener('click', function() {
    if (isRed) {
        button.style.backgroundColor = 'red';
    } else {
        button.style.backgroundColor = 'white';
    }
    isRed = !isRed;
});




