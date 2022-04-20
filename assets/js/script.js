const btnLupa = document.querySelector(".lupa")
const ulHeader = document.querySelector(".ul__header ")
const closeSearch = document.querySelector(".closeSearch")
const overlayHeader = document.querySelector(".overlayHeader")
const header = document.querySelector(".header")
const inputSearch = document.querySelector(".inputSearch")



//Adiciona animation nos lis do menu desktop para serem ativados
function functionAtivarHideMenu() {
    let decrementador = 75;

    ulHeader.querySelectorAll("li").forEach((li, index) => {
        decrementador = decrementador - 5
        li.style.animation = ''
        li.style.animationName = ""
        li.style.transform = "scale(1)"
        li.style.animation = `animationOpacity0 .15s linear .${decrementador}s forwards`
        li.style.pointerEvents = "none"

    })
}

//ativa ao apertar na lupa a animação de sumir os lis
btnLupa.addEventListener("click", () => {
    functionAtivarHideMenu()

    setTimeout(() => {
        header.classList.add("active")
        inputSearch.focus()
    }, 700)
})


//ativa ao apertar na closePopup a animação de aparecer é ativada
closeSearch.addEventListener("click", () => {
    let decrementador = 15;
    ulHeader.querySelectorAll("li").forEach((li, index) => {
        li.style.transform = "scale(0)"
        li.style.animation = ''
        li.style.animationName = ""
        li.style.pointerEvents = "all"
        decrementador = decrementador + 5
        li.style.animation = ` animationOpacity1 .15s linear .${decrementador}s forwards`
    })
    header.classList.remove("active")
})

overlayHeader.addEventListener("click", () => {
    closeSearch.click()
})

