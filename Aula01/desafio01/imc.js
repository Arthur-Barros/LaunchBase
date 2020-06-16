const nome = "Arthur";
const peso = 90;
const altura = 1.88;
const sexo = "Masculino";


const imc = peso / (altura * altura);

console.log("esse é o " + imc);

if(imc >= 30){
    console.log("Arthur vocé está cima do peso");
}else{
    console.log("Arthur você não está acima do peso");
}
