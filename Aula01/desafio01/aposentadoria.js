const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 30;

const somaContribuicao = idade + contribuicao;

console.log(somaContribuicao);

//O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
//Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser
// de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
const homemPodeAposentar = sexo == "M" && contribuicao >= 35 && somaContribuicao >= 95;
const mulherPodeAposentar = sexo == "F" && contribuicao >= 30 && somaContribuicao >= 85;

if( homemPodeAposentar || mulherPodeAposentar){
    console.log(`${nome} pode se aposentar`);
}else{
    console.log(`${nome} não pode se aposentar`);
}