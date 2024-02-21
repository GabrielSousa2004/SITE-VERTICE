const comunicacao = document.getElementsByName('squareCard')
const divPrincipal = document.getElementById('squaresBeneficios')
const divDesc = document.getElementById('squaresBeneficiosDesc')
const setaDiv = document.getElementById('setaArea')
const descDiv = document.getElementById('descArea')
const setaBtn = document.getElementById('btnVolta')
const descricao = document.getElementById('descricao')
const btnVolta2 = document.getElementById('nossosBeneficios')
console.log(window.innerWidth)
if(window.innerWidth < 1000){
    comunicacao[0].addEventListener("click", ()=>{
        divPrincipal.style.display= "none";
        divDesc.style.display= "flex";
        setaDiv.style.display= "flex";
        descDiv.style.display = "flex";
        descricao.innerHTML = "Nosso método garante uma boa comunicação com nossos clientes, de modo com que os mesmos obtenham um maior controle sobre o produto final" 

    })
    comunicacao[1].addEventListener("click", ()=>{
        divPrincipal.style.display= "none";
        divDesc.style.display= "flex";
        setaDiv.style.display= "flex";
        descDiv.style.display = "flex";
        descricao.style.fontSize = "15px !important"
        descricao.innerHTML = "Por sermos uma StartUp, tentamos manter um custo acessível para nossos clientes, de forma com que possamos mostrar nosso potencial, trazendo beneficios ao cliente" 

    })
    comunicacao[2].addEventListener("click", ()=>{
        divPrincipal.style.display= "none";
        divDesc.style.display= "flex";
        setaDiv.style.display= "flex";
        descDiv.style.display = "flex";
        descricao.innerHTML = "Garantimos, na fase final de desenvolvimento uma equipe preparada para instruir, se preciso como fazer o uso do seu software" 

    })
    comunicacao[3].addEventListener("click", ()=>{
        divPrincipal.style.display= "none";
        divDesc.style.display= "flex";
        setaDiv.style.display= "flex";
        descDiv.style.display = "flex";
        descricao.innerHTML = "Oferecemos diversas opções para nossos clientes, sobre tecnologias, plataformas e acessibilidade." 

    })
    setaBtn.addEventListener("click", ()=>{
        divDesc.style.display= "none";
        divPrincipal.style.animation = "showSquares 1s"
        divPrincipal.style.display = "flex";
    })

    btnVolta2.addEventListener("click", ()=>{
        if(divDesc.style.display!="none" && divPrincipal.style.display=="none"){
            divDesc.style.display = "none"
            divPrincipal.style.animation = "showSquares 1s"
            divPrincipal.style.display = "flex";
        }else{

        }
    })


}