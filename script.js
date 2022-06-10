function calcular(){
   let multi = document.querySelector('#num')
    let tab = document.querySelector('#tabu')
    tab.innerHTML = ''
    if(multi.value.length == 0){
        window.alert('[ERRO] TENTE NOVAMENTE, POR FAVOR')
    }else{
        let n = Number(multi.value)
        for(let c = 1; c<=10; c++){
        let option = window.document.createElement('option')
        option.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(option)
    }}
}