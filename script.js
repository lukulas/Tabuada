function multiplicacao(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0){
        window.alert('Por favor, digite um numero!')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
function adicao(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0){
        window.alert('Por favor, digite um numero!')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} + ${c} = ${n+c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}

function subtracao(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0){
        window.alert('Por favor, digite um numero!')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} - ${c} = ${n-c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
