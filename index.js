const n1 = Number(Prompt("Digite sua primeira nota: "));
const n2 = Number(Prompt("Digite sua segunda nota: "));
const n3 = Number(Prompt("Digite sua terceira nota: "));
const n4 = Number(Prompt("Digite sua quarta nota: "));

if(n1 < 0 || n1 > 10 ||
   n2 < 0 || n2 > 10 ||
   n3 < 0 || n3 > 10 ||
   n4 < 0 || n4 > 10) {

    alert("por favor digite números entre 0 e 10");

} else {

    const media = (n1 + n2 + n3 + n4) / 4; 

    let resultado;
    if (media < 5){
        resultado = "reprovado"
    }else if (resultado < 6){
        resultado = "recuperação"
    }else{
        resultado = "aprovado"
    }

    alert ('Sua média final foi: ${media} e o seu resultado é: ${resultado}');

}