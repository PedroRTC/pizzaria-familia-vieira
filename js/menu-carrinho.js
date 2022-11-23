let buttonMenu=document.querySelector(".buttonMenu")
let buttonCars=document.querySelector(".buttonCars")
let buttonFechaCars=document.querySelector(".buttonFechaCars")
let carrinho=document.querySelector(".carrinho")
let menuLateral=document.querySelector(".menuLateral")


buttonMenu.addEventListener("click", expandirMenu)
buttonCars.addEventListener("click", expandirCarrinho)
buttonFechaCars.addEventListener("click",removeCars)



function expandirMenu(){
  menuLateral.style.transform="translateX(0%)"
  buttonMenu.style.transform="rotateX(180deg) scale(1.4)"
  setTimeout(() => {
    buttonMenu.classList.remove("fa-bars")
    buttonMenu.classList.add("fa-times")
  }, 100);
 
  buttonMenu.removeEventListener("click", expandirMenu)
  buttonMenu.addEventListener("click", removerMenu)


}


function removerMenu(){
    menuLateral.style.transform="translateX(-100%) "
    buttonMenu.style.transform="rotateX(0deg) scale(1.4)"
    setTimeout(() => {
      buttonMenu.classList.add("fa-bars")
      buttonMenu.classList.remove("fa-times")
    }, 100);
  
  buttonMenu.addEventListener("click", expandirMenu)
  buttonMenu.removeEventListener("click", removerMenu)

}

function expandirCarrinho(){

  carrinho.style.transform="translate(0%)"
  removerMenu()

}

function removeCars(){
  carrinho.style.transform="translate(100%)"
}



