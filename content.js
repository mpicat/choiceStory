export default [
    {
        id: 1,
        text: "lsqdmkqsbdmkqugfir fkuy ezgfluag zlag zeg armoher hmezrh ùierj ùizer ùyiezrùiy ùierhy ùierh ùyjezrù ùyzjyù yjez rhmeorhzerihtùeolt gzeugt azemt gamzeg tmezg tamhug hhgrm hemrh erh mhzerm hmezrh tmzerhm zhrem hm",
        imgSpeaker: localStorage.getItem('Img'),
        //imgSpeaker: "img/mate.png",
        name: localStorage.getItem('Nom'),
        //background: 'choiceStory/img/laboratory.webp',
        // only if there is a skip, if not remove this line
        skip: 2,
        options: [
            {
                text: "first option",
                setState: { blueGoo: true },
                statEndChoice: "Logique",
                bonusStatEndChoice: 5,
                nextText: 3
            },
            {
                text: "second option",
                statEndChoice: "Logique",
                bonusStatEndChoice: 1,
                nextText: 2
            },
            {
                text: "third option",
                statEndChoice: "Logique",
                bonusStatEndChoice: 1,
                nextText: 2
            },
            {
                text: "fourth option",
                statEndChoice: "Logique",
                bonusStatEndChoice: 1,
                nextText: 2
            }
        ],
        // only if there is a QTE, the number is the QTE speed
        //qteSpeed: 2,
        statEndSuccesQte: "Logique",
        bonusStatEndSuccesQte: 1,
        nextTextIfSucces: 2,
        statEndFailQte: "Malin",
        bonusStatEndFailQte: 3,
        nextTextIfFail: 3,
    },
    {
        id: 2,
        text: "succes",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        options: [
            {
                text: 'trade the goo against a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'trade the goo against a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText: 3
            },
            {
                text: 'Ignore the merchant',
                nextText: 3
            },
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    },
    {
        id: 3,
        text: "fail",
        options: [
            {
                text: 'trade the goo against a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'trade the goo against a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText: 3
            },
            {
                text: 'Ignore the merchant',
                nextText: 3
            },
            {
                text: 'Restart',
                nextText: -1,
            }
        ]
    }
]