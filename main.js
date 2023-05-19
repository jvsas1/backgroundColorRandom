const colors= ["A","B","C","D","E","F",1,2,3,4,5,6,7,8,9]

    const botao=document.querySelector(".botao")
    botao.addEventListener("click",()=>{ 


        let hex="#"

        for(let i=0;i<6;i++){
            hex+=colors[GerarCor()]

        }

       
        
        const CorAtual=document.querySelector(".colorName")
        
        
        document.body.style.backgroundColor=hex
       
        CorAtual.innerHTML=hex
    })

    function GerarCor(){
        var tamanho=colors.length
        return Math.floor(Math.random()*tamanho)

    }
