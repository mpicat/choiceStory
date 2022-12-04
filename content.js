export default [
    {
        id: 1,
        text: "2191, New York. Cela va faire maintenant 60 ans que les Magiques se sont dévoilés à l'Humanité. Ils pensaient bien faire et collaborer avec nous. C'était mal connaître les humains...",
        background: "intro",
        skip: 2,
        options: [],
    },
    {
        id: 2,
        text: "La Brigade Anti Magiques fête ses 60 ans aujourd'hui. Jamais les gouvernements n'ont collaboré aussi rapidement à échelle mondiale. En un sens, les Magiques nous ont sauvé, ils nous ont soudés contre un ennemi commun.",
        background: "intro",
        skip: 3,
        options: [],
    },
    {
        id: 3,
        text: `... bzzz... "Marco tu me reçois ?" ... bzzz...`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "doorNight",
        skip: 4,
        options: [],
    },
    {
        id: 4,
        text: `... bzzz... "Ouais je l'amène de ton côté" ... bzzz... "il devrait pas tarder à sortir"... "on entend rien avec cette putain de musique"...`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "doorNight",
        skip: 5,
        options: [],
    },
    {
        id: 5,
        text: `VLAM ! La porte s'ouvre d'un coup et une silhouette humaine sort à toute vitesse`,
        background: "doorOpens",
        options: [],
        qteSpeed: 2,
        statEndSuccesQte: "Vivace",
        bonusStatEndSuccesQte: 1,
        nextTextIfSucces: 6,
        statEndFailQte: "Mollasson",
        bonusStatEndFailQte: 1,
        nextTextIfFail: 7,
    },
    {
        id: 6,
        text: `Vous arrivez à esquiver l'homme qui sort et le plaquez au sol. "Enfin on te tient Modred ! Après deux mois de traque, fallait vraiment con pour ici !"`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "doorOpens",
        options: [
            {
                text: `Pointer son arme sur le suspect, "un de moins..."`,
                setState: { killModred: true },
                statEndChoice: "Haine des Magiques",
                bonusStatEndChoice: 1,
                nextText: 8
            },
            {
                text: `"On va t'amener au QG, même un Magique a le droit à un procès"`,
                setState: { leaveModred: true },
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: `Le suspect vous bouscule et vous tombez à la renverse en vous cognant la tête. Quand vous reprenez vos esprits, vous voyez Marco qui tient solidement l'homme. "Tu nous en auras fait baver, Modred"`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "doorOpens",
        options: [
            {
                text: `Pointer son arme sur le suspect, "Bien joué Marco, allez un de moins..."`,
                setState: { killModred: true },
                statEndChoice: "Haine des Magiques",
                bonusStatEndChoice: 1,
                nextText: 8
            },
            {
                text: `"On va t'amener au QG, même un Magique a le droit à un procès"`,
                setState: { leaveModred: true },
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 8
            }]
    },
    {
        id: 8,
        text: `"Attend ${localStorage.getItem('Nom')}, je voulais que tu le rencontres. C'est la première opportunité que l'on a de se voir tous les trois sans autre brigadier dans le secteur. Ils sont tous au QG pour les 60 ans de la Brigade."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "doorNight",
        skip: 9,
        options: [],
    },
    {
        id: 9,
        text: `"Qu'est ce que tu racontes Marco ? Ce gars est un criminel, il est à l'origine de plusieurs attentats et disparitions de VRAIS humains chaque jour. C'est de la vermine, et notre travail est d'éliminer la vermine..."`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "doorNight",
        skip: 10,
        options: [],
    },
    {
        id: 10,
        text: `"Tu avais raison Marco, ça va être compliqué de le rallier à notre cause. Ils ont bien travaillé sur celui-là". Puis il vous regarde fixement dans les yeux`,
        textGirl: `"Tu avais raison Marco, ça va être compliqué de la rallier à notre cause. Ils ont bien travaillé sur celle-là". Puis il vous regarde fixement dans les yeux`,
        imgSpeaker: "img/modred.png",
        name: "Modred",
        background: "doorNight",
        skip: 11,
        options: [],
    },
    {
        id: 11,
        text: `Aussitôt, une douleur perçante vous traverse le crâne. "AAAAAAAAH !" Une vision vous traverse l'esprit. "Un laboratoire en ruines. Des traces de sang au sol et sur les murs..."`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "laboVision",
        options: [
            {
                text: `"Marco, enfoiré de traître... je vais en finir avec vous deux..."`,
                setState: { denonceMate: true },
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 12
            },
            {
                text: `"Marco... qu'est ce qu'il a voulu dire par 'Tu avais raison ?' Qu'est ce qu'il m'arrive ?"`,
                setState: { noDenonceMate: true },
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 13
            }
        ],
    },
    {
        id: 12,
        text: `Vous vous jettez sur Marco en furie.`,
        background: "fightInvestigators",
        options: [],
        qteSpeed: 1.7,
        statEndSuccesQte: "Vivace",
        bonusStatEndSuccesQte: 1,
        nextTextIfSucces: 14,
        statEndFailQte: "Mollasson",
        bonusStatEndFailQte: 1,
        nextTextIfFail: 15,
    },
    {
        id: 13,
        text: `"Un réseau de Magiques m'a capturé il y a quelques semaines au cours de l'opération du centre commercial... Ils m'ont montré mon passé, ils m'ont prouvé que nous les brigadiers sommes d'anciens Magiques."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "intro",
        options: [],
        skip: 23,
    },
    {
        id: 23,
        text: `"Enfants nous avons été kidnappés et modifiés par les chercheurs de la Brigade pour effacer nos pouvoirs. Notre origine nous permet toujours de ressentir et de traquer plus facilement les Magiques"`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "intro",
        options: [],
        skip: 24,
    },
    {
        id: 24,
        text: `"Tu dis vraiment n'importe quoi... Comment veux tu me faire croire ça ? On peut pas se fier à ces gens. Ils t'ont montré ce qu'ils voulaient te faire croire."`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "intro",
        options: [],
        skip: 25,
    },
    {
        id: 25,
        text: `"Tout correspondait, ils n'ont pas pu créer ces souvenirs. Même au sein de leur communauté, il n'existe pas une telle Magie."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "intro",
        options: [],
        skip: 26,
    },
    {
        id: 26,
        text: `"Nous avons bientôt terminé d'exterminer les Magiques. Qu'est ce que tu crois que l'Humanité fera des brigadiers une fois notre travail terminé ? Ils nous éradiqueront. Ça sera à notre tour."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "intro",
        options: [],
        skip: 27,
    },
    {
        id: 26,
        text: `"Je leur ai parlé des visions que tu m'avais déjà partagées. Ils n'avaient jamais entendu un ancien Magique récupérer une partie de ses pouvoirs. Accompagne nous, tu pourrais faire changer les choses."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "intro",
        options: [
            {
                text: `"Si je sens une moindre odeur de piège, ce sera un carnage..."`,
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 22
            },
            {
                text: `"Je ne peux pas vous arrêter tous les deux... Je retourne au QG"`,
                setState: { noDenonceMate: true },
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 17
            }
        ]
    },
    {
        id: 14,
        text: `Marco se défend bien. Il vous menace de son arme. Il sait que si vous le dénoncez, il finira en prison ou pire... Le combat devient plus acharné mais vous finissez par le blesser mortellement... `,
        background: "fightInvestigators",
        setState: { killMate: true },
        skip: 16,
        options: [],
    },
    {
        id: 15,
        text: `Marco repousse votre assaut, et d'une balayette vous envoie en sol. "Ce n'était pas ta première vision, tu m'en avais déjà racontées d'autres... Quand tu en auras marre de ne jamais avoir les réponses à tes questions, rejoins moi seul au 2403 Sunset Bd". Puis il quitte les lieux avec Modred.`,
        textGirl: `Marco repousse votre assaut, et d'une balayette vous envoie en sol. "Ce n'était pas ta première vision, tu m'en avais déjà racontées d'autres... Quand tu en auras marre de ne jamais avoir les réponses à tes questions, rejoins moi seule au 2403 Sunset Bd". Puis il quitte les lieux avec Modred.`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        setState: { noKillMate: true },
        skip: 16,
        options: [],
    },
    {
        id: 16,
        text: `"Regarde autour de toi ${localStorage.getItem('Nom')}, tu penses vraiment connaître tes ennemis ?" Marco s'éteind dans un dernier soupir... Autour de vous, le silence, Modred a profité du conflit pour s'enfuire.`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        skip: 17,
        options: [],
    },
    {
        id: 17,
        text: `Vous revenez au QG de la Brigade pour expliquer les faits et apporter la nouvelle de la traîtrise de Marco.`,
        background: "headquarters",
        skip: 18,
        options: [],
    },
    {
        id: 18,
        text: `Une voix robotique vous accueille à l'entrée "Brigadier, identifiez vous"`,
        background: "headquarters",
        skip: 19,
        options: [],
    },
    {
        id: 19,
        text: `"${localStorage.getItem('Nom')}, matricule B8522" Après quelques secondes les portes s'ouvrent. Deux brigadiers vous empoignent instantanément. Vous apercevez le Capitaine Kyle derrière eux.`,
        textGirl: `"${localStorage.getItem('Nom')}, matricule B6742" Après quelques secondes les portes s'ouvrent. Deux brigadiers vous empoignent instantanément. Vous apercevez le Capitaine Kyle derrière eux.`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "headquarters",
        skip: 20,
        options: [],
    },
    {
        id: 20,
        text: `Eh bien "${localStorage.getItem('Nom')}, on vient profiter de la fête ? Vos capteurs nous ont montré que vous aviez été en contact très rapproché avec la Magie... Vous allez bien nous suivre pour faire quelques examens ?" Son ton semble plus menaçant qu'à l'ordinaire`,
        imgSpeaker: "img/kyle.png",
        name: "Capitaine Kyle",
        background: "headquarters",
        options: [
            {
                text: `"Je m'expliquerai à la Brigade, je vous suis"`,
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 21
            },
            {
                text: `Vous vous enfuyez par la porte d'où vous venez`,
                requiredState: (currentState) => currentState.killMate,
                statEndChoice: "Doute en l'Humanité",
                bonusStatEndChoice: 1,
                nextText: 222
            },
            {
                text: `Vous vous enfuyez par la porte d'où vous venez en embarquant une arme lourde sur le côté`,
                requiredState: (currentState) => currentState.noDenonceMate || currentState.noKillMate,
                setState: { armes: true },
                statEndChoice: "Doute en l'Humanité",
                bonusStatEndChoice: 1,
                nextText: 222
            }
        ],
    },
    {
        id: 21,
        text: `Vous commencer à vous diriger dans le labyrinthe du QG. Vous croisez beaucoup de brigadiers venus pour l'occasion. Après quelques minutes de marche, une explosion retentit. Des cris, puis des tirs fusent dans tout le bâtiment. "Les Magiques sont rentrés !, On nous attaque !"`,
        background: "fightMagic",
        options: [
            {
                text: `Vous profitez de la discorde pour vous cacher dans un placard`,
                requiredState: (currentState) => currentState.noKillMate || currentState.noDenonceMate,
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 27
            },
            {
                text: `Vous profitez de la discorde pour vous cacher dans un placard`,
                requiredState: (currentState) => currentState.killMate,
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 28
            },
            {
                text: `Vous vous élancez en directions des tirs. "Au combat !"`,
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 29
            }
        ],
    },
    {
        id: 27,
        text: `Après plusieurs longues minutes, vous voyez Marco accompagné de personnes que vous n'aviez jamais vues. Aucun doute sur le fait que ce soient des Magiques. "Viens ${localStorage.getItem('Nom')}, ils vont faire sauter le bâtiment ! L'Humanité n'a plus besoin de nous, c'est le premier jour du grand ménage..."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightMagic",
        end: 1,
        options: [
            {
                text: `Écran des scores`,
                nextText: -1
            }],
    },
    {
        id: 28,
        text: `Après plusieurs longues minutes, une vision vous traverse l'esprit. "Kyle, le capitaine humain de la Brigade organise l'auto-destruction du QG. Pour les 60 ans de la Brigade, tous les brigadiers seront là, ce sera le moment du grand ménage". Vous reprenez vos esprits, mais vous savez qu'il est déjà trop tard. Une énorme explosion retentit...`,
        background: "fightMagic",
        end: 1,
        options: [
            {
                text: `Écran des scores`,
                nextText: -1
            }],
    },
    {
        id: 29,
        text: `Vous percutez un Magique de plein fouet. Vous lui tirez dessus à plusieurs reprises avant qu'il ne puisse réagir. Vous l'entendez simplement murmurer : "Fuis.. fuis et sauve nos frères et soeurs...". Puis il s'éteind. Une énorme explosion résonne alors dans tout le bâtiment. Trop tard les flammes vous emportent...`,        
        background: "fightMagic",
        end: 1,
        options: [
            {
                text: `Écran des scores`,
                nextText: -1
            }],
    },
    {
        id: 22,
        text: `Vous vous retrouvez maintenant dans les égoûts de la ville. Après quelques pas, vous distinguez dans la pénombre un groupe de personnes qui semblent vous attendre.`,
        background: "meetingMagic",
        skip: 30,
        options: [],
    },
    {
        id: 222,
        text: `Après plusieurs minutes à vous cacher dans la rue, vous vous rendez compte qu'une jeune femme vous suit. Vous vous retournez. "Tu me suis depuis la sortie du QG, qu'est ce que tu veux ?"`,
        background: "intro",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 223,
        options: [],
    },
    {
        id: 223,
        text: `"Je suis une amie de Marco, suis moi, je peux t'aider." Puis elle s'éloigne dans une ruelle annexe et s'aventure dans les sous-sols de la ville. Á court d'options, vous décidez de la suivre.`,        background: "intro",
        imgSpeaker: "img/sorcerer3.png",
        name: "Inconnue",
        skip: 22,
        options: [],
    },
    {
        id: 30,
        text: `"Les Magiques se cachaient dans les égoûts depuis le début?..." `,
        background: "meetingMagic",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 31,
        options: [],
    },
    {
        id: 31,
        text: `"On te cherche depuis longtemps ${localStorage.getItem('Nom')}. Je ne sais pas ce que Marco t'as dit, mais tu sais qu'aucun humain n'a de vision." `,
        background: "meetingMagic",
        imgSpeaker: "img/sorcerer3.png",
        name: "Jeune Magique",
        skip: 32,
        options: [],
    },
    {
        id: 32,
        text: `"Tu es un Magique comme tous les brigadiers. Mais tu n'es pas comme les autres, regarde." La jeune femme s'approche de vous et vous regarde droit dans les yeux.`,
        background: "meetingMagic",
        imgSpeaker: "img/sorcerer3.png",
        name: "Jeune Magique",
        skip: 33,
        options: [],
    },
    {
        id: 33,
        text: `Encore une vision... AAAAAAH... "Mes parents... mes vrais parents ? Tués. Des humains finissent le travail... J'essaye de résister. Que va faire un enfant de 7 ans face à un commando entier ? Un laboratoire. Des aiguilles..."`,
        background: "meetingMagic",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 34,
        options: [],
    },
    {
        id: 34,
        text: `"Qu... Qu'est ce que c'était ? Ces souvenirs..."`,
        background: "meetingMagic",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 35,
        options: [],
    },
    {
        id: 35,
        text: `"Ils ont fait beaucoup d'efforts pour ça. Mais Marco nous a dit que tu avais des visions depuis plusieurs semaines déjà, c'est le signe que nous attendions. Aucun brigadier n'avait pu exprimer de dons magiques depuis la création de la Brigade."`,
        background: "meetingMagic",
        imgSpeaker: "img/sorcerer3.png",
        name: "Jeune Magique",
        skip: 36,
        options: [],
    },
    {
        id: 36,
        text: `"Tu es le symbole du lien entre les brigadiers et les Magiques ${localStorage.getItem('Nom')}. Sans les brigadiers, les Humains ne nous trouverons plus et nous pourrons vivre de nouveau secrètement. Nous ne ferons pas les mêmes erreurs."`,
        background: "meetingMagic",
        imgSpeaker: "img/sorcerer3.png",
        name: "Jeune Magique",
        skip: 37,
        options: [],
    },
    {
        id: 37,
        text: `"Qu'est ce que vous attendez de moi ?"`,
        background: "meetingMagic",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 38,
        options: [],
    },
    {
        id: 38,
        text: `"Nous allons attaquer le laboratoire où les brigadiers sont 'élevés'. Les souvenirs des brigadiers y sont conservés, nous pourrons vous rendre vos passés. Mais nous avons besoin d'un brigadier pour rentrer dans ce labo et ils se méfient déjà de Marco."`,
        background: "meetingMagic",
        imgSpeaker: "img/sorcerer3.png",
        name: "Jeune Magique",
        options: [
            {
                text: `Les conduire de bonne volonté`,
                setState: { bonneVolonte: true },
                statEndChoice: "Doutes en la Brigade",
                bonusStatEndChoice: 1,
                nextText: 39
            },
            {
                text: `Les conduire au laboratoire, mais prévenir les chercheurs sur le chemin`,
                setState: { semblant: true },
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 39
            }],
    },
    {
        id: 39,
        text: `Avec un groupe de Magiques, vous prenez d'assaut le laboratoire principal au centre de la ville. L'affrontement est particulièrement violent, vous ne vous attendiez pas à tant de résistance humaine...`,
        background: "fightMagic",
        options: [
            {
                text: `Vous êtes submergés... l'opération est un échec...`,
                statEndChoice: "Doute dans la Brigade",
                bonusStatEndChoice: 1,
                nextText: 40
            },
            {
                text: `Vous êtes submergés... vous aviez bien fait de prévenir vos collègues de votre arrivée !`,
                requiredState: (currentState) => currentState.semblant,
                statEndChoice: "Doute dans la Brigade",
                bonusStatEndChoice: 1,
                nextText: 41
            },
            {
                text: `Votre arme lourde dérobée va faire des miracles !`,
                requiredState: (currentState) => currentState.armes,
                statEndChoice: "Haine des brigadiers",
                bonusStatEndChoice: 1,
                nextText: 42
            }],
    },
    {
        id: 40,
        text: `Vous êtes emprisonné par les brigadiers vainqueurs. Il semblerait que l'Humanité soit peut clémente envers les traîtres. Peut être auriez vous dû mieux choisir votre camp...`,
        textGirl: `Vous êtes emprisonnée par les brigadiers vainqueurs. Il semblerait que l'Humanité soit peut clémente envers les traîtres. Peut être auriez vous dû mieux choisir votre camp...`,
        background: "fightMagic",
        end: 1,
        options: [
            {
                text: `Écran des scores`,
                nextText: -1
            }],
    },
    {
        id: 41,
        text: `"Beau travail ${localStorage.getItem('Nom')} ! Grâce à vous nous avons pu éradiquer les cerveaux Magiques de cette cité. Je n'aurais pas dû douter de vous. Rendez vous au QG pour la fête des 60 ans de la Brigade, nous vous parlerons de votre prochaine mission."`,
        background: "fightMagic",
        imgSpeaker: "img/kyle.png",
        name: "Capitaine Kyle",
        end: 1,
        options: [
            {
                text: `Écran des scores`,
                nextText: -1
            }],
    },
    {
        id: 42,
        text: `Les chercheurs s'opposent à votre attaque. La lutte s'intensifie, mais vous faites des ravages... Vous en voyez un pointer une arme anti-Magiques sur vous...`,
        background: "fightMagic",
        options: [
            {
                text: `Il tire dans votre direction`,
                requiredState: (currentState) => currentState.leaveModred,
                nextText: 43
            },
            {
                text: `Il tire dans votre direction`,
                requiredState: (currentState) => currentState.killModred,
                nextText: 44
            }],
    },
    {
        id: 43,
        text: `Vous sentez quelqu'un vous pousser dans le dos. Modred ! C'est lui qui prend la balle, il s'effondre à vos pieds... Il vous addresse ses derniers mots : "Sauve nous, sauve ton peuple..."`,
        background: "fightMagic",
        imgSpeaker: "img/modred.png",
        name: "Modred",
        end: 1,
        options: [
            {
                text: `Écran des scores`,
                nextText: -1
            }],
    },
    {
        id: 44,
        text: `Le tir vous frappe en plein tête. Une sensation de brûlure se propage dans tout votre corps, puis vos forces vous quittent rapidement. Ces projectiles sont sensés être innofensifs pour les Humains. Vous aurez t'on menti toute votre vie ?`,
        background: "fightMagic",
        end: 1,
        options: [
            {
                text: `Écran des scores`,
                nextText: -1
            }],
    },
]