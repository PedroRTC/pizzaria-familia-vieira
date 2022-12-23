
let containerCarrinho=document.querySelector(".containerCarrinho")
let containerPizza = document.querySelector("#containerPizza");
let containerEsfiha = document.querySelector("#containerEsfiha");
let containerBedidas = document.querySelector("#containerBebidas");
let containerPorcoes = document.querySelector("#containerPorcoes");
let containerProdutos = document.querySelectorAll(".containerProdutos");
let setaEsquerda = document.querySelectorAll(".setaEsquerda");
let setaDireita = document.querySelectorAll(".setaDireita");
let qntPro = document.querySelector(".qntPro");
let contCars = document.querySelector(".contCars");
let total=document.querySelector(".total")

let todosProdutos = [];
let backendCars = [];
let backendTotal=0
let backendQnt = 0;


backendCars = JSON.parse(localStorage.getItem("backendCars")) || [];
backendTotal = JSON.parse(localStorage.getItem("backendTotal")) || 0;
backendQnt = JSON.parse(localStorage.getItem("backendQnt")) || 0;
let arr=Number(backendTotal)
total.textContent=arr.toFixed(2)
async function init() {
  try {
    todosProdutos = await produtos();

    geraProdutos();
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

    cars.addEventListener("click", () => addBackendCars(item));

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

    cars.addEventListener("click", () => addBackendCars(item));
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

    cars.addEventListener("click", () => addBackendCars(item));
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
    cars.addEventListener("click", () => addBackendCars(item));

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

function addBackendCars(item) {
  let v=backendTotal = JSON.parse(localStorage.getItem("backendTotal"))
  backendQnt++;
  backendTotal=item.valor

  if(v!=null){
    let totalArre=Number(v)+Number(backendTotal)
    backendTotal=totalArre.toFixed(2)
  }
  qntPro.textContent = backendQnt;
  contCars.textContent = backendQnt;
  let novoLache = {
    nome: item.nome,
    img: item.img,
    valor: item.valor,
  };

  backendCars.push(novoLache);

  localStorage.setItem("backendCars", JSON.stringify(backendCars)) || [];
  localStorage.setItem("backendQnt", JSON.stringify(backendQnt));
  localStorage.setItem("backendTotal", JSON.stringify(backendTotal));
  loadingSite()
  setTimeout(() => {
    location.reload();
  }, 2000);
  
}



function armazenaLanchesCars() {
  qntPro.textContent = backendQnt;
  contCars.textContent = backendQnt;
  backendCars.map((car) => {
    let lanches = document.createElement("section");
    let inforLanches = document.createElement("section");
    let imgLanches = document.createElement("img");
    let nomeLanches = document.createElement("p");
    let valorLanches = document.createElement("p");
    let qntLanches = document.createElement("input");
    let buttonExcluir = document.createElement("button");

    qntLanches.setAttribute("type", "number");
    qntLanches.setAttribute("min", "1");
    qntLanches.setAttribute("value", "1");
    buttonExcluir.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

    lanches.classList.add("laches");
    inforLanches.classList.add("inforLaches");
    imgLanches.classList.add("imgLaches");
    nomeLanches.classList.add("nomeLaches");
    valorLanches.classList.add("valorLaches");
    qntLanches.classList.add("qntLanches");
    buttonExcluir.classList.add("buttonExcluir");

    lanches.appendChild(imgLanches);
    lanches.appendChild(inforLanches);

    inforLanches.appendChild(nomeLanches);
    inforLanches.appendChild(valorLanches);
    inforLanches.appendChild(qntLanches);

    containerCarrinho.appendChild(lanches);

    imgLanches.src = car.img;
    nomeLanches.textContent = car.nome;
    valorLanches.textContent = car.valor;

    lanches.appendChild(imgLanches);
    lanches.appendChild(inforLanches);
    lanches.appendChild(buttonExcluir);

    inforLanches.appendChild(nomeLanches);
    inforLanches.appendChild(valorLanches);
    inforLanches.appendChild(qntLanches);

    containerCarrinho.appendChild(lanches);

 

    qntLanches.addEventListener("input", ()=>{
       
      let r=Number(car.valor)*qntLanches.value
     let valorLancheArre=r.toFixed(2)



      valorLanches.innerHTML=`${valorLancheArre}`

      let v=document.querySelectorAll(".valorLaches")
     
      


     
    })

   

    buttonExcluir.addEventListener("click", () =>
      excluirLanchesCars(car, lanches)
    );

    
   
  });
}
armazenaLanchesCars();



function excluirLanchesCars(car, lanches) {
  containerCarrinho.removeChild(lanches);
  let index = backendCars.indexOf(car);

  if (index > -1) {
    backendCars.splice(index, 1);
  }

  localStorage.removeItem("backendCars");
  localStorage.removeItem("backendQnt");

  backendQnt--;
  qntPro.textContent = backendQnt;
  contCars.textContent = backendQnt;

  let arr=Number(total.textContent)-car.valor
  total.textContent=arr.toFixed(2)
  localStorage.removeItem("backendTotal")

  localStorage.setItem("backendCars", JSON.stringify(backendCars)) || [];
  localStorage.setItem("backendQnt", JSON.stringify(backendQnt)) || 0;
  localStorage.setItem("backendTotal", JSON.stringify(arr.toFixed(2)));
}


function loadingSite(){
  let containerLoading=document.createElement("div")
  let loading=document.createElement("div")

  containerLoading.classList.add("containerLoading")
  loading.classList.add("loading")
  containerLoading.appendChild(loading)
  document.body.appendChild(containerLoading)
}

