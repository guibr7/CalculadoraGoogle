function limparErro(){
   digitVisor = ''
   digitVisor2 = ''
   cango = ''
   visor.innerHTML = ''
   visor.style.fontFamily = 'Aleo'
   visor.style.fontSize = '50px'
   visor.style.color = '#f8f8f8'
}

let digitVisor = '';
let parentese = '';
let visor = document.querySelector('#visor');

let limpar = document.querySelector('#ac');
let corrigir = document.querySelector('#apagar');
let cango = ''

let fecharParentese = 0
let digitVisor2 = ''

function apagar(){
   if(visor.textContent == 'Erro de formatação' || digitVisor == 'Infinity'){  
      visor.style.fontFamily = 'Aleo'
      visor.style.fontSize = '4.5rem'
      visor.style.color = '#f8f8f8'
      cango = cango.slice(0,-1)
      visor.innerHTML = cango
      digitVisor = digitVisor2.slice(0,-1)
      return
   }
   cango = cango.slice(0,-1)
   digitVisor = digitVisor.slice(0,-1)
   visor.innerHTML = (visor.textContent).slice(0,-1)
}

/* Exibir número no visor [FUNÇÃO PRINCIPAL] */
function inserir(element){ 
   const maxCaractere = 12;
   const textLength = visor.textContent.length;

if (textLength >= maxCaractere) {
   visor.scrollLeft = visor.scrollWidth;
   visor.style.fontSize = '4.5rem'
}

if (textLength >= 14) {
   visor.scrollLeft = visor.scrollWidth;
   visor.style.fontSize = '4rem'
}

   if(visor.textContent == 'Impos. dividir por 0' || visor.textContent == 'Erro de formatação')
   { limparErro() }

   //Só permite inserir - com visor limpo 
   if(visor.textContent === "" && element !== "-" && element !== "(" && !/[\d]/.test(element) )
   { return; }

   const ultimoCarct = visor.textContent[(visor.textContent).length-1] 

   const condic = ( ultimoCarct == '÷' || ultimoCarct == '-' || ultimoCarct == '+' ||
   ultimoCarct == '×')


 const condic2 = ( element == '÷' || element == '-' || element == '+' ||
 element == '×')

   //Não permite inserir multiplicação e divisão após parêntese
   if( element == '×' && ultimoCarct == '(' ){return}
   if( element == '÷' && ultimoCarct == '(' ){return}

   //Não permite inserir sinais sequenciais ( -- ; ++ ; xx ; )
   if( element == '+' && condic == true ){return}
   if( element == '-' && condic == true ){return}
   if( element == '÷' && condic == true ){return}
   if( element == '×' && condic == true ){return}

   if(element == parentese && ( (digitVisor[digitVisor.length -1]) != '/') && ( (digitVisor[digitVisor.length -1]) != '*') && ( (digitVisor[digitVisor.length -1]) != '-')   && ( (digitVisor[digitVisor.length -1]) != '+') && ( (digitVisor[digitVisor.length -1]) != '(')){
      visor.innerHTML+= ")";
      parentese = ')' 
      digitVisor+= ")"
      digitVisor2+= ")"
      fecharParentese = 1
      console.log(digitVisor)
      return
   }

   if(element === '('){ 
      if((visor.textContent[(visor.textContent.length)-1]) != '÷' &&  (visor.textContent[(visor.textContent.length)-1]) != '×' &&  (visor.textContent[(visor.textContent.length)-1]) != '-' &&  (visor.textContent[(visor.textContent.length)-1]) != '+' &&  (visor.textContent != ''))
      {
         digitVisor+= String( '*' )
         digitVisor2+= String( '*' )
      }
      console.log(parentese)
      parentese = element
   }

   /*Formação de sinais no script*/
   if(element === ","){
      visor.innerHTML+= ',';
      digitVisor += '.'
      digitVisor2 += '.'
      cango += '.'
      return
   }

   if(element === '÷'){
      visor.innerHTML+= '÷';
      digitVisor+= '/'
      digitVisor2+= '/'
      cango += '÷'
      return
   }

   if(element === '×'){
      visor.innerHTML+= '×';
      digitVisor+= '*'
      digitVisor2+= '/'
      cango += '×'
      return
   }
   visor.innerHTML+= element
   digitVisor +=  element 
   digitVisor2 +=  element 
   cango+= element
   AdicionouSinal = false
   console.log(digitVisor)
}

//Mostrar resultado na tela
function resultado(){
   const ultimoCarct = visor.textContent[(visor.textContent).length-1] 
   const condic = (ultimoCarct == '×' ||  ultimoCarct == '÷' || ultimoCarct == '-' || ultimoCarct == '+' || ultimoCarct == '(' || ultimoCarct == '%' || ultimoCarct == ',' || visor.textContent[(visor.textContent).length-2] == '(' )

   if(condic == true ){
      visor.style.color = '#FF403C'
      visor.style.fontFamily = 'Roboto'
      visor.style.fontSize = '3.4rem'
      visor.innerHTML = 'Erro de formatação'
   }

   //Se usuário apertar = sem digitar algum valor
   if(digitVisor == '' ){
      visor.innerHTML= '';
      return
   }

   digitVisor = eval(digitVisor)
   console.log(eval(digitVisor))
   visor.innerHTML = digitVisor
   visor.innerHTML = (String(digitVisor).replace('.',','))

   //Quantidade de casas decimais
   if((visor.textContent).length >= 10){
      visor.innerHTML = digitVisor.toFixed(3)
   }

   //Tratamento de divisão por zero
   if(visor.textContent =='Infinity'){
      visor.style.fontFamily = 'Roboto'
      visor.style.fontSize = '3.4rem'
      visor.innerHTML = 'Impos. dividir por 0'
      visor.style.color = '#FF403C'
   }
}

//Limpar visor
limpar.addEventListener('click',function (){
   parentese = '';
   visor.innerHTML = ''
   digitVisor = ''
   digitVisor2 = ''
   cango = ''
   visor.style.fontSize = '5rem'
   }
)