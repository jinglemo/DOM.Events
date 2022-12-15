const clicker = document.querySelector('#cookie');
let countnum = 0;
// const count = document.querySelector('#counter');
clicker.addEventListener('click', function() {
    countnum++
    document.querySelector('#counter').innerHTML = countnum
})

