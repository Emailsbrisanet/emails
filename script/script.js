const lideres = [
  {
    nome: "victor_braz",
    email: "joao.braz@grupobrisanet.com.br",
    supervisor: "rodrigogurgel@grupobrisanet.com.br",
    assistenteadm: "pamelaleticia@grupobrisanet.com.br",
  },
  {
    nome: "luana_souza",
    email: "luana.luana@grupobrisanet.com.br",
    supervisor: "rodrigogurgel@grupobrisanet.com.br",
    assistenteadm: "pamelaleticia@grupobrisanet.com.br",
  },
  {
    nome: "matheus_pereira",
    email: "matheus.pereira@grupobrisanet.com.br",
    supervisor: "klebson.magalhaes@grupobrisanet.com.br",
    assistenteadm: "pamelaleticia@grupobrisanet.com.br",
  },
  {
    nome: "geraldo_filho",
    email: "geraldo.filho@grupobrisanet.com.br",
    supervisor: "rodrigogurgel@grupobrisanet.com.br",
    assistenteadm: "pamelaleticia@grupobrisanet.com.br",
  },
  {
    nome: "joao_carlos",
    email: "joao.nogueira@grupobrisanet.com.br",
    supervisor: "emanuelrolim@grupobrisanet.com.br",
    assistenteadm: "jennyferrakelly@grupobrisanet.com.br",
  },
  {
    nome: "euda_naelia",
    email: "euda.naelia@grupobrisanet.com.br ",
    supervisor: "emanuelrolim@grupobrisanet.com.br",
    assistenteadm: "jennyferrakelly@grupobrisanet.com.br",
  },
  {
    nome: "juan_ferreira",
    email: "juan.ferreira@grupobrisanet.com.br",
    supervisor: "emanuelrolim@grupobrisanet.com.br",
    assistenteadm: "jennyferrakelly@grupobrisanet.com.br",
  },
  {
    nome: "lianzyo_vinicios",
    email: "vinicios.costa@grupobrisanet.com.br",
    supervisor: "franciscoleandro@grupobrisanet.com.br",
    assistenteadm: "jennyferrakelly@grupobrisanet.com.br",
  },
  {
    nome: "jose_tiago",
    email: "jtiago.silva@grupobrisanet.com.br",
    supervisor: "franciscoleandro@grupobrisanet.com.br",
    assistenteadm: "jennyferrakelly@grupobrisanet.com.br",
  },
  {
    nome: "victor_kennedy",
    email: "victor.kennedy@grupobrisanet.com.br",
    supervisor: "franciscoleandro@grupobrisanet.com.br",
    assistenteadm: "jennyferrakelly@grupobrisanet.com.br",
  },
  {
    nome: "sebastiao_aquino",
    email: "sebastiao.aquino@grupobrisanet.com.br",
    supervisor: "fagnerfreitas@grupobrisanet.com.br",
    assistenteadm: "jennyferrakelly@grupobrisanet.com.br",
  },
  //   11 lideres
];
const suportes = [
  { nome: "sup_receptivo", email: "suportereceptivo@grupobrisanet.com.br" },
  { nome: "sup_digital", email: "suporte-digital@grupobrisanet.com.br" },
  { nome: "sup_ativo", email: "suporte-ativo@grupobrisanet.com.br" },
];
// const supervisores = [
//   { nome: "Rodrigo Gurgel", email: "rodrigogurgel@grupobrisanet.com.br" },
//   { nome: "Klebson Davi", email: "klebson.magalhaes@grupobrisanet.com.br" },
//   { nome: "Emanuel Rolim", email: "emanuelrolim@grupobrisanet.com.br" },
//   { nome: "Emanuel Rolim", email: "franciscoleandro@grupobrisanet.com.br" },
// ];

