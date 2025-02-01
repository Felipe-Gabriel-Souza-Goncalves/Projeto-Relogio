const marcar = document.getElementById("marcar")
const pausar = document.getElementById("pausar")

var intervalo;
var rodando = false
function criarContador(){
    var marcacoes = 1 

    var milisegundos = 0
    var segundos = 0
    var minutos = 0
    var horas = 0

    function incrementarMili(){
        milisegundos++ 
        incrementarSeg()
        display()
    }
    function incrementarSeg(){
        if(milisegundos > 99){
            milisegundos = 0
            segundos++
            incrementarMin()
        }
    }
    function incrementarMin(){
        if(segundos > 59){
            segundos = 0
            minutos++
            incrementarHora()
        }
    }
    function incrementarHora(){
        if(minutos > 59){
            minutos = 0
            horas++
        }
    }
    function display(){
        const cronometro = document.getElementById("cronometro")
        cronometro.innerHTML = `${horas.toString().padStart(2, 0)}:${minutos.toString().padStart(2, 0)}:${segundos.toString().padStart(2, 0)}:${milisegundos.toString().padStart(2, 0)}`
    }

    function marcarTempo(){
        const cronometro = document.getElementById("cronometro")
        document.getElementById("marcacoes").innerHTML +=`<p>${marcacoes}- ${cronometro.innerHTML}</p>`
        marcacoes++
    }

    function reiniciar(){
        clearInterval(intervalo)
        milisegundos = 0
        segundos = 0 
        minutos = 0
        horas = 0
        marcar.disabled = true
        pausar.disabled = true
        pausar.innerHTML = "Pausar"
        document.getElementById("comecar").innerHTML = "Começar"
        document.getElementById("comecar").setAttribute("onclick", "comecar('comecar')")
        document.getElementById("marcacoes").innerHTML = ""
        marcacoes = 1
        display()
    }

    return {incrementarMili, incrementarSeg, incrementarMin, incrementarHora, marcarTempo, reiniciar}
}

const contador = criarContador()

function comecar(e){
    marcar.disabled = false
    pausar.disabled = false
    clearInterval(intervalo)
    intervalo = setInterval(() => {contador.incrementarMili()}, 10)
    if(e != "comecar"){
        document.getElementById("pausar").innerHTML = "Pausar"
        document.getElementById("pausar").setAttribute("onclick", "pausarTempo()")
    } else{
        document.getElementById("comecar").setAttribute("onclick", "contador.reiniciar()")
        document.getElementById("comecar").innerHTML = "Reiniciar"
    }
}


function pausarTempo(){
    clearInterval(intervalo)
    document.getElementById("pausar").setAttribute("onclick", "comecar('')")
    document.getElementById("pausar").innerHTML = "Despausar"
}

