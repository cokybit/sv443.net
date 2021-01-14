const permissions = 523329;
const clientID = 524324404583464960;

function inviteBot() {
    window.open(`https://discordapp.com/api/oauth2/authorize?client_id=${clientID}&scope=bot&permissions=${permissions}`);
}

document.addEventListener("DOMContentLoaded", ()=>{
    let els = gebcn("botprefix");
    Array.prototype.forEach.call(els, element => {
        element.innerHTML="^";
    });
    
});