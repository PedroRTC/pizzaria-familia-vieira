

function fetchJson(url){
return  fetch(url).then((resp)=>{
  return  resp.json()
  })
}

function produtos(){
return fetchJson("http://127.0.0.1:5500/cardapio.json")
}

