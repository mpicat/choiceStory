import { textNodes } from '.././text.js';

const containerElement = document.getElementById('container');
const optionButtonsElement = document.getElementById('option-buttons');
const textElement = document.getElementById('text');
const btnSkipContainerElement = document.getElementById('btn-skip-container');
const imgContainerElement = document.getElementById('img-container');
const imgElement = document.getElementById('img-speaker');
const nameElement = document.getElementById('name');

let state = {}

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);

    containerElement.style.backgroundImage = `url(${textNode.background})`;
    textElement.innerText = textNode.text;

    // presence of a skip button if there re is only dialog
    if (textNode.skip) {
        let btnSkip = document.createElement('button');
        let iSkip = document.createElement('i');

        btnSkip.setAttribute('id', 'btn-skip');
        iSkip.setAttribute('class', 'fa-sharp fa-solid fa-play');

        btnSkipContainerElement.appendChild(btnSkip);
        btnSkip.appendChild(iSkip);

        btnSkip.addEventListener('click', () => {
            showTextNode(textNode.skip),
            btnSkip.removeChild(iSkip),
            btnSkipContainerElement.removeChild(btnSkip)});
    }

    // presence of image and name
    if (textNode.imgSpeaker) {
        imgContainerElement.style.display = "flex";
        imgElement.style.display = "flex";
        nameElement.style.display = "flex";

        imgElement.src = textNode.imgSpeaker;
        imgElement.alt = textNode.name;
        nameElement.innerText = textNode.name;
    } else {
        imgContainerElement.style.display = "none";
        imgElement.style.display = "none";
        nameElement.style.display = "none";
    }

    // presence of qte bar if there is an action
    if (textNode.qteSpeed) {
        let qteDiv = document.createElement('div');
        let qteBar = document.createElement('div');
        let qteAreaGood = document.createElement('div');
        let qteIndicatorBar = document.createElement('div');
        let qteBtn = document.createElement('button');

        qteDiv.setAttribute('id', 'qte');
        qteBar.setAttribute('id', 'bar');
        qteAreaGood.setAttribute('class', 'areaGood');
        qteIndicatorBar.setAttribute('id', 'indicatorBar');
        qteIndicatorBar.style.animation = `moveIndicator ${textNode.qteSpeed}s alternate infinite linear`;
        qteBtn.setAttribute('id', 'btn-qte');
        qteBtn.innerHTML = 'AGIR';

        containerElement.appendChild(qteDiv);
        qteDiv.appendChild(qteBar);
        qteBar.appendChild(qteAreaGood);
        qteBar.appendChild(qteIndicatorBar);
        qteDiv.appendChild(qteBtn);

        // function for QTE to check the position of the indicator in the loading bar
        function qte() {
            let barPosition = qteIndicatorBar.offsetLeft;
            if (barPosition >= 180 && barPosition <= 220) {
                // case where its not the 1st time this stat is put in storage
                if (localStorage.getItem(textNode.statEndSuccesQte)) {
                    let statToImprove = localStorage.getItem(textNode.statEndSuccesQte);
                    localStorage.setItem(textNode.statEndSuccesQte, (Number(statToImprove) + textNode.bonusStatEndSuccesQte));
                }
                // case where its the 1st time this stat is put in storage
                else {
                    localStorage.setItem(textNode.statEndSuccesQte, textNode.bonusStatEndSuccesQte);
                }
                
                showTextNode(textNode.nextTextIfSucces);
            } else {
                // case where its not the 1st time this stat is put in storage
                if (localStorage.getItem(textNode.statEndFailQte)) {
                    let statToImprove = localStorage.getItem(textNode.statEndFailQte);
                    localStorage.setItem(textNode.statEndFailQte, (Number(statToImprove) + textNode.bonusStatEndFailQte));
                }
                // case where its the 1st time this stat is put in storage
                else {
                    localStorage.setItem(textNode.statEndFailQte, textNode.bonusStatEndFailQte);
                }
                
                showTextNode(textNode.nextTextIfFail);
            }

            qteDiv.removeChild(qteBtn);
            qteBar.removeChild(qteIndicatorBar);
            qteBar.removeChild(qteAreaGood);
            qteDiv.removeChild(qteBar);
            containerElement.removeChild(qteDiv);
        }

        qteBtn.addEventListener('click', () => qte());
    }
    
    // creation options
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    // case where its not the 1st time this stat is put in storage
    if (localStorage.getItem(option.statEndChoice)) {
        let statToImprove = localStorage.getItem(option.statEndChoice);
        localStorage.setItem(option.statEndChoice, (Number(statToImprove) + option.bonusStatEndChoice));
    }
    // case where its the 1st time this stat is put in storage
    else {
        localStorage.setItem(option.statEndChoice, option.bonusStatEndChoice);
    }

    // restart
    // TODO repasser à <= 0
    if (nextTextNodeId >= 3) {
        location.href = "end.html";
    }

    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

startGame();