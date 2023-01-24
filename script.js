let fonte = 50
let rcbrPal = '';
let parents = '';
let visor = document.querySelector('#visor');
let limpar = document.querySelector('#ac');
let corrigir = document.querySelector('#apagar');

function aumentarFonte(){
   fonte+=3.8;
   visor.style.fontSize =  `${fonte}px`
}

function apagar(){
   if((visor.textContent).length>=10 && fonte<50 ){
      aumentarFonte()
   }
   rcbrPal = rcbrPal.slice(0,-1)
   visor.innerHTML = (visor.textContent).slice(0,-1)
}

function diminuirFonte(){
   if(fonte==36){
      return
   }
   fonte-=3.8;
   visor.style.fontSize = `${fonte}px`
   return
}

function diminuirFonte2(){
   fonte+=4.5
   visor.style.fontSize = `${fonte}px`
   return
}

/*Exibir número na tela FUNÇÃO PRINCIPAL*/
function inserir(element){
   if(visor.textContent === "" && element !== "-" && element !== "(" && !/[\d]/.test(element) )
   {
     return;
   }

   const ultimoCarct = visor.textContent[(visor.textContent).length-1] 
   const cond = (ultimoCarct != '×' &&  ultimoCarct != '÷' && ultimoCarct != '-' && ultimoCarct != '+')

   if( element == '×' && cond == false){
      return
   }
   if( element == '÷' && cond == false){
      return
   }
   if( element == '+' && cond == false){
      return
   }
   if( element == '-' && cond == false){
      return
   }

   if(visor.innerHTML =='Impos. dividir por 0'){
      rcbrPal = ''
      visor.innerHTML = ''
      visor.style.fontFamily = 'Aleo'
      visor.style.fontSize = '50px'
      visor.style.color = '#f8f8f8'
   }

   if(fonte>25){ 
      console.log(rcbrPal)

      if((visor.textContent).length>=10 && (visor.textContent).length<30){
         diminuirFonte()
      }

      if(element == parents && ( (rcbrPal[rcbrPal.length -1]) != '/') && ( (rcbrPal[rcbrPal.length -1]) != '*') && ( (rcbrPal[rcbrPal.length -1]) != '-')   && ( (rcbrPal[rcbrPal.length -1]) != '+') && ( (rcbrPal[rcbrPal.length -1]) != '(')){
         visor.innerHTML+= ")";
         parents = ')' 
         rcbrPal+= ")"
         console.log(rcbrPal)
         return
      }

      if(element === '('){ 
         if((visor.textContent[(visor.textContent.length)-1]) != '÷' &&  (visor.textContent[(visor.textContent.length)-1]) != '-' &&  (visor.textContent[(visor.textContent.length)-1]) != '+' &&  (visor.textContent[(visor.textContent.length)-1]) != '×')
         {
            rcbrPal+= String( '*' )
         }
         console.log(parents)
         parents = element
      }

      if(element === ","){
         visor.innerHTML+= ',';
         rcbrPal += '.'
         return
      }

      if(element === '÷'){
         visor.innerHTML+= '÷';
         rcbrPal+= '/'
         return
      }

      if(element === '×'){
         visor.innerHTML+= '×';
         rcbrPal+= '*'
         return
      }

      visor.innerHTML+= element;
      rcbrPal+= String( element ) 
      AdicionouSinal=false
   }
}
/*----------------------------------------------*/
/*Resultado*/
function resultado(){
   if((visor.textContent).length<17){ /* FONTE*/
      visor.style.fontSize = '50px'
   }

   if(rcbrPal == '' ){
      visor.innerHTML= '';
      return
   }

   rcbrPal = eval(rcbrPal)
   console.log(eval(rcbrPal))
   visor.innerHTML = rcbrPal

   if((visor.textContent).length >= 10){
      visor.innerHTML = (visor.textContent).slice(0,11)
      return
   }

   if(visor.innerHTML =='Infinity'){
      visor.style.fontFamily = 'Roboto'
      visor.style.fontSize = '34px'
      visor.innerHTML = 'Impos. dividir por 0'
      visor.style.color = '#FF8C00'
   }
}
/*----------------------------------------------*/
/*Limpar visor*/
limpar.addEventListener('click',function(){
   parents = '';
   visor.innerHTML = ''
   rcbrPal = '';
   fonte=50;
   visor.style.fontSize = '50px'
}
)