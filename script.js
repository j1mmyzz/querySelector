const arr = ['red', 'orange', 'yellow', 'green','blue', 'purple']
let rand = Math.floor(Math.random() * 7);

function changeBlockColor() {
    const blocks = document.querySelector(".block");
    console.log(rand)
    blocks.style.background = arr[rand];
} 
