function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var btn_contar = window.document.getElementById('btn_contar')
    var btn_tab = window.document.getElementById('btn_tab')
    var btn_fin = window.document.getElementById('btn_fin')
    var btn_add = window.document.getElementById('btn_add')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <= 12){
        // dia
        img.src = 'images/foto-manha.png'
        document.body.style.background = '#d2c097'
        btn_contar.style.background = 'linear-gradient(90deg, #e8d9b5, #b8a478)';
        btn_tab.style.background = 'linear-gradient(90deg, #e8d9b5, #b8a478)';
        btn_add.style.background = 'linear-gradient(90deg, #e8d9b5, #b8a478)';
        btn_fin.style.background = 'linear-gradient(90deg, #e8d9b5, #b8a478)';
    }
    else if (hora >= 12 && hora <= 18){
        // tarde
        img.src = 'images/foto-tarde.png'
        document.body.style.background = '#f59126'
        btn_contar.style.background = 'linear-gradient(90deg, #f8a839, #fcb86b)';
        btn_tab.style.background = 'linear-gradient(90deg, #f8a839, #fcb86b)';
        btn_add.style.background = 'linear-gradient(90deg, #f8a839, #fcb86b)';
        btn_fin.style.background = 'linear-gradient(90deg, #f8a839, #fcb86b)';
    }   
    else{
        // noite
        img.src = 'images/foto-noite.png'
        document.body.style.background = '#1c3a5d'
        btn_tab.style.background = 'linear-gradient(90deg, #2e4e6f, #5a7d93)';
        btn_contar.style.background = 'linear-gradient(90deg, #2e4e6f, #5a7d93)';
        btn_add.style.background = 'linear-gradient(90deg, #2e4e6f, #5a7d93)';
        btn_fin.style.background = 'linear-gradient(90deg, #2e4e6f, #5a7d93)';
    }
}

function contar(){
    let inicio = document.getElementById('txt_inicio')
    let fim = document.getElementById('txt_fim')
    let passo = document.getElementById('txt_passo')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossível contar! Há dados faltando'
        //window.alert('[ERRO] Faltam dados!')
    }
    else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0 ){
            window.alert('Passo Inválido! Considerando PASSO = 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c+=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else{
            for(c = i; c >= f; c-=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}

function tabuada(){
    let num = document.getElementById('txt_num')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favor, Digite um número!')
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}
