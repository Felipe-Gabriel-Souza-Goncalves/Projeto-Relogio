const root = document.querySelector(":root")
var modoEscuro = false;

if(sessionStorage.getItem("modoEscuro") == 'true' && sessionStorage.getItem("modoEscuro") != null){
    modoEscuro = true
} else if(sessionStorage.getItem("modoEscuro") == 'false' || sessionStorage.getItem("modoEscuro") == null){
    document.getElementById("iconMode").classList.toggle("iconeEscuro")
    sessionStorage.setItem("modoEscuro", 'false')
    modoEscuro = false
}

changeVariables()

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

function changeVariables(){
    if(modoEscuro){
        root.style.setProperty("--corLinks", "rgb(243, 254, 255)")
        root.style.setProperty("--corFundo", "rgb(25, 28, 37)")
        root.style.setProperty("--corLetra", "rgb(255, 255, 255)")
        document.getElementById("menu").classList.toggle("iconeEscuro")
        document.getElementById("iconMode").classList.toggle("iconeEscuro")
        document.getElementById("iconMode").src = "img/dark_mode_icon.png"
    } else{
        root.style.setProperty("--corLinks", "rgb(240, 128, 128)")
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
        if(menuAberto){
            modos[i].style.transform = "translateY(0)"
            new Promise((resolve, reject) => {setTimeout(() => resolve, 300)})
        } else{
            modos[i].style.transform = "translateY(-500px)"
            new Promise((resolve, reject) => {setTimeout(() => resolve, 300)})
        }

    }
}