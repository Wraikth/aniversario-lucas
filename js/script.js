document.addEventListener('DOMContentLoaded', () => {
    const caixaPresenteImg = document.getElementById('caixaPresenteImg');
    const carta = document.querySelector('.carta');
    const baloesContainer = document.querySelector('.baloes-container');
    const chapeuFesta = document.querySelector('.chapeu-festa');
    const boloAniver = document.querySelector('.bolo-aniver');
    const musicaFundo = document.getElementById('musicaFundo'); // Novo elemento de áudio
    const nomePessoa = "Lucas";

    let baloesInterval;

    const textoCarta = carta.querySelector('p');
    textoCarta.innerHTML = `Feliz aniversário ${nomePessoa}!`;

    const handleClick = () => {
        // Remove o event listener para que o código só seja executado uma vez
        caixaPresenteImg.removeEventListener('click', handleClick);

        caixaPresenteImg.style.display = 'none';
        carta.classList.add('visivel');
        chapeuFesta.classList.add('visivel-dec');
        boloAniver.classList.add('visivel-dec');

        // Toca a música de fundo diretamente
        musicaFundo.play();

        // Inicia o intervalo para criar balões
        baloesInterval = setInterval(criarBalao, 1000);
    };

    caixaPresenteImg.addEventListener('click', handleClick);

    const baloes = ['bcolorido.png', 'bciano.png', 'bamarelo.png'];

    function criarBalao() {
        const balaoWrapper = document.createElement('div');
        balaoWrapper.classList.add('balao');

        const balaoImg = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * baloes.length);
        balaoImg.src = `img/${baloes[randomIndex]}`;

        balaoWrapper.appendChild(balaoImg);

        const randomLeft = Math.random() * 90 + 5;
        balaoWrapper.style.left = `${randomLeft}%`;

        baloesContainer.appendChild(balaoWrapper);

        balaoWrapper.addEventListener('animationend', () => {
            balaoWrapper.remove();
        });
    }
});