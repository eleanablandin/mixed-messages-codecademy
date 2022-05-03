
const messages = {
    who:['Batman', 'Superman', 'The president', 'Madonna'],
    ver: ['burned', 'attacked', 'pissed', 'crushed', 'ate', 'loved'],
    what:['Gotham City', 'Hollywood', 'my car', 'the world', 'your house', 'your hotdog'],
    when:['during the war', 'while I was praying', 'before the class']
    
}


let randomNumber = num => {
    return Math.floor(Math.random() * num);
}


let wordWho = messages.who[randomNumber(messages.who.length)];
let wordVer = messages.ver[randomNumber(messages.ver.length)];
let wordWhat = messages.what[randomNumber(messages.what.length)];
let wordWhen = messages.when[randomNumber(messages.when.length)]; 

console.log(`${wordWho} ${wordVer} ${wordWhat} ${wordWhen}`);