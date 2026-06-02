export type Service = {
  title: string;
  price: number;
  description?: string;
};

export const perguntas: Service[] = [
  { title: "1 Pergunta Objetiva", price: 7, description: "Resposta direta para uma dúvida pontual." },
  { title: "1 Pergunta Subjetiva", price: 6, description: "Análise mais aprofundada de um tema." },
  { title: "2 Perguntas Objetivas", price: 14, description: "Duas respostas claras e diretas." },
  { title: "2 Perguntas Subjetivas", price: 12, description: "Reflexão sobre duas questões abertas." },
  { title: "3 Perguntas Objetivas", price: 25, description: "Três respostas objetivas em uma sessão." },
  { title: "3 Perguntas Subjetivas", price: 22, description: "Aprofundamento em três temas pessoais." },
  { title: "Orientação Espiritual", price: 10, description: "Direcionamento para o seu caminho espiritual." },
  { title: "Orientação Amorosa", price: 10, description: "Clareza sobre relacionamentos e afetos." },
  { title: "Orientação Acadêmica", price: 10, description: "Insights sobre estudos e decisões acadêmicas." },
  { title: "Orientação Profissional", price: 10, description: "Apoio para sua trajetória de carreira." },
  { title: "Combo Tiragem", price: 35, description: "Combinação especial de tiragens para visão ampla." },
];

export const tiragens: Service[] = [
  { title: "Templo do Diabo", price: 40, description: "Tiragem profunda para sombras e desafios." },
  { title: "Templo da Amizade", price: 30, description: "Análise de vínculos e relações de amizade." },
  { title: "Jogo Completo", price: 60, description: "Leitura ampla cobrindo todas as áreas da vida." },
  { title: "Sentenário", price: 20, description: "Tiragem tradicional de sete cartas." },
  { title: "Espelho da Alma", price: 25, description: "Autoconhecimento e reflexão interior." },
  { title: "Leitura de Caminhos", price: 30, description: "Visão sobre escolhas e direções futuras." },
  { title: "Tiragem Cruz Céltica", price: 30, description: "Método clássico de 10 cartas." },
  { title: "Tiragem de 3 Cartas", price: 25, description: "Passado, presente e futuro de forma clara." },
];

export const WHATSAPP_NUMBER = "5591920039251";

export const whatsappLink = (serviceTitle: string, price: number) => {
  const msg = `Olá Larissa! Gostaria de agendar: ${serviceTitle} (R$${price}).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
