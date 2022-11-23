let containerProdutos=document.querySelector(".containerProdutos")
let setaEsquerda=document.querySelector(".setaEsquerda")
let setaDireita=document.querySelector(".setaDireita")

let todosProdutos=[]



async function init(){
    
    try {
       todosProdutos = await produtos()
        
        geraProdutos()
       
    } catch (error) {

        alert("ola")
    }
 
}

init()



function geraProdutos(){

    todosProdutos.pizza.map(item=>{
       
        let card=document.createElement("div")
        let imgProduto=document.createElement("img")
        let  desProduto=document.createElement("section")
        let valorEcars=document.createElement("section")
        let valor=document.createElement("p")
        let cars=document.createElement("p")

        card.classList.add("card")
        imgProduto.classList.add("imgProduto")
        desProduto.classList.add("desProduto")
        valorEcars.classList.add("valorEcars")
        valor.classList.add("valor")
        cars.classList.add("cars")
        
        valorEcars.appendChild(valor)
        valorEcars.appendChild(cars)
        card.appendChild(imgProduto)
        card.appendChild(desProduto)
        card.appendChild(valorEcars)

        imgProduto.src=item.img
        desProduto.innerHTML=`<p class="nomeP">${item.nome}</p><p class="subNome">pizza</p>`
        valor.innerHTML=item.valor
        cars.innerHTML=`<i class="fa fa-shopping-basket" aria-hidden="true"></i>`
       
      containerProdutos.appendChild(card)

    })

}

function carrosselProdutos(){
    
    setaEsquerda.addEventListener("click",()=>{
       containerProdutos.scrollBy(-200,0)
    })

    setaDireita.addEventListener("click",()=>{
        containerProdutos.scrollBy(200,0)
     })
     
    
}

carrosselProdutos()