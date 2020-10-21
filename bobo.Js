const btn = document.getElementById('btn');
let quote = document.getElementById('quote');
let proverbe = [ "Privée de ses ancêtres, une ville est acculée à la ruine", "Le silence, est le salut","Aller doucement n'empêche pas d'arriver","La pluie ne tombe pas seulement sur un toit.","Ce que tu ne donneras pas à un ami tu ne le lui promets pas","Qui aime deux choses en est victime"," La lune ne devient pas pleine en un jour","Qui a de la patience a tout","Quand la souris nargue le chat, c'est que son trou n'est pas loin"]


function chugaba () {
    let data = Math.floor(Math.random()*10) ;
     quote.innerHTML =proverbe[data];
     console.log('ok');
}

