const nameEnd = document.getElementById('nameEnd');
const containerStatEnd = document.getElementById('container-statEnd');
const btnLeave = document.getElementById('btn-leave');
const imgElement = document.getElementById('img-speaker');
const songElement = document.getElementById('themeEnd');

nameEnd.innerText = `Rapport de Mission : ${localStorage.getItem('Nom')}`;

// music play
songElement.play();

// Creation of table of stats
function setStatEnd(stat) {
    let statEnd = document.createElement('div');
    let titleStatEnd = document.createElement('h3');
    let valueStatEnd = document.createElement('p');

    statEnd.setAttribute('class', 'statEnd');
    titleStatEnd.innerHTML = stat;
    valueStatEnd.innerHTML = localStorage.getItem(stat);

    containerStatEnd.appendChild(statEnd);
    statEnd.appendChild(titleStatEnd);
    statEnd.appendChild(valueStatEnd);
}

// TODO add each stat who exists in the game
setStatEnd('Vivacité');
setStatEnd('Mollesse');
setStatEnd('Haine des Magiques');
setStatEnd('Justice');
setStatEnd('Doutes dans la Brigade');

function getCharacterImg() {
    let characterChoosed = localStorage.getItem('Nom');
    if (characterChoosed == 'Jack') {
        imgElement.src = 'img/jackFull.png';
        imgElement.alt = 'Jack';
    } else {
        imgElement.src = 'img/wendyFull.png';
        imgElement.alt = 'Wendy';
    }
}

getCharacterImg();

btnLeave.addEventListener('click', () => {
    localStorage.clear(),
    location.href = "index.html"
});