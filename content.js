export default [
    {
        id: 1,
        text: "2191, New York. Cela va faire maintenant 60 ans que les Magiques se sont dévoilés à l'Humanité. Ils pensaient bien faire et collaborer avec nous, mais c'est mal connaître les humains...",
        background: "intro",
        skip: 2,
        options: [],
    },
    {
        id: 2,
        text: "La Brigade Anti Magiques fête ses 60 ans ce jour-ci. Jamais les humains n'ont collaboré aussi rapidement à échelle mondiale. En un sens, les Magiques nous ont sauvé, ils nous ont soudés contre un ennemi commun.",
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
        text: `BAM ! La porte s'ouvre d'un coup et une silhouette humaine sort à toute vitesse`,
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
        text: `Vous arrivez à esquiver l'homme qui sort et le plaquez au sol. "Enfin on te tient Modred ! Ça fait une semaine qu'on te traque, on savait bien que tu finirais par retourner avec les gens de ta race !"`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "doorOpens",
        options: [
            {
                text: "Tuer le suspect attrapé",
                setState: { killMordred: true },
                statEndChoice: "Haine des Magiques",
                bonusStatEndChoice: 1,
                nextText: 8
            },
            {
                text: "Attendre Marco pour amener le suspect au QG",
                setState: { leaveMordred: true },
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: `Le suspect vous bouscule, vous tombez à la renverse. Vous êtes légèrement sonné. Quand vous reprenez vos esprits, vous voyez Marco qui tient solidement l'homme. "Tu nous en auras fait baver Mordred !"`,
        textGirl: `Le suspect vous bouscule, vous tombez à la renverse. Vous êtes légèrement sonnée. Quand vous reprenez vos esprits, vous voyez Marco qui tient solidement l'homme. "Tu nous en auras fait baver Mordred !"`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "doorOpens",
        options: [
            {
                text: "Tuer le suspect attrapé",
                setState: { tuerMordred: true },
                statEndChoice: "Haine des Magiques",
                bonusStatEndChoice: 1,
                nextText: 8
            },
            {
                text: "Amener le suspect au QG",
                setState: { leaveMordred: true },
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 8
            }]
    },
    {
        id: 8,
        text: `"Attend ${localStorage.getItem('Nom')}, ce type c'est un haut placé dans les Magiques. J'aimerai savoir pourquoi il a tout risqué pour revenir ici. Il est pas con, il savait qu'on le chopperait"`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "doorNight",
        skip: 9,
        options: [],
    },
    {
        id: 9,
        text: `"On s'en fout, c'est à cause de gars comme lui qu'il y a des attentats et des disparitions de VRAIS humains chaque jour. C'est de la vermine, et notre travail est d'éliminer la vermine..."`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "doorNight",
        skip: 10,
        options: [],
    },
    {
        id: 10,
        text: `Mordred s'adresse à Marco et dit calmement : "Tu avais raison Marco, c'est bien lui, mais ça va être compliqué de le rallier à notre cause. Ils l'ont bien travaillé celui-là". Puis il vous regarde fixement dans les yeux`,
        textGirl: `Mordred s'adresse à Marco et dit calmement : "Tu avais raison Marco, c'est bien elle, mais ça va être compliqué de la rallier à notre cause. Ils l'ont bien travaillée celle-là". Puis il vous regarde fixement dans les yeux`,
        imgSpeaker: "img/mordred.png",
        name: "Mordred",
        background: "doorNight",
        skip: 11,
        options: [],
    },
    {
        id: 11,
        text: `Aussitôt, une douleur perçante vous traverse le crâne. "AAAAAAAAH !" Une vision vous traverse l'esprit. Vous voyez un laboratoire en ruines, des traces de sang au sol et sur les murs. Pendant quelques secondes vous vous déconnectez de la réalite... Vous appercevez Marco qui laisse s'échapper Mordred`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "laboVision",
        options: [
            {
                text: `"Marco, enfoiré... comment t'as pu laissé partir ce type ?"`,
                setState: { denonceMate: true },
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 12
            },
            {
                text: `"Marco... qu'est ce qu'il a voulu dire par 'Tu avais raison ?'"`,
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
        text: `"Un réseau de Magiques m'a contacté il y a quelques semaines... Plusieurs autres brigadiers aussi. Ils nous ont fourni des preuves qui indiquent que nous serions des anciens Magiques..."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        options: [],
        skip: 23,
    },
    {
        id: 23,
        text: `"Enfants nous avons été modifiés par la Brigade pour effacer nos pouvoirs. Mais notre origine nous permet toujours de ressentir et de traquer plus facilement les Magiques"`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        options: [],
        skip: 24,
    },
    {
        id: 24,
        text: `"Tu dis vraiment n'importe quoi... Comment veux tu me faire croire ça ? On peut pas se fier à ces gens"`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "fightInvestigators",
        options: [],
        skip: 25,
    },
    {
        id: 25,
        text: `"T'imagines le jour où ça va se savoir ? Tu crois que les brigadiers seront toujours aussi bien vus de l'Humanité ? Ils nous éradiqueront une fois notre mission terminée. Ça sera à notre tour."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        options: [],
        skip: 26,
    },
    {
        id: 26,
        text: `"Tu as parlé de preuves non ? De quoi il s'agit ?"`,
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        background: "fightInvestigators",
        options: [],
        skip: 27,
    },
    {
        id: 26,
        text: `"Accompagne moi, et tu pourras les voir de tes propres yeux. Avec ou sans toi, je vais les voir."`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        options: [
            {
                text: `Accompagner Marco`,
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 22
            },
            {
                text: `Revenir au QG`,
                setState: { noDenonceMate: true },
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 17
            }
        ]
    },
    {
        id: 14,
        text: `Marco se défend bien. Il vous menace de son arme. Il sait que si vous le dénoncez, il ne sera pas pardonné. Le combat devient plus acharné et vous finissez par le blesser mortellement... `,
        background: "fightInvestigators",
        setState: { killMate: true },
        skip: 16,
        options: [],
    },
    {
        id: 15,
        text: `Marco repousse votre assaut, et d'une balayette vous envoie en sol. "Ce n'était pas ta première vision, je me trompe ? Quand tu en auras marre de ne jamais avoir les réponses à tes questions, rejoins moi seul au 2403 Sunset Bd". Puis il quitte les lieux.`,
        textGirl: `Marco repousse votre assaut, et d'une balayette vous envoie en sol. "Ce n'était pas ta première vision, je me trompe ? Quand tu en auras marre de ne jamais avoir les réponses à tes questions, rejoins moi seule au 2403 Sunset Bd". Puis il quitte les lieux.`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        setState: { noKillMate: true },
        skip: 16,
        options: [],
    },
    {
        id: 16,
        text: `"Regarde autour de toi ${localStorage.getItem('Nom')}, tu penses vraiment reconnaître tes ennemis ?" Marco s'éteind dans un dernier soupir... Ces derniers mots ne vous restent en tête. Vous essayez de vous réconforter en pensant avoir fait le bon choix. Marco était devenu un obstacle à l'Humanité.`,
        imgSpeaker: "img/mate.png",
        name: "Marco",
        background: "fightInvestigators",
        skip: 17,
        options: [],
    },
    {
        id: 17,
        text: `Vous revenez au QG de la Brigade pour expliquer les faits et apporter la terrible nouvelle de la traîtrise de Marco.`,
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
        text: `Eh bien "${localStorage.getItem('Nom')}, de retour au bercail ? Vos capteurs nous ont montré que vous aviez été en contact très rapproché avec la Magie... Vous allez bien nous suivre pour faire quelques examens ?"`,
        imgSpeaker: "img/kyle.png",
        name: "Capitaine Kyle",
        background: "headquarters",
        options: [
            {
                text: `"Je n'ai rien à cacher à l'Humanité, je vous suis"`,
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 21
            },
            {
                text: `Le Capitaine vous semble louche, vous vous enfuyez par la porte d'où vous venez`,
                requiredState: (currentState) => currentState.killMate,
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 222
            },
            {
                text: `Le Capitaine vous semble louche, vous vous enfuyez par la porte d'où vous venez en embarquant une arme lourde sur le côté`,
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
        text: `Après quelques minutes à vous diriger dans le labyrinthe du QG, une explosion retentit. Des cris, puis des tirs fusent dans tout le bâtiment. "Les Magiques sont rentrés !, On nous attaque !"`,
        background: "fightMagic",
        options: [
            {
                text: `Se cacher`,
                requiredState: (currentState) => currentState.noKillMate || currentState.noDenonceMate,
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 27
            },
            {
                text: `Se cacher`,
                requiredState: (currentState) => currentState.killMate,
                statEndChoice: "Patience",
                bonusStatEndChoice: 1,
                nextText: 28
            },
            {
                text: `Au combat !`,
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 29
            }
        ],
    },
    {
        id: 27,
        text: `Après plusieurs longues minutes, vous voyez Marco accompagné de personnes que vous n'aviez jamais vues. Aucun doute sur le fait que ce soient des Magiques. "Viens ${localStorage.getItem('Nom')}, ils font sauter le bâtiment ! L'Humanité n'a plus besoin de nous, le grand ménage a commencé..."`,
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
        text: `Après plusieurs longues minutes, une vision vous traverse l'esprit. Vous y voyez le chef de la Brigade organiser l'auto-destruction du QG. Il parle avec un commandant de l'Humanité. "Pour les 60 ans de la Brigade, tous les brigadiers seront là, ce sera le moment du grand ménage". Vous reprenez vos esprits, mais vous savez qu'il est déjà trop tard. Une énorme explosion retentit...`,
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
        text: `Vous vous lancez au combat, mais à ce moment un Magique vous interpèle. "Barre toi taré, c'est ce qu'ils attendent de nous !" Dans le feu de l'actino, vous lui tirez dessus à plusieurs reprises. "Pauvre déchet non humain...". Vous apercevez une larme couler sur la joue de votre victime, ces yeux semblent remplis de pitié. Puis une énorme explosion résonne dans tout le bâtiment, trop tard les flammes vous emportent...`,
        textGirl: `Vous vous lancez au combat, mais à ce moment un Magique vous interpèle. "Barre toi tarée, c'est ce qu'ils attendent de nous !" Dans le feu de l'actino, vous lui tirez dessus à plusieurs reprises. "Pauvre déchet non humain...". Vous apercevez une larme couler sur la joue de votre victime, ces yeux semblent remplis de pitié. Puis une énorme explosion résonne dans tout le bâtiment, trop tard les flammes vous emportent...`,
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
        text: `Après plusieurs minutes à vous cacher dans la rue, vous vous rendez compte qu'une jeune femme vous suit'. Vous vous retournez. "Tu me suis depuis la sortie du QG, qu'est ce que tu veux ?"`,
        background: "intro",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 223,
        options: [],
    },
    {
        id: 223,
        text: `"Je suis une amie de Marco, suis moi, je peux t'aider." Puis elle s'éloigne dans une ruelle annexe et s'aventure dans les sous-sols de la ville. Intrigué, vous décidez de la suivre.`,
        textGirl: `"Je suis une amie de Marco, suis moi, je peux t'aider." Puis elle s'éloigne dans une ruelle annexe et s'aventure dans les sous-sols de la ville. Intriguée, vous décidez de la suivre.`,
        background: "intro",
        imgSpeaker: "img/sorcerer3.png",
        name: "Inconnue",
        skip: 22,
        options: [],
    },
    {
        id: 30,
        text: `"Vous... vous êtes des Magiques... C'est quoi ce plan ?..." `,
        background: "meetingMagic",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 31,
        options: [],
    },
    {
        id: 31,
        text: `"On te cherche depuis longtemps ${localStorage.getItem('Nom')}. Je ne sais pas ce que Marco t'as dit, mais si t'as un peu de jugeote ou si tu as écouté tes visions, tu ne peux plus le nier, tu sais que tu n'es pas humain..." `,
        textGirl: `"On te cherche depuis longtemps ${localStorage.getItem('Nom')}. Je ne sais pas ce que Marco t'as dit, mais si t'as un peu de jugeote ou si tu as écouté tes visions, tu ne peux plus le nier, tu sais que tu n'es pas humaine..." `,
        background: "meetingMagic",
        imgSpeaker: "img/sorcerer3.png",
        name: "Jeune Magique",
        skip: 32,
        options: [],
    },
    {
        id: 32,
        text: `"Tu es un Magique comme tous les brigadiers, c'est pourquoi tu possède ces dons si... spéciaux. Mais tu n'es pas comme les autres, regarde." La jeune femme s'approche de vous et vous regarde droit dans les yeux...`,
        textGirl: `"Tu es une Magique comme tous les brigadiers, c'est pourquoi tu possède ces dons si... spéciaux. Mais tu n'es pas comme les autres, regarde." La jeune femme s'approche de vous et vous regarde droit dans les yeux...`,
        background: "meetingMagic",
        imgSpeaker: "img/sorcerer3.png",
        name: "Jeune Magique",
        skip: 33,
        options: [],
    },
    {
        id: 33,
        text: `Encore une vision... AAAAAAH... "Mes parents... mes vrais parents ? Tués. Des humains finissent le travail... J'essaye de résister, mais que va faire un enfant de 7 ans face à un commando entier ? Un laboratoire. Des aiguilles..."`,
        background: "meetingMagic",
        imgSpeaker: localStorage.getItem('Img'),
        name: localStorage.getItem('Nom'),
        skip: 34,
        options: [],
    },
    {
        id: 34,
        text: `"Qu... Qu'est ce que c'était ? J'avais complètement perdu ces souvenirs"`,
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
        text: `"Tu es le symbole du lien entre les brigadiers et les Magiques ${localStorage.getItem('Nom')}. Sans les brigadiers, les Humains ne nous trouverons plus et nous pourrons vivre de nouveau paisiblement tous ensemble..."`,
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
        text: `"Nous comptons attaquer le laboratoire où les brigadiers sont 'élevés'. Ici tous les souvenirs des brigadiers sont conservés dans une matrice. Une fois détruite, vous récupérerez tous votre passé, ce qui mettra fin à la traque... Et nous avons besoin de toi pour rentrer dans ce labo"`,
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
                text: `Faire semblant de se rallier à leur cause, mais les pièger dès que possible`,
                setState: { semblant: true },
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 39
            }],
    },
    {
        id: 39,
        text: `"Nous comptons attaquer le laboratoire où les brigadiers sont 'élevés'. Ici tous les souvenirs des brigadiers sont conservés dans une matrice. Une fois détruite, vous récupérerez tous votre passé, ce qui mettra fin à la traque... Et nous avons besoin de toi pour rentrer dans ce labo"`,
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
                text: `Faire semblant de se rallier à leur cause, mais les pièger dès que possible`,
                setState: { semblant: true },
                statEndChoice: "Loyal à la Brigade",
                bonusStatEndChoice: 1,
                nextText: 39
            }],
    },
]