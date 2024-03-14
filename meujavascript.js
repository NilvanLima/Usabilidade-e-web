window.alert("Seja bem-vindo/a!");

function calculadora() {
  var valor1 = parseInt(document.getElementById("ivalor1").value);
  var valor2 = parseInt(document.getElementById("ivalor2").value);

  var operacao = document.querySelector('input[name=calc]:checked').value;

  if(operacao == 'soma'){
    var resposta = valor1 + valor2;
    window.alert("A soma é " + resposta);
  }
  if(operacao == 'subtracao'){
    var resposta = valor1 - valor2;
    window.alert("A subtração é " + resposta);
  }
  if(operacao == 'multiplicacao'){
    var resposta = valor1 * valor2;
    window.alert("A multiplicação é " + resposta);
  }
  if(operacao == 'divisao'){
    var resposta = valor1 / valor2;
    window.alert("A divisão é " + resposta);
  }
}
