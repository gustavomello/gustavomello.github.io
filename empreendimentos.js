// Dados dos empreendimentos — edite mês a mês.
// O conteúdo após "window.EMPREENDIMENTOS =" é JSON puro (aspas duplas, sem vírgula sobrando).
// Fica num .js (e não .json) para o simulador funcionar abrindo o index.html direto, sem servidor.
//
//   nome            nome exibido no seletor e no relatório
//   cidade          cidade exibida junto à data, acima das assinaturas do relatório
//   entrega         mês de entrega estimado usado na simulação, formato "AAAA-MM"
//   entregaContratual  prazo de entrega do contrato com a Caixa ("AAAA-MM"), exibido no verso do relatório;
//                      deixe "" para sair uma linha em branco para preencher à mão
//   percentualObra  % de obra concluída no mês atual (use ponto como decimal: 67.74)
//   cotaTerreno     valor da cota terreno em R$ (liberada pela Caixa no 1º mês)
//   tipos           tipos de unidade e respectivos valores em R$
window.EMPREENDIMENTOS = [
  {
    "nome": "Jardim dos Ipês",
    "cidade": "Pelotas",
    "entrega": "2028-07",
    "entregaContratual": "2029-06",
    "percentualObra": 5.8,
    "cotaTerreno": 10000,
    "tipos": [
      { "nome": "Com sacada", "valor": 235000 },
      { "nome": "Sem sacada", "valor": 230000 },
      { "nome": "PNE", "valor": 230000 }
    ]
  },
  {
    "nome": "Jardim dos Jacarandás",
    "cidade": "Pelotas",
    "entrega": "2027-06",
    "entregaContratual": "2028-11",
    "percentualObra": 67.74,
    "cotaTerreno": 10000,
    "tipos": [
      { "nome": "Padrão", "valor": 227000 },
      { "nome": "PNE", "valor": 227000 }
    ]
  }
];
