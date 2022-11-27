# Choice Story : Jeu dont vous êtes le héros



## Fichier content
<ul>
    <li>id : chiffre // id du texte</li>
    <li>text : texte entre guillemets // texte</li>
    <li>imgSpeaker : localStorage.getItem('Img') si c'est le joueur qui parle, sinon "img/nom-image.content-type" // image du personnage qui parle</li>
    <li>name : localStorage.getItem('Nom') si c'est le joueur qui parle, sinon texte entre guillemets // nom du personnage qui parle</li>
    <li>background : nom de l'image de fond d'écran entre guillemets // fond d'écran</li>
    <li>skip : chiffre // id du prochain texte, s'i 'il n'y a pas de skip, supprimer cette ligne pour ce texte</li>
</ul>

Options // s'il n'y a pas d'options (QTE) supprimer tout ce bloc pour ce texte
<ul>
    <li>text : texte entre guillemets // texte de cette option</li>
    <li>setState : { état : value } , mettre l'éat que l'on souhaite, mettre la value à true si elle est active, sinon false // donne un état au joueur s'il choisi cette option, s'il n'y a pas d'état supprimer cette ligne pour cette option</li>
    <li>requiredState: (currentState) => currentState.état , mettre l'éat que l'on souhaite // vérifie que le joueur possède cet état pour voir cette option</li>
    <li>statEndChoice : texte entre guillemets // nom de la stat que le joueur aura à la fin de la partie dans l'écran des scores s'il choisit cette option</li>
    <li>bonusStatEndChoice : chiffre // valeur de la stat que le joueur aura à la fin de la partie dans l'écran des scores s'il choisit cette option</li>
    <li>nextText : chiffre // id du prochain texte</li>
</ul>

QTE // s'il n'y a pas de QTE (Options) supprimer tout ce bloc pour ce texte
<ul>
    <li>qteSpeed : chiffre (plus le chiffre est bas plus le QTE sera rapide) // présence d'un QTE et vitesse de celui-ci</li>
    <li>statEndSuccesQte : texte entre guillemets // nom de la stat que le joueur aura à la fin de la partie dans l'écran des scores s'il réussit ce QTE</li>
    <li>bonusStatEndSuccesQte : chiffre // valeur de la stat que le joueur aura à la fin de la partie dans l'écran des scores s'il échoue à QTE</li>
    <li>nextTextIfSucces : chiffre // id du prochain texte si le joueur réussit ce QTE</li>
    <li>statEndFailQte : texte entre guillemets // nom de la stat que le joueur aura à la fin de la partie dans l'écran des scores s'il échoue à ce QTE</li>
    <li>bonusStatEndFailQte : chiffre // valeur de la stat que le joueur aura à la fin de la partie dans l'écran des scores s'il échoue à ce QTE</li>
    <li>nextTextIfFail : chiffre // id du prochain texte si le joueur échoue à ce QTE</li>
</ul>

