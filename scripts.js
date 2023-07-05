const formulario = document.getElementById("imc-form");

const userName = document.querySelector("#userName span"); 
const imcNumber = document.querySelector("#imcNumber span");
const imcInfo = document.querySelector("#imcInfo span");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio do formulário

  const name = document.getElementById("name").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  // Realize o cálculo do IMC e exiba os resultados

  const imc = weight / (height * height);
  const classificacao = getClassificacaoIMC(imc);

  //alert(`Nome: ${name}\nIMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
    console.log(name,imc.toFixed(2),classificacao);
    userName.textContent = name;
    imcNumber.textContent = imc.toFixed(2);
    imcInfo.textContent = classificacao;
    // showOrHideResults();
  // Limpe os campos do formulário
  formulario.reset();
});

function getClassificacaoIMC(imc) {
  if (imc < 18.5) {
    return "Baixo peso - Risco de comorbidades: baixo";
  } else if (imc < 25) {
    return "Peso normal - Risco de comorbidades: médio";
  } else if (imc < 30) {
    return "Pré-obeso - Risco de comorbidades: aumentado";
  } else if (imc < 35) {
    return "Obeso 1 - Risco de comorbidades: moderado";
  } else if (imc < 40) {
    return "Obeso 2 - Risco de comorbidades: grave";
  } else {
    return "Obeso 3 - Risco de comorbidades: muito grave";
  }
}


function showOrHideResults() {
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
  }

 