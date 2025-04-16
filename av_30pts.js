var nome_usuario = "Iasmin" 
var idade = 18 
var cidade = "valença"
var estudando = true 

console.log("Meu nome é: " + nome_usuario)
console.log("Tenho " + idade + " anos")
console.log("Moro em " + cidade)
console.log(estudando)


var idade = 13

if (idade >=13) {
    console.log("Acesso liberado a plataforma!");
} else {
    console.log("Você ainda não tem idade suficiente para participar.")
}

function saudacao(nome,cidade) {
    console.log ("Olá, " + nome +"! Seja bem vindo(a) à nossa plataforma. Vejo que você é de " + cidade + "!");
}

saudacao("Iasmin","Valença")


function CalcularMedia(nota1,nota2,nota3) {
    var media = nota1 + nota2 + nota3 / 3 
    return media;
}

var nota = CalcularMedia(3,2,1);
console.log("A média do aluno é: " + nota);


if (nota >= 7) {
    console.log("Desempenho bom!")
} else {
    console.log("É necessário melhorar.")
}















