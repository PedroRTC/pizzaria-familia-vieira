let containerPizza=document.querySelector(".containerPizza")
let todosProdutos=[]



async function init(){
    
    try {
       todosProdutos = await produtos()
        
        geraPizza()
       
    } catch (error) {

        alert("ola")
    }
 
}

init()



function geraPizza(){

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
       
      containerPizza.appendChild(card)

    })

}