const linkSelecionado = document.getElementsByClassName("modos")[1]
linkSelecionado.classList.add("paginaAtual")

var segundos = 0
var minutos = 0
var horas = 0
var ligado = false
function comecarTimer(){
    ligado = true
    document.getElementById("playButton").disabled = true
    setTimeout(() =>{
        ligado = false
    }, segundos*1000)

    mudarDisplay()

    var intervalo = setInterval(() =>{
        segundos-=1
        if(segundos <= 0){
            segundos = 0
            clearInterval(intervalo)
            return
        }
        mudarDisplay()
    }, 1000)
}

function adicionarTempo(tempo){
    if(ligado != true){
        document.getElementById("playButton").disabled = false
    }
    console.log(segundos)
    segundos+=tempo
    console.log(segundos)

    mudarDisplay()
}

function finalizarTimer(){
    ligado = false
    segundos = 0
    mudarDisplay()
    document.getElementById("playButton").disabled = true
} 

function mudarDisplay(){
    minutos =  Math.floor(segundos / 60)
    horas = Math.floor(minutos / 60)
    minutos = minutos % 60

    document.getElementById("timer").textContent = `${horas.toString().padStart(2,0)}:${minutos.toString().padStart(2,0)}:${(segundos % 60).toString().padStart(2,0)}`
}
