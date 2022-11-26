let containerPizza=document.querySelector("#containerPizza")
let containerEsfiha=document.querySelector("#containerEsfiha")
let containerBedidas=document.querySelector("#containerBebidas")
let containerPorcoes=document.querySelector("#containerPorcoes")
let containerProdutos=document.querySelectorAll(".containerProdutos")
let setaEsquerda=document.querySelectorAll(".setaEsquerda")
let setaDireita=document.querySelectorAll(".setaDireita")

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
   let pizza=todosProdutos.pizza
   let esfiha=todosProdutos.esfiha
   let porcoes=todosProdutos.porcoes
   let bebida=todosProdutos.bebida

    pizza.map(item=>{
       
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
        cars.innerHTML=`<i class="fa fa-shopping-basket icars" aria-hidden="true"></i>`


      containerPizza.appendChild(card)

     
    })


    esfiha.map(item=>{
       
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
        desProduto.innerHTML=`<p class="nomeP">${item.nome}</p><p class="subNome">esfiha</p>`
        valor.innerHTML=item.valor
        cars.innerHTML=`<i class="fa fa-shopping-basket" aria-hidden="true"></i>`


      containerEsfiha.appendChild(card)
     
    })

    bebida.map(item=>{
       
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
        desProduto.innerHTML=`<p class="nomeP">${item.nome}</p><p class="subNome">bebida</p>`
        valor.innerHTML=item.valor
        cars.innerHTML=`<i class="fa fa-shopping-basket" aria-hidden="true"></i>`


      containerBedidas.appendChild(card)
     
    })


   porcoes.map(item=>{
       
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
        desProduto.innerHTML=`<p class="nomeP">${item.nome}</p><p class="subNome">porção</p>`
        valor.innerHTML=item.valor
        cars.innerHTML=`<i class="fa fa-shopping-basket" aria-hidden="true"></i>`


      containerPorcoes.appendChild(card)
     
    })

    addCarrinho()

}





function carrosselProdutos(){
    for (let index = 0;  index < setaEsquerda.length; index++) {
        setaEsquerda[index].addEventListener("click",()=>{
            containerProdutos[index].scrollBy(-200,0)
         })
     
         setaDireita[index].addEventListener("click",()=>{
             containerProdutos[index].scrollBy(200,0)
          })
        
    }
    
    
}

carrosselProdutos()



function addCarrinho(){


  let icars=document.querySelectorAll(".icars")
  let card=document.querySelectorAll(".card")


        for (let index = 0; index < icars.length; index++) {
          icars[index].addEventListener("click",()=>{
           
           console.log(card[index])
          })
          
        }
}

