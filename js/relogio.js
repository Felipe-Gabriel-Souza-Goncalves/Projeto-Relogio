var formatoMilitar = true
function pegarHorario(){
    const relogio = document.getElementById("relogio")

    const agora = new Date();
    var horas = agora.getHours();
    if(!formatoMilitar){
        var pastAm = horas >= 12 ? "PM" : "AM"
        horas = horas % 12 || 12
    }
    horas = horas.toString().padStart(2, 0);
    const minutos = agora.getMinutes().toString().padStart(2, 0)
    const segundos = agora.getSeconds().toString().padStart(2, 0)

    if(!formatoMilitar){
        relogio.innerHTML = `${horas}:${minutos}:${segundos} ${pastAm}` 
    } else{
        relogio.innerHTML = `${horas}:${minutos}:${segundos}`
    }
}

pegarHorario()
setInterval(pegarHorario, 1000)
