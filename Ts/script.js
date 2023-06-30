const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const cloud = document.querySelector('.clouds');

const over = document.querySelector('.over');

const botao = document.querySelector('.botao');

const jump = () => {
    const pipePosition = pipe.offsetLeft;
    mario.classList.add('jump');
    setTimeout(()=> {
        mario.classList.remove('jump');
    }, 500);

    console.log(pipePosition)
}






const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;

    const cloudPosition = cloud.offsetLeft;

    const marioPosition = parseFloat(window.getComputedStyle(mario).bottom.replace('px', ''));

    /* if(pipePosition >= 180 && pipePosition <= 190){
        mario.classList.add('jump');
        setTimeout(()=> {
            mario.classList.remove('jump');
        }, 500); 
        console.log("entrou");
    } */
    
    if(pipePosition <= 120 && marioPosition < 80 && pipePosition > 0){
     
        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        cloud.style.left = `${cloudPosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        over.style.display = 'block';
        botao.style.display = 'block';

        clearInterval(loop);
    }
}, 10);




function refreshPage() {
    location.reload();
  }

document.addEventListener('keydown', jump);