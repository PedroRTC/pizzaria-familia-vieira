

function fetchJson(url){
return  fetch(url).then((resp)=>{
  return  resp.json()
  })
}

function produtos(){
return fetchJson(`cardapio.json`)
}

