let containerPizza = document.querySelector("#containerPizza");
let containerEsfiha = document.querySelector("#containerEsfiha");
let containerBedidas = document.querySelector("#containerBebidas");
let containerPorcoes = document.querySelector("#containerPorcoes");
let containerProdutos = document.querySelectorAll(".containerProdutos");
let setaEsquerda = document.querySelectorAll(".setaEsquerda");
let setaDireita = document.querySelectorAll(".setaDireita");

let todosProdutos = [];

let backendCars = [];

backendCars = JSON.parse(localStorage.getItem("backendCars")) || [];


  function mostraLanches(){

    backendCars.map(i=>{
      let lanches=document.createElement("section")
      let inforLanches=document.createElement("section")
      let imgLanches=document.createElement("img")
      let nomeLanches=document.createElement("p")
      let valorLanches=document.createElement("p")
      let qntLanches=document.createElement("input")

      qntLanches.setAttribute("type","number")
      qntLanches.setAttribute("min","1")
      qntLanches.setAttribute("value","1")


      lanches.classList.add("laches")
      inforLanches.classList.add("inforLaches")  
      imgLanches.classList.add("imgLaches")
      nomeLanches.classList.add("nomeLaches")
      valorLanches.classList.add("valorLaches")
      qntLanches.classList.add("qntLanches")

      imgLanches.src=i.img
      nomeLanches.textContent=i.nome
      valorLanches.textContent=i.valor

   

  

      

    
      lanches.appendChild(imgLanches)
      lanches.appendChild(inforLanches)

      inforLanches.appendChild(nomeLanches)
      inforLanches.appendChild(valorLanches)
      inforLanches.appendChild(qntLanches)


      carrinho.appendChild(lanches)



    })
  }

 


async function init() {
  try {
    todosProdutos = await produtos();

    geraProdutos();
    mostraLanches()
  } catch (error) {
    alert("ola");
  }
}

init();

function geraProdutos() {
  let pizza = todosProdutos.pizza;
  let esfiha = todosProdutos.esfiha;
  let porcoes = todosProdutos.porcoes;
  let bebida = todosProdutos.bebida;

  pizza.map((item) => {
    let card = document.createElement("div");
    let imgProduto = document.createElement("img");
    let desProduto = document.createElement("section");
    let valorEcars = document.createElement("section");
    let valor = document.createElement("p");
    let cars = document.createElement("p");

    card.classList.add("card");
    imgProduto.classList.add("imgProduto");
    desProduto.classList.add("desProduto");
    valorEcars.classList.add("valorEcars");
    valor.classList.add("valor");
    cars.classList.add("cars");

    valorEcars.appendChild(valor);
    valorEcars.appendChild(cars);
    card.appendChild(imgProduto);
    card.appendChild(desProduto);
    card.appendChild(valorEcars);

    imgProduto.src = item.img;
    desProduto.innerHTML = `<p class="nomeP">${item.nome}</p><p class="subNome">pizza</p>`;
    valor.innerHTML = item.valor;
    cars.innerHTML = `<i class="fa fa-shopping-basket icars" aria-hidden="true"></i>`;

    cars.addEventListener("click", () => addCarrinho(item));

    containerPizza.appendChild(card);
  });

  esfiha.map((item) => {
    let card = document.createElement("div");
    let imgProduto = document.createElement("img");
    let desProduto = document.createElement("section");
    let valorEcars = document.createElement("section");
    let valor = document.createElement("p");
    let cars = document.createElement("p");

    card.classList.add("card");
    imgProduto.classList.add("imgProduto");
    desProduto.classList.add("desProduto");
    valorEcars.classList.add("valorEcars");
    valor.classList.add("valor");
    cars.classList.add("cars");

    valorEcars.appendChild(valor);
    valorEcars.appendChild(cars);
    card.appendChild(imgProduto);
    card.appendChild(desProduto);
    card.appendChild(valorEcars);

    imgProduto.src = item.img;
    desProduto.innerHTML = `<p class="nomeP">${item.nome}</p><p class="subNome">esfiha</p>`;
    valor.innerHTML = item.valor;
    cars.innerHTML = `<i class="fa fa-shopping-basket" aria-hidden="true"></i>`;

    cars.addEventListener("click", () => addCarrinho(item));
    containerEsfiha.appendChild(card);
  });

  bebida.map((item) => {
    let card = document.createElement("div");
    let imgProduto = document.createElement("img");
    let desProduto = document.createElement("section");
    let valorEcars = document.createElement("section");
    let valor = document.createElement("p");
    let cars = document.createElement("p");

    card.classList.add("card");
    imgProduto.classList.add("imgProduto");
    desProduto.classList.add("desProduto");
    valorEcars.classList.add("valorEcars");
    valor.classList.add("valor");
    cars.classList.add("cars");

    valorEcars.appendChild(valor);
    valorEcars.appendChild(cars);
    card.appendChild(imgProduto);
    card.appendChild(desProduto);
    card.appendChild(valorEcars);

    imgProduto.src = item.img;
    desProduto.innerHTML = `<p class="nomeP">${item.nome}</p><p class="subNome">bebida</p>`;
    valor.innerHTML = item.valor;
    cars.innerHTML = `<i class="fa fa-shopping-basket" aria-hidden="true"></i>`;

    cars.addEventListener("click", () => addCarrinho(item));
    containerBedidas.appendChild(card);
  });

  porcoes.map((item) => {
    let card = document.createElement("div");
    let imgProduto = document.createElement("img");
    let desProduto = document.createElement("section");
    let valorEcars = document.createElement("section");
    let valor = document.createElement("p");
    let cars = document.createElement("p");

    card.classList.add("card");
    imgProduto.classList.add("imgProduto");
    desProduto.classList.add("desProduto");
    valorEcars.classList.add("valorEcars");
    valor.classList.add("valor");
    cars.classList.add("cars");

    valorEcars.appendChild(valor);
    valorEcars.appendChild(cars);
    card.appendChild(imgProduto);
    card.appendChild(desProduto);
    card.appendChild(valorEcars);

    imgProduto.src = item.img;
    desProduto.innerHTML = `<p class="nomeP">${item.nome}</p><p class="subNome">porção</p>`;
    valor.innerHTML = item.valor;
    cars.innerHTML = `<i class="fa fa-shopping-basket" aria-hidden="true"></i>`;
    cars.addEventListener("click", () => addCarrinho(item));

    containerPorcoes.appendChild(card);
  });
}

function carrosselProdutos() {
  for (let index = 0; index < setaEsquerda.length; index++) {
    setaEsquerda[index].addEventListener("click", () => {
      containerProdutos[index].scrollBy(-200, 0);
    });

    setaDireita[index].addEventListener("click", () => {
      containerProdutos[index].scrollBy(200, 0);
    });
  }
}

carrosselProdutos();

function addCarrinho(item) {


  let novoLache = {
    nome: item.nome,
    img: item.img,
    valor: item.valor,
  };

  backendCars.push(novoLache);

  localStorage.setItem("backendCars", JSON.stringify(backendCars)) || [];

 window.location.reload()


}
