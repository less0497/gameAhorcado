const buttonStar =document.querySelector(".front__button__start")
const front =document.querySelector(".front")
const play =document.querySelector(".play")
const word =document.querySelector(".word")
const face =document.querySelector(".imgPlay__face")
const body =document.querySelector(".imgPlay__body")
const armOne =document.querySelector(".imgPlay__arm1")
const armTwo =document.querySelector(".imgPlay__arm2")
const legOne =document.querySelector(".imgPlay__leg1")
const legTwo =document.querySelector(".imgPlay__leg2")
const keyboardPants=document.querySelector(".container")
const win=document.querySelector(".win")
const lose=document.querySelector(".lose")
const loseText=document.querySelector(".lose_text")
const idLetras=document.getElementById("letras");    


function clickStart(){ 
    front.classList.add("inactive")
    play.classList.remove("inactive")
    chosseWord()
}
function clickChosse(){
    front.classList.add("inactive")
    play.classList.remove("inactive")
    chosseWord()
}
function chosseWord(){
    word.value = wordSelect.replace(/[A-Z]/gm, "_" )
}

// RANDOM WORD
const listWord= ["MUGIDOS","ABATIR","ANCAS","REACIO","MANOJOS","CERDAS","PIZQUITAS","ONDEANTES","RESPLANDOR","SUMIDOS","LABRA","GOBIERNO","FUERZA","FAENA","ALMOHADA","RAFAGA","ARRASTRABA","HORIZONTE","ATRAVESO","CAMPEONA","CANICAS","TIMIDA","SUSURROS","ORTOGRAFIA","VENCEDORA","AJEDREZ","CONCIERTO","JARDIN","RAZON","ANGULO","CONMOCION","INTELIGENCIA","RAPIDO","CORAJE","DIRECCION","ESPLENDIDO","MILIMETROS","PRECISION","ANAQUEL","PEGAR","PEGUE","AHOGAR","AHOGUE","JUGAR","JUGUE","HURACAN","GRAFICA","BARRA","UTILES","PERIODO","OCEANOS","CICLON","CALIDO","HUMEDO","FLUYE","SUPERFICIE","ENERGIA","FUERZA","DIECINUEVE","ALFABETICO","SATELITE","PASILLOS","CONCENTRARSE","EQUIPO","MAQUINA","CIUDAD","CONSERJE","OBSERVO","RAPIDO","SUSTANTIVO","ADJETIVO","CONJUNCION","ORACION","MAYORIA","VAIVEN","VEINTICINCO","GENERO","NUMERO","MAYUSCULA","VOY","COLECCION","VIVENCIAS","PARRAFO","OCASION","HOYO","MATEMATICAS","QUIZA","HICISTE","COSTUMBRES","BANQUETES","MAXIMO","HIZO","HACE","QUISO","QUIERO","IBA","VERBO","HAY"]

const wordSelect = listWord[Math.floor(Math.random() * 100)];
loseText.innerText = "¡PERDISTE! \nLA PALABRA ES: " + wordSelect;
//KEYBOARD 
const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// show word
const mostrarLetras = listadoLetras => {
    idLetras.innerHTML="";
    // add word
    listadoLetras.split('').map(el => {
        let span=document.createElement("span");
        span.addEventListener("click", WordCircle);
        span.addEventListener("click", key);
        span.innerText=el; 
        idLetras.appendChild(span);
    });
}
// print a letter or part of body 
const bodyAhorcado = [face,body,armOne,armTwo,legOne,legTwo]
ahorcado = []
wordPlay = []
function key(e) {
    const tecla=this.innerText; 
    if (!wordSelect.includes(tecla)) {
        printBody();
    }
    else {
    // print word in text area 
        const wordChosse= wordPlay.push(tecla)
        const regEx = wordPlay.join("")
        let pattern = new RegExp('\[^' + regEx + "]", 'ig');
        word.value = wordSelect.replace(pattern,"_")
        !word.value.includes("_") ? win.classList.remove("inactive") & keyboardPants.classList.add("inactive") : word.value 
    }
}
function WordCircle(){
    this.classList.add("wordCircle")
}
// print part of body
function printBody(){
    if (ahorcado.length==5) {
        legTwo.classList.remove("inactive")
        keyboardPants.classList.add("inactive")
        lose.classList.remove("inactive")
        // word.value=wordSelect   
    }
    else{ 
        ahorcado.push(bodyAhorcado[0])
        return bodyAhorcado.map((x) => {
            if(ahorcado.includes(x)) {
                bodyAhorcado.shift()
                return x.classList.remove("inactive") }
        }
        )
    } 
}

// button home
function buttonWinLose(){
    location.reload()

}

console.log(wordSelect)
mostrarLetras(abecedario);







