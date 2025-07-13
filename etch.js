const container = document.querySelector('.container');
const max = 99;
function createDiv(number){
    container.style.width = number * 20 + 'px';
    if(number > max){
        alert('Please input a number smaller lesser than 100');
    }
    else if(number<max){
    for(let i = 0; i<number*number; i++){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('div');
        console.log(1);
    }
}
}

createDiv(10);