function responsaveis() {
  const texto_modal = document.getElementById("texto_modal");
  const lider = document.getElementById("lider").value;
  const motivo = document.getElementById("motivo").value;
  //responsáveis
  let email_lider;
  let email_supervisor;
  let email_assistenteadm;
  let checkbox = document.getElementById("marcar_gestor");
  //links
  let gestores_externos =
    "https://docs.google.com/spreadsheets/d/108CeKc84WUCiP0Np6F8htHgwy7Y37jqlCq24LC0Y6no/edit#gid=607412012";
  let agendadores_instalacao =
    "https://docs.google.com/spreadsheets/d/1jS5o5Rn8NZhR_0SCret_70bSQBkfRlifCxCijPRGluo/edit#gid=1513687005";
  let agendadores_reparo =
    "https://docs.google.com/spreadsheets/d/1rrEh8qXBXzyjemZ2cR2wqOzdZsnAJY8wfUM_jVuEl6Q/edit#gid=1004202744";
  //abaixo emails com o supervisor e sem
  let com_supervisor;
  let sem_supervisor;
  //header do modal
  let header_modal = document.getElementById("exampleModalLabel");
  let link = document.getElementById("link");
  let observacao = document.getElementById("observacao");
  //buscar email do lider
  for (var i = 0; i < lideres.length; i++) {
    if (lideres[i].nome == lider) {
      email_lider = lideres[i].email;
      break;
    }
  }
  //buscar email do supervisor
  for (var i = 0; i < lideres.length; i++) {
    if (lideres[i].nome == lider) {
      email_supervisor = lideres[i].supervisor;
      break;
    }
  }
  //encontrar assistente adm
  for (let i = 0; i < lideres.length; i++) {
    if (lideres[i].nome == lider) {
      email_assistenteadm = lideres[i].assistenteadm;
      break;
    }
  }
  document.getElementById("sucesso").classList.add("escondido");
  document.getElementById("texto_resposaveis").innerHTML = "";
  document.getElementById("exampleModalLabel").innerHTML = "";
  if (lider != "") {
    com_supervisor =
      "<ul class='ul_script'><li>" +
      email_lider +
      " </li><li>" +
      email_supervisor +
      " </li><li>" +
      suportes[0].email +
      " </li><li>" +
      suportes[1].email +
      " </li><li>" +
      suportes[2].email +
      " </li>";

    sem_supervisor =
      "<ul class='ul_script'><li>" +
      email_lider +
      " </li><li>" +
      suportes[0].email +
      " </li><li>" +
      suportes[1].email +
      " </li><li>" +
      suportes[2].email +
      " </li>";
    if (checkbox.checked) {
      switch (motivo) {
        case "rota":
          header_modal.innerHTML = "Rota inoperante fora do prazo";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>imoc@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul> <br/>";
          observacao.innerHTML =
            "OBS: Não esqueça de anexar o chamado do IMOC no email.";
          break;
        case "janelas_indisponiveis":
          header_modal.innerHTML = "Janelas indisponíveis";
          texto_modal.innerHTML = com_supervisor + "</ul>";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          observacao.innerHTML =
            "OBS: Não esqueça de marcar o gestor de reparo responsável acessando o link abaixo.";
          break;

        case "erro_coordenadas":
          header_modal.innerHTML = "Erro de coordenadas";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>isabelaqueiroz@grupobrisanet.com.br </li>" +
            "<li>cleudo.chaves@grupobrisanet.com.br </li>" +
            "<li>jucileide.aquino@grupobrisanet.com.br </li>" +
            "<li>rosariofeitosa@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML =
            "OBS: Perguntar sempre o endereço do comp. de residência ao cliente. <br/> Caso o endereço esteja de acordo com o sistema, basta marcar apenas o(a) líder, os suportes e Rosário.";
          link.innerHTML = "";
          break;

        case "reparo_fora":
          header_modal.innerHTML = "Cobrança de reparo fora do prazo";
          texto_modal.innerHTML = com_supervisor + "</ul>";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a> <br/><a class='link' href = " +
            agendadores_reparo +
            " target='_BLANK'>Agendadores de reparo</a>";
          observacao.innerHTML =
            "OBS: Não esqueça de marcar o gestor de reparo responsável e os agendadores acessando os links abaixo.";
          break;

        case "instalacao_fora":
          header_modal.innerHTML = "Cobrança de instalação fora do prazo";
          texto_modal.innerHTML = com_supervisor + "</ul>";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a> <br/><a class='link' href = " +
            agendadores_instalacao +
            " target='_BLANK'>Agendadores de instalação</a>";
          observacao.innerHTML =
            "OBS: Não esqueça de marcar o gestor de reparo responsável e os agendadores acessando os links abaixo.";
          break;
        case "reclamacao_instalacao":
          header_modal.innerHTML = "Reclamação de instalação / conecta+";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>gestaodareclamacao@grupobrisanet.com.br </li>" +
            "<li>andrelma@grupobrisanet.com.br </li>" +
            "<li>flaviapaulino@grupobrisanet.com.br </li>" +
            "<li>qualidade@grupobrisanet.com.br </li> </ul>";
          observacao.innerHTML =
            "OBS: Não esquecer de marcar o gestor de instalação responsável acessando o link abaixo.";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          break;

        case "Reclamacao_reparo":
          header_modal.innerHTML =
            "Reclamação de reparo / alteração de endereço";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>gestaodareclamacao@grupobrisanet.com.br </li>" +
            "<li>andrelma@grupobrisanet.com.br </li>" +
            "<li>flaviapaulino@grupobrisanet.com.br </li>" +
            "<li>qualidade@grupobrisanet.com.br </li> </ul>";

          observacao.innerHTML =
            "OBS: Não esquecer de marcar o gestor de reparo responsável acessando o link abaixo.";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          break;

        case "reclamacao_recolhimento":
          header_modal.innerHTML = "Reclamação de recolhimento";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>retencao@grupobrisanet.com.br </li>" +
            "<li>lideresretencao@grupobrisanet.com.br </li></ul>";

          observacao.innerHTML =
            "OBS: Não esquecer de marcar o gestor de recolhimento responsável acessando o link abaixo.";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          break;

        case "gravacao_ligacao":
          header_modal.innerHTML = "Gravação de ligação";
          texto_modal.innerHTML =
            com_supervisor + "<li>" + email_assistenteadm + " </li></ul>";
          observacao.innerHTML =
            "OBS: Caso a ligação que o cliente queira são de colaboradores de outros lideres, deve marcar os lideres afetados. <br/>OBS 2: Lembre-se de anexar o email que o cliente deseja receber a ligação.";
          link.innerHTML = "";
          break;

        case "ligacores_recebidas":
          header_modal.innerHTML = "Receber ligações recebidas no fixo";
          texto_modal.innerHTML =
            com_supervisor + "<li>" + email_assistenteadm + " </li></ul>";
          observacao.innerHTML =
            "OBS: Deve ser aberto chamado no SASKI antes para solicitar o arquivo .PDF contendo o histórico. <br/>OBS 2: Lembre-se de anexar o arquivo .PDF do histórico e o email que o cliente deseja receber o histórico.";
          link.innerHTML = "";
          break;

        case "ligacoes_realizadas":
          header_modal.innerHTML = "Receber ligações realizadas no fixo";
          texto_modal.innerHTML =
            com_supervisor + "<li>" + email_assistenteadm + " </li></ul>";
          observacao.innerHTML =
            "OBS: Deve ser aberto chamado no SASKI antes para solicitar o arquivo .PDF contendo o histórico. <br/>OBS 2: Lembre-se de anexar o arquivo .PDF do histórico e o email que o cliente deseja receber o histórico.";
          link.innerHTML = "";
          break;

        case "reclamacao_portabilidade":
          header_modal.innerHTML = "Reclamação de portabilidade";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>comercial@grupobrisanet.com.br </li>" +
            "<li>portabilidade@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "telefonia_desativada":
          header_modal.innerHTML = "Telefonia com status de desativada";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>rosariofeitosa@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "falha_autenticacao":
          header_modal.innerHTML = "Falha de autenticação";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>rosariofeitosa@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "troca_numero":
          header_modal.innerHTML = "Troca de número base do fixo";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>rosariofeitosa@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisacliente":
          header_modal.innerHTML = "Reclamação BrisaCliente";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>pedrohenrique.aires@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li>" +
            "<li>vanericadias@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "netflix":
          header_modal.innerHTML = "Reclamação Netflix";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>franciscoqueiroz@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "globoplay":
          header_modal.innerHTML = "Reclamação Globoplay";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>franciscoqueiroz@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisaMusic":
          header_modal.innerHTML = "Reclamação BrisaMusic";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>mauricio@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisamovel":
          header_modal.innerHTML = "Reclamação BrisaMóvel";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>lilianequeiroz@grupobrisanet.com.br </li>" +
            "<li>sacbrisamovel@grupobrisanet.com.br </li></ul";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "skeelo":
          header_modal.innerHTML = "Reclamação Skeelo";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>larissa.nogueira@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "qualifica":
          header_modal.innerHTML = "Reclamação Qualifica";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>larissa.nogueira@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisaplay":
          header_modal.innerHTML = "Reclamação BrisaPlay";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>darle@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "cancelamento":
          header_modal.innerHTML = "Solicitação cancelamento";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>retencaoativo@grupobrisanet.com.br </li>" +
            "<li>lideresretencao@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "ouvidoria":
          header_modal.innerHTML = "Reclamação ouvidoria";
          texto_modal.innerHTML =
            com_supervisor +
            "<li>ouvidoria@grupobrisanet.com.br </li>" +
            "<li>josianacosta@grupobrisanet.com.br </li>" +
            "<li>supervisao.ouvidoria@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "cipa":
          header_modal.innerHTML = "Reclamação CIPA - PDF";
          texto_modal.innerHTML =
            "<ul><li>" +
            email_lider +
            " </li><li>comissãopdf@gmail.com </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        default:
          document.getElementById("texto_modal").innerHTML =
            "ERRO: Selecione um problema.";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;
      }
    } else {
      switch (motivo) {
        case "rota":
          header_modal.innerHTML = "Rota inoperante fora do prazo";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>imoc@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul> <br/>";
          observacao.innerHTML =
            "OBS: Não esqueça de anexar o chamado do IMOC no email.";
          break;
        case "janelas_indisponiveis":
          header_modal.innerHTML = "Janelas indisponíveis";
          texto_modal.innerHTML = sem_supervisor + "</ul>";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          observacao.innerHTML =
            "OBS: Não esqueça de marcar o gestor de reparo responsável acessando o link abaixo.";
          break;

        case "erro_coordenadas":
          header_modal.innerHTML = "Erro de coordenadas";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>isabelaqueiroz@grupobrisanet.com.br </li>" +
            "<li>cleudo.chaves@grupobrisanet.com.br </li>" +
            "<li>jucileide.aquino@grupobrisanet.com.br </li>" +
            "<li>rosariofeitosa@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML =
            "OBS: Perguntar sempre o endereço do comp. de residência ao cliente. <br/> Caso o endereço esteja de acordo com o sistema, basta marcar apenas o(a) líder, os suportes e Rosário.";
          link.innerHTML = "";
          break;

        case "reparo_fora":
          header_modal.innerHTML = "Cobrança de reparo fora do prazo";
          texto_modal.innerHTML = sem_supervisor + "</ul>";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a> <br/><a class='link' href = " +
            agendadores_reparo +
            " target='_BLANK'>Agendadores de reparo</a>";
          observacao.innerHTML =
            "OBS: Não esqueça de marcar o gestor de reparo responsável e os agendadores acessando os links abaixo.";
          break;

        case "instalacao_fora":
          header_modal.innerHTML = "Cobrança de instalação fora do prazo";
          texto_modal.innerHTML = sem_supervisor + "</ul>";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a> <br/><a class='link' href = " +
            agendadores_instalacao +
            " target='_BLANK'>Agendadores de instalação</a>";
          observacao.innerHTML =
            "OBS: Não esqueça de marcar o gestor de reparo responsável e os agendadores acessando os links abaixo.";
          break;
        case "reclamacao_instalacao":
          header_modal.innerHTML = "Reclamação de instalação / conecta+";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>gestaodareclamacao@grupobrisanet.com.br </li>" +
            "<li>andrelma@grupobrisanet.com.br </li>" +
            "<li>flaviapaulino@grupobrisanet.com.br </li>" +
            "<li>qualidade@grupobrisanet.com.br </li> </ul>";
          observacao.innerHTML =
            "OBS: Não esquecer de marcar o gestor de instalação responsável acessando o link abaixo.";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          break;

        case "Reclamacao_reparo":
          header_modal.innerHTML =
            "Reclamação de reparo / alteração de endereço";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>gestaodareclamacao@grupobrisanet.com.br </li>" +
            "<li>andrelma@grupobrisanet.com.br </li>" +
            "<li>flaviapaulino@grupobrisanet.com.br </li>" +
            "<li>qualidade@grupobrisanet.com.br </li> </ul>";

          observacao.innerHTML =
            "OBS: Não esquecer de marcar o gestor de reparo responsável acessando o link abaixo.";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          break;

        case "reclamacao_recolhimento":
          header_modal.innerHTML = "Reclamação de recolhimento";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>retencao@grupobrisanet.com.br </li>" +
            "<li>lideresretencao@grupobrisanet.com.br </li></ul>";

          observacao.innerHTML =
            "OBS: Não esquecer de marcar o gestor de recolhimento responsável acessando o link abaixo.";
          link.innerHTML =
            "<a class='link' href = " +
            gestores_externos +
            " target='_BLANK'>Gestores IAT</a>";
          break;

        case "gravacao_ligacao":
          header_modal.innerHTML = "Gravação de ligação";
          texto_modal.innerHTML =
            sem_supervisor + "<li>" + email_assistenteadm + " </li></ul>";
          observacao.innerHTML =
            "OBS: Caso a ligação que o cliente queira são de colaboradores de outros lideres, deve marcar os lideres afetados. <br/>OBS 2: Lembre-se de anexar o email que o cliente deseja receber a ligação.";
          link.innerHTML = "";
          break;

        case "ligacores_recebidas":
          header_modal.innerHTML = "Receber ligações recebidas no fixo";
          texto_modal.innerHTML =
            sem_supervisor + "<li>" + email_assistenteadm + " </li></ul>";
          observacao.innerHTML =
            "OBS: Deve ser aberto chamado no SASKI antes para solicitar o arquivo .PDF contendo o histórico. <br/>OBS 2: Lembre-se de anexar o arquivo .PDF do histórico e o email que o cliente deseja receber o histórico.";
          link.innerHTML = "";
          break;

        case "ligacoes_realizadas":
          header_modal.innerHTML = "Receber ligações realizadas no fixo";
          texto_modal.innerHTML =
            sem_supervisor + "<li>" + email_assistenteadm + " </li></ul>";
          observacao.innerHTML =
            "OBS: Deve ser aberto chamado no SASKI antes para solicitar o arquivo .PDF contendo o histórico. <br/>OBS 2: Lembre-se de anexar o arquivo .PDF do histórico e o email que o cliente deseja receber o histórico.";
          link.innerHTML = "";
          break;

        case "reclamacao_portabilidade":
          header_modal.innerHTML = "Reclamação de portabilidade";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>comercial@grupobrisanet.com.br </li>" +
            "<li>portabilidade@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "telefonia_desativada":
          header_modal.innerHTML = "Telefonia com status de desativada";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>rosariofeitosa@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "falha_autenticacao":
          header_modal.innerHTML = "Falha de autenticação";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>rosariofeitosa@grupobrisanet.com.br </li>" +
            "<li>redesftth@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "troca_numero":
          header_modal.innerHTML = "Troca de número base do fixo";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>rosariofeitosa@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisacliente":
          header_modal.innerHTML = "Reclamação BrisaCliente";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>pedrohenrique.aires@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li>" +
            "<li>vanericadias@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "netflix":
          header_modal.innerHTML = "Reclamação Netflix";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>franciscoqueiroz@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "globoplay":
          header_modal.innerHTML = "Reclamação Globoplay";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>franciscoqueiroz@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisaMusic":
          header_modal.innerHTML = "Reclamação BrisaMusic";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>mauricio@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisamovel":
          header_modal.innerHTML = "Reclamação BrisaMóvel";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>lilianequeiroz@grupobrisanet.com.br </li>" +
            "<li>sacbrisamovel@grupobrisanet.com.br </li></ul";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "skeelo":
          header_modal.innerHTML = "Reclamação Skeelo";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>larissa.nogueira@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "qualifica":
          header_modal.innerHTML = "Reclamação Qualifica";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>larissa.nogueira@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "brisaplay":
          header_modal.innerHTML = "Reclamação BrisaPlay";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>darle@grupobrisanet.com.br </li>" +
            "<li>produtos.suporte@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "cancelamento":
          header_modal.innerHTML = "Solicitação cancelamento";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>retencaoativo@grupobrisanet.com.br </li>" +
            "<li>lideresretencao@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "ouvidoria":
          header_modal.innerHTML = "Reclamação ouvidoria";
          texto_modal.innerHTML =
            sem_supervisor +
            "<li>ouvidoria@grupobrisanet.com.br </li>" +
            "<li>josianacosta@grupobrisanet.com.br </li>" +
            "<li>supervisao.ouvidoria@grupobrisanet.com.br </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        case "cipa":
          header_modal.innerHTML = "Reclamação CIPA - PDF";
          texto_modal.innerHTML =
            "<ul><li>" +
            email_lider +
            " </li><li>comissãopdf@gmail.com </li></ul>";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;

        default:
          document.getElementById("texto_modal").innerHTML =
            "ERRO: Selecione um problema.";
          observacao.innerHTML = "";
          link.innerHTML = "";
          break;
      }
    }
  } else {
    document.getElementById("texto_modal").innerHTML =
      "ERRO: Selecione seu líder.";
  }
  if (lider != "" && motivo != "") {
    const aparecer = document.getElementById("sucesso");
    document.getElementById("texto_resposaveis").innerHTML =
      "Responsáveis pela situação:";
    aparecer.innerHTML = "Copiado com sucesso!";
    setTimeout(function () {
      aparecer.classList.remove("escondido");
    }, 900);
    aparecer.classList.add("sucesso");
    copiarTexto();
  }
}

function copiarTexto() {
  var textoACopiar = document.getElementById("texto_modal");

  var tempInput = document.createElement("input");
  tempInput.value = textoACopiar.textContent;
  document.body.appendChild(tempInput);

  tempInput.select();

  document.execCommand("copy");

  document.body.removeChild(tempInput);
}

function apagar() {
  document.getElementById("lider").value = "";
  document.getElementById("marcar_gestor").checked = false;
  document.getElementById("motivo").value = "";
  document.getElementById("observacao").innerHTML = "";
  document.getElementById("link").innerHTML = "";
  document.getElementById("sucesso").innerHTML = "";
}

