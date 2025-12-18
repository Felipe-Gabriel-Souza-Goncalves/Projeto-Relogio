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

    let temposMarcados = []
    function marcarTempo(){

        const cronometro = document.getElementById("cronometro")
        temposMarcados.push(cronometro.innerHTML)
        

        document.getElementById("marcacoes").innerHTML += `
        <tr>
            <td>${marcacoes} - </td>
            <td class="tempos">${cronometro.innerHTML}</td>
            <td>${temposMarcados.length > 1 ? 
                diferencaHorarios(temposMarcados[temposMarcados.length - 2], temposMarcados[temposMarcados.length - 1], true) :
                cronometro.innerHTML+"0"}
            </td>
        </tr>`
        
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

function comecar(comando){
    marcar.disabled = false
    pausar.disabled = false
    clearInterval(intervalo)
    intervalo = setInterval(() => {contador.incrementarMili()}, 10)
    if(comando != "comecar"){ 
        document.getElementById("pausar").innerHTML = "Pausar"
        document.getElementById("pausar").setAttribute("onclick", "pausarTempo()")
    } else{
        document.getElementById("comecar").setAttribute("onclick", "contador.reiniciar()")
        document.getElementById("comecar").innerHTML = "Reiniciar"
    }
}

function pausarTempo(){ // Pausa e altera elementos
    clearInterval(intervalo)
    document.getElementById("pausar").setAttribute("onclick", "comecar('')")
    document.getElementById("pausar").innerHTML = "Continuar"
}


// Feito com auxílio de IA
function parseHorario(horario) { 
    // Transforma a string hh:mm:ss:ms em milisegundos e retorna
    const [hh, mm, ss, ms] = horario.split(':').map(Number);
    return (((hh * 60 + mm) * 60 + ss) * 1000 + ms);
}

function diferencaHorarios(h1, h2, formatado = false) {
    // Calcula a diferença entre horários marcados por milisegundos
    const ms1 = parseHorario(h1);
    const ms2 = parseHorario(h2);
    const diff = Math.abs(ms1 - ms2);

    // Se não quiser a string, retorna a diferença em milisegundos
    if (!formatado) return diff;

    const horas = Math.floor(diff / 3600000);
    const minutos = Math.floor((diff % 3600000) / 60000);
    const segundos = Math.floor((diff % 60000) / 1000);
    const milissegundos = diff % 1000;

    // Retorna a string em hh:mm:ss:mss
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milissegundos).padEnd(3, '0')}`;
}
