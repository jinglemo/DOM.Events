const bigButton = document.querySelector('#big')
const smButton = document.querySelector('#small')
const para = document.querySelector('#para')
let styleObject = {
    fontSize: 20,
}


bigButton.addEventListener('click', function(){
    // for (const property in styleObject) {
    //     para.style[property] = styleObject[property]};
  grow(para);
    //  para.style.fontSize = '100px';
})
smButton.addEventListener('click', function(){
    shrink(para);
})
function grow(hello){
style = styleObject['fontSize'];
currentSize = parseFloat(style);
currentSize++;
hello.style.fontSize = (currentSize + 50) + 'px';
}
function shrink(hell){
    style = styleObject['fontSize'];
    currentSize = parseFloat(style);
    currentSize--;
    hell.style.fontSize = (currentSize - 10) + 'px';
}