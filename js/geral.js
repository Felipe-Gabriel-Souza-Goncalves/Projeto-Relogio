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

// const variaveis = window.getComputedStyle(root)

function changeVariables(){
    if(modoEscuro){
        root.style.setProperty("--corLinks", "rgb(243, 254, 255)")
        root.style.setProperty("--corFundo", "rgb(25, 28, 37)")
        root.style.setProperty("--corLetra", "rgb(255, 255, 255)")
        document.getElementById("iconMode").src = "img/dark_mode_icon.png"
        document.getElementById("iconMode").classList.toggle("iconeEscuro")
    } else{
        root.style.setProperty("--corLinks", "rgb(240, 128, 128)")
        root.style.setProperty("--corFundo", "rgb(255,255, 255)")
        root.style.setProperty("--corLetra", "rgb(0, 0, 0)")
        document.getElementById("iconMode").src = "img/light_mode_icon.png"
        document.getElementById("iconMode").classList.toggle("iconeEscuro")
    }
}