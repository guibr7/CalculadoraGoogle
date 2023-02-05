function limparErro(){
   digitVisor = ''
   digitVisor2 = ''
   cango = ''
   visor.innerHTML = ''
   visor.style.fontFamily = 'Aleo'
   visor.style.fontSize = '50px'
   visor.style.color = '#f8f8f8'
}

let fonte = 50
let digitVisor = '';
let parentese = '';
let visor = document.querySelector('#visor');

let limpar = document.querySelector('#ac');
let corrigir = document.querySelector('#apagar');
let cango = ''

let fecharParentese = 0
let digitVisor2 = ''

function aumentarFonte(){
fonte+=3.8;
visor.style.fontSize =  `${fonte}px`
}

function apagar(){
if((visor.textContent).length>=10 && fonte<50 ){
   aumentarFonte()}

if(visor.textContent == 'Erro de formatação' || digitVisor == 'Infinity')
{  
   visor.style.fontFamily = 'Aleo'
   visor.style.fontSize = '50px'
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

function diminuirFonte(){
if(fonte==36){ return }
fonte-=3.8;
visor.style.fontSize = `${fonte}px`
return
}

/*Resultado com fonte normal em operações grandes*/
function diminuirFonte2(){
fonte+=4.5
visor.style.fontSize = `${fonte}px`
return
}

/* Exibir número no visor [FUNÇÃO PRINCIPAL] */
function inserir(element){

if(visor.textContent == 'Impos. dividir por 0' || visor.textContent == 'Erro de formatação')
{ limparErro() }

/* Só permite inserir - com visor limpo */
if(visor.textContent === "" && element !== "-" && element !== "(" && !/[\d]/.test(element) )
{ return; }

/*Não permitir inserir sinais sequenciais ( -- ; ++ ; xx ; )*/
const ultimoCarct = visor.textContent[(visor.textContent).length-1] 
const condic = (ultimoCarct != '×' &&  ultimoCarct != '÷' && ultimoCarct != '-' && ultimoCarct != '+')

if( element == '×' && condic == false){return}
if( element == '÷' && condic == false){return}
if( element == '+' && condic == false){return}
if( element == '-' && condic == false){return}

if(fonte>25){ 

   if((visor.textContent).length>=10 && (visor.textContent).length<30)
   {diminuirFonte()}

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
}

/*Resultado*/
function resultado(){

const ultimoCarct = visor.textContent[(visor.textContent).length-1] 
const condic = (ultimoCarct == '×' ||  ultimoCarct == '÷' || ultimoCarct == '-' || ultimoCarct == '+' || ultimoCarct == '(' || ultimoCarct == '%' || ultimoCarct == ',' || visor.textContent[(visor.textContent).length-2] == '(' )

if(condic == true ){
   visor.style.color = '#FF403C'
   visor.style.fontFamily = 'Roboto'
   visor.style.fontSize = '34px'
   visor.innerHTML = 'Erro de formatação'
}

if((visor.textContent).length<17){ /* FONTE*/
   visor.style.fontSize = '50px'
}

if(digitVisor == '' ){
   visor.innerHTML= '';
   return
}

digitVisor = eval(digitVisor)
console.log(eval(digitVisor))
visor.innerHTML = digitVisor
visor.innerHTML = (String(digitVisor).replace('.',','))

if((visor.textContent).length >= 10){
   visor.innerHTML = digitVisor.toFixed(6)
}

if(visor.textContent =='Infinity'){
   visor.style.fontFamily = 'Roboto'
   visor.style.fontSize = '34px'
   visor.innerHTML = 'Impos. dividir por 0'
   visor.style.color = '#FF403C'
}
}

/*Limpar visor*/
limpar.addEventListener('click',function (){
parentese = '';
visor.innerHTML = ''
digitVisor = ''
digitVisor2 = ''

cango = ''
fonte=50;
visor.style.fontSize = '50px'
}
)