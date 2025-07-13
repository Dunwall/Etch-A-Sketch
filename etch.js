const container = document.querySelector('.container');
const max = 99;
const btn = document.querySelector('button');

function createDiv(number){
    container.style.width = number * 20 + 'px';
    if(number >= max){
        alert('Please input a number lesser than 100');
    }
    else if(number<max){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i<number*number; i++){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('div');
        console.log(1);
    }
    trail();
}
}

function trail(){
    const divs = document.querySelectorAll('.div');
    divs.forEach(some=>{
        some.addEventListener('mouseover',(e)=>{
            e.target.classList.add('hovered');
        })
        some.addEventListener('mouseout',(e)=>{
            e.target.classList.remove('hovered');
        })
    })
}

btn.addEventListener('click',()=>{
    const input = prompt('Enter Number of Squares below 100');
    createDiv(input);
})