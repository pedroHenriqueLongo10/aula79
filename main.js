arrayNomes = [];

function submit() 
{
    var nome1 = document.getElementById("aluno1").value;
    var nome2 = document.getElementById("aluno2").value;
    var nome3 = document.getElementById("aluno3").value;
    var nome4 = document.getElementById("aluno4").value;

        arrayNomes.push(nome1); /* Explicação: a função .push adiciona uma variável dentro da array */
        arrayNomes.push(nome2);
        arrayNomes.push(nome3);
        arrayNomes.push(nome4);

        console.log(arrayNomes); 

        document.getElementById("displayName").innerHTML = arrayNomes;
        document.getElementById("enviar").style.display = "none";
        document.getElementById("organizar").style.display = "inline-block";

}

function sorting()
{
    arrayNomes.sort(); 
console.log(arrayNomes);
document.getElementById("displayName").innerHTML =arrayNomes ; 
}