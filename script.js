let fonte = 50
let digitVisor = '';
let parentese = '';
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
   digitVisor = digitVisor.slice(0,-1)
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

/*Exibir número no visor [FUNÇÃO PRINCIPAL]*/

function inserir(element){
   if(visor.textContent === "" && element !== "-" && element !== "(" && !/[\d]/.test(element) )
   {
     return;
   }
   /*Não permitir inserir sinais sequenciais ( -- ; ++ ; xx ; )*/
   const ultimoCarct = visor.textContent[(visor.textContent).length-1] 
   const condic = (ultimoCarct != '×' &&  ultimoCarct != '÷' && ultimoCarct != '-' && ultimoCarct != '+')

   if( element == '×' && condic == false){
      return
   }
   if( element == '÷' && condic == false){
      return
   }
   if( element == '+' && condic == false){
      return
   }
   if( element == '-' && condic == false){
      return
   }
   /*Divisão por 0*/
   if(visor.textContent == 'Impos. dividir por 0' || visor.textContent == 'Erro de formatação'){
      digitVisor = ''
      visor.innerHTML = ''
      visor.style.fontFamily = 'Aleo'
      visor.style.fontSize = '50px'
      visor.style.color = '#f8f8f8'
   }

   if(fonte>25){ 
      

      if((visor.textContent).length>=10 && (visor.textContent).length<30){
         diminuirFonte()
      }

      if(element == parentese && ( (digitVisor[digitVisor.length -1]) != '/') && ( (digitVisor[digitVisor.length -1]) != '*') && ( (digitVisor[digitVisor.length -1]) != '-')   && ( (digitVisor[digitVisor.length -1]) != '+') && ( (digitVisor[digitVisor.length -1]) != '(')){
         visor.innerHTML+= ")";
         parentese = ')' 
         digitVisor+= ")"
         console.log(digitVisor)
         return
      }

      if(element === '('){ 
         if((visor.textContent[(visor.textContent.length)-1]) != '÷' &&  (visor.textContent[(visor.textContent.length)-1]) != '×' &&  (visor.textContent[(visor.textContent.length)-1]) != '-' &&  (visor.textContent[(visor.textContent.length)-1]) != '+' &&  (visor.textContent != ''))
         {
            digitVisor+= String( '*' )
         }
         console.log(parentese)
         parentese = element
      }

      if(element === ","){
         visor.innerHTML+= ',';
         digitVisor += '.'
         return
      }

      if(element === '÷'){
         visor.innerHTML+= '÷';
         digitVisor+= '/'
         return
      }

      if(element === '×'){
         visor.innerHTML+= '×';
         digitVisor+= '*'
         return
      }

      visor.innerHTML+= element;
      digitVisor += String( element ) 
      AdicionouSinal = false
      console.log(digitVisor)
   }
}

/*Resultado*/
function resultado(){
   if((visor.textContent).length<17){ /* FONTE*/
      visor.style.fontSize = '50px'
   }

   if(digitVisor == '' ){
      visor.innerHTML= '';
      return
   }

   if(digitVisor[0] == '(' && digitVisor[1] == '*' ){
      visor.style.color = '#FF403C'
      visor.style.fontFamily = 'Roboto'
      visor.style.fontSize = '34px'
      visor.innerHTML = 'Erro de formatação'
      
   }

   digitVisor = eval(digitVisor)
   console.log(eval(digitVisor))
   visor.innerHTML = digitVisor

   if((visor.textContent).length >= 10){
      visor.innerHTML = (visor.textContent).slice(0,11)
      return
   }

   if(visor.textContent =='Infinity'){
      visor.style.fontFamily = 'Roboto'
      visor.style.fontSize = '34px'
      visor.innerHTML = 'Impos. dividir por 0'
      visor.style.color = '#FF403C'
   }
}

/*Limpar visor*/
limpar.addEventListener('click',function(){
   parentese = '';
   visor.innerHTML = ''
   digitVisor = '';
   fonte=50;
   visor.style.fontSize = '50px'
}
)