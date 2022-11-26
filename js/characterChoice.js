function confirmCharacter(name, img) {
    localStorage.setItem('Nom', name);
    localStorage.setItem('Img', img);
    location.href = "/game.html";
}

function chooseACharacter(name, img) {
    let div = document.createElement('div');
    let divOkNo = document.createElement('div');
    let p = document.createElement('p');
    let btnOk = document.createElement('button');
    let btnNo = document.createElement('button');

    div.setAttribute('class', 'choice-container');
    p.setAttribute('class', 'p');
    divOkNo.setAttribute('class', 'yesNo-container');
    btnOk.setAttribute('class', 'button');
    btnNo.setAttribute('class', 'button');

    btnOk.addEventListener('click', () => confirmCharacter(name, img));
    btnNo.addEventListener('click', () => location.href = "characterChoice.html");

    p.innerHTML = `Souhaitez vous démarrer la partie avec ${name} ?`;
    btnOk.innerHTML = 'Oui';
    btnNo.innerHTML = 'Non';

    document.body.appendChild(div);
    div.appendChild(p);
    div.appendChild(divOkNo);
    divOkNo.appendChild(btnOk);
    divOkNo.appendChild(btnNo);
}

const btnWendy = document.getElementById('btn-wendy');
const btnJack = document.getElementById('btn-jack');

btnWendy.addEventListener('click', () => chooseACharacter('Wendy', '/img/wendy.png'));
btnJack.addEventListener('click', () => chooseACharacter('Jack', '/img/jack.png'));

