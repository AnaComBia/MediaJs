
const n1 = Number (prompt("Digite sua primeira nota: "));

if(isNaN(n1)||
   n1 < 0 || n1 > 10){

    alert("por favor digite números entre 0 e 10");

}else {
    return n1;
} 
    
const n2 = Number (prompt("Digite sua segunda nota: "));

if(isNaN(n2)||
   n2 < 0 || n2 > 10){

    alert("por favor digite números entre 0 e 10");

}

const n3 = Number (prompt("Digite sua terceira nota: "));

if(isNaN(n3)||
   n3 < 0 || n3 > 10){

    alert("por favor digite números entre 0 e 10");

}

const n4 = Number (prompt("Digite sua quarta nota: "));
if(isNaN(n4)||
   n4 < 0 || n4 > 10){

    alert("por favor digite números entre 0 e 10");

}

else {

    const media = (n1 + n2 + n3 + n4) / 4; 

    let resultado;
    if (media < 5){
        resultado = "reprovado"
    }else if (resultado < 6){
        resultado = "recuperação"
    }else{
        resultado = "aprovado"
    }

    alert (`Sua média final foi: ${media} e o seu resultado é: ${resultado}`);


}