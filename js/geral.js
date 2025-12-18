const root = document.querySelector(":root")
const prefereModoEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
let modoEscuro = false;


const localModoEscuro = sessionStorage.getItem("modoEscuro")
if(localModoEscuro == null){ // Se não houver algo salvo em localStorage

    if(prefereModoEscuro){ // Se o dispositivo estiver com modo escuro padrão
        document.getElementById("menu").classList.toggle("iconeEscuro")
        document.getElementById("iconMode").classList.toggle("iconeEscuro")
        modoEscuro = true;
        sessionStorage.setItem("modoEscuro", 'true')
    } else{  // Se o dispositivo estiver com modo claro padrão
        modoEscuro = false;
        sessionStorage.setItem("modoEscuro", 'false')
    }

} else{ // Se houver algo salvo
    if(sessionStorage.getItem("modoEscuro") == 'true' &&
       sessionStorage.getItem("modoEscuro") != null)
    { // Se for escuro
        modoEscuro = true
    } else if(sessionStorage.getItem("modoEscuro") == 'false' ||
              sessionStorage.getItem("modoEscuro") == null)
    { // Se for claro
        document.getElementById("menu").classList.toggle("iconeEscuro")
        document.getElementById("iconMode").classList.toggle("iconeEscuro")
        sessionStorage.setItem("modoEscuro", 'false')
    }
}

changeVariables() // Instancia para 

function toogleDarkMode(){
    modoEscuro = !modoEscuro
    if(modoEscuro){
        sessionStorage.setItem("modoEscuro", 'true')
        changeVariables()
    } else{
        sessionStorage.setItem("modoEscuro", 'false')
        changeVariables()
    }
}

// Altera as variáveis de cores e imagens css 
function changeVariables(){
    if(modoEscuro){
        root.style.setProperty("--corLinks", "rgb(243, 254, 255)")
        root.style.setProperty("--bgHover", "rgba(43, 47, 60, 1)")
        root.style.setProperty("--corFundo", "rgb(25, 28, 37)")
        root.style.setProperty("--corLetra", "rgb(255, 255, 255)")
        document.getElementById("menu").classList.toggle("iconeEscuro")
        document.getElementById("iconMode").classList.toggle("iconeEscuro")
        document.getElementById("iconMode").src = "img/dark_mode_icon.png"
    } else{
        root.style.setProperty("--corLinks", "rgb(240, 128, 128)")
        root.style.setProperty("--bgHover", "rgb(255, 216, 216)")
        root.style.setProperty("--corFundo", "rgb(255,255, 255)")
        root.style.setProperty("--corLetra", "rgb(0, 0, 0)")
        document.getElementById("iconMode").src = "img/light_mode_icon.png"
        document.getElementById("iconMode").classList.toggle("iconeEscuro")
        document.getElementById("menu").classList.toggle("iconeEscuro")
    }
}

let menuAberto = false
function toggleMenu(){ 

    menuAberto = !menuAberto
    const modos = document.getElementsByClassName("modos")

    for(let i = 0; i < modos.length; i++){
        if(menuAberto){ // Mostra os itens de navegação
            modos[i].style.transform = "translateY(0)"
            new Promise((resolve, reject) => {setTimeout(() => resolve, 300)})
        } else{ // Oculta os itens de navegação
            modos[i].style.transform = "translateY(-500px)"
            new Promise((resolve, reject) => {setTimeout(() => resolve, 300)})
        }

    }
}

