function calcular() {
  const pont = document.getElementById("pontuacao").value;
  const porc = document.getElementById("porcentagem").value;

  let nvl3 = ((100 * pont) / porc).toFixed(2);
  let nvl4 = ((115 * pont) / porc).toFixed(2);
  let nvl3_formatado = parseInt(nvl3);
  let nvl4_formatado = parseInt(nvl4);
  //sempre arredondar para um numero acima caso a % seja um número decimal, evitar problemas com o sistema de pontos original
  if (nvl3 > nvl3_formatado) {
    nvl3_formatado = nvl3_formatado + 1;
  }
  if (nvl4 > nvl4_formatado) {
    nvl4_formatado = nvl4_formatado + 1;
  }
  let calc_nvl3 = nvl3_formatado - pont;
  let calc_nvl4 = nvl4_formatado - pont;

  if (calc_nvl3 < 0) {
    calc_nvl3 =
      "<strong>Nível 3 - " +
      porc +
      "%: </strong>Você está " +
      calc_nvl3 * -1 +
      "p <span>acima</span>.";
  } else if (calc_nvl3 == 0) {
    calc_nvl3 =
      "<strong>Nível 3 - " +
      porc +
      "%: </strong>Você está exatamente com 0p <span>acima</span>.";
  } else {
    calc_nvl3 =
      "<strong>Nível 3 - " +
      porc +
      "%: </strong><span>Falta</span> " +
      calc_nvl3 +
      "p para alcançar.";
  }

  if (calc_nvl4 < 0) {
    calc_nvl4 =
      "<strong>Nível 4 - " +
      porc +
      "%: </strong>Você está " +
      calc_nvl4 * -1 +
      "p <span>acima</span>.";
  } else if (calc_nvl4 == 0) {
    calc_nvl4 =
      "<strong>Nível 4 - " +
      porc +
      "%: </strong>Você está exatamente com 0p <span>acima</span>.";
  } else {
    calc_nvl4 =
      "<strong>Nível 4 - " +
      porc +
      "%: </strong><span>Falta</span> " +
      calc_nvl4 +
      "p para alcançar.";
  }
  if (pont > 0 && porc > 0) {
    document.getElementById("nvl3").innerHTML = calc_nvl3;
    document.getElementById("nvl4").innerHTML = calc_nvl4;
  } else {
    document.getElementById("nvl3").innerHTML = "Entrada inválida";
    document.getElementById("nvl4").innerHTML = "";
  }

  //   exibe_nvl4 = nvl3_formatado-pont;
}
