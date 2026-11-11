import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Send, Copy, Check, MessageSquare, Phone, 
  Building2, ShieldCheck, DollarSign, FileText, ChevronRight, 
  UserCheck, AlertTriangle, RefreshCw, X, ArrowRight, 
  HelpCircle, CheckCircle2, Bookmark, Flame, Wrench
} from 'lucide-react';
import { RedeRestauranteShopping, CrmLead } from '../../types/crm';
import { SHOPPING_RESTAURANT_CHAINS } from '../../data/shoppingChainsData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialTarget?: {
    tipo: 'rede' | 'lead' | 'personalizado';
    nome: string;
    contato?: string;
    telefone?: string;
    email?: string;
    categoria?: string;
    cidade?: string;
    detalhes?: string;
    unidades?: number;
  };
  leadsDisponiveis?: CrmLead[];
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  timestamp: string;
  content: string;
  etapa?: 'localizar' | 'dor' | 'solucao' | 'lucro' | 'contrato';
  scriptCopiar?: string;
  contratoMinuta?: string;
}

export const AiPitchConsultantChat: React.FC<Props> = ({ 
  isOpen, 
  onClose, 
  initialTarget,
  leadsDisponiveis = []
}) => {
  // Contexto selecionado para a conversa
  const [selectedTargetName, setSelectedTargetName] = useState<string>(() => {
    return initialTarget?.nome || 'Outback Steakhouse (Bloomin Brands)';
  });
  const [targetTelefone, setTargetTelefone] = useState<string>(() => {
    return initialTarget?.telefone || '(11) 4949-9100';
  });
  const [targetSetor, setTargetSetor] = useState<string>(() => {
    return initialTarget?.contato || 'Diretoria de Obras, Instalações & Expansão de Lojas';
  });
  const [targetCategoria, setTargetCategoria] = useState<string>(() => {
    return initialTarget?.categoria || 'Steakhouses & Carnes';
  });

  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializar mensagens do chat com base no alvo selecionado
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg_welcome',
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: `👋 Olá, Eng. Robson! Sou seu **Copiloto Estratégico de Vendas B2B & Fechamento de Contratos** da Outfire.

Estou configurado para guiar você do **primeiro contato com a rede até a assinatura do contrato mais lucrativo possível** para a Outfire Engenharia.

🎯 **Alvo Atual Selecionado:** **${initialTarget?.nome || 'Outback Steakhouse (Bloomin Brands)'}**
💼 **Setor Alvo:** ${initialTarget?.contato || 'Diretoria de Obras, Implantação & Facilities'}

Como posso orientar sua abordagem agora? Escolha uma das 5 etapas da esteira de fechamento abaixo ou me faça qualquer pergunta!`,
    }
  ]);

  // Atualizar quando initialTarget mudar
  useEffect(() => {
    if (initialTarget && initialTarget.nome) {
      setSelectedTargetName(initialTarget.nome);
      if (initialTarget.telefone) setTargetTelefone(initialTarget.telefone);
      if (initialTarget.contato) setTargetSetor(initialTarget.contato);
      if (initialTarget.categoria) setTargetCategoria(initialTarget.categoria);
    }
  }, [initialTarget]);

  // Scroll automático para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // ==============================================================
  // 5 ETAPAS DA ESTEIRA ESTRATÉGICA DE VENDAS OUTFIRE
  // ==============================================================
  const triggerStage = (stage: 'localizar' | 'dor' | 'solucao' | 'lucro' | 'contrato') => {
    setIsTyping(true);
    
    setTimeout(() => {
      let aiResponse: ChatMessage;
      const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      switch (stage) {
        case 'localizar':
          aiResponse = {
            id: `msg_stage_${Date.now()}`,
            sender: 'ai',
            timestamp: hora,
            etapa: 'localizar',
            content: `🎯 **ETAPA 1: COMO LOCALIZAR E CHEGAR NO TOMADOR DE DECISÃO CERTO**

Em shopping centers e redes corporativas, **nunca tente vender para o atendente ou gerente de salão** — eles não têm autonomia de compra e vão engavetar seu contato.

### 📌 Os 3 Alvos Decisores:
1. **Engenheiro / Coordenador de Implantação e Obras da Rede:** É quem está sofrendo com o prazo de inauguração exigido pelo shopping e precisa do AVCB aprovado.
2. **Gerente de Facilities / Manutenção Corporativa:** Responsável pelas lojas já em funcionamento, vistorias anuais e seguros.
3. **Franqueado / Sócio Proprietário (em lojas franqueadas):** Quem assina o cheque e se preocupa com o valor do investimento.

### 📞 Script Cirúrgico para Furar o Bloqueio da Recepção/Central:
*"Olá, boa tarde! Aqui é o Robson, engenheiro de sistemas da Outfire Engenharia contra Incêndio. Estamos finalizando a revisão das exigências técnicas da NBR 14518 e Bombeiros para a aprovação das coifas e emissão de ART da operação de vocês no shopping. Preciso falar diretamente com o Engenheiro de Implantação/Obras ou com o responsável por Facilities para alinhar os pontos de intertravamento de gás. Poderia me transferir para o ramal dele ou me passar o WhatsApp corporativo de obras?"*`,
            scriptCopiar: `Olá, boa tarde! Aqui é o Robson, engenheiro da Outfire Engenharia de Supressão. Estamos revisando as exigências da NBR 14518 e do Corpo de Bombeiros para a liberação de AVCB das coifas da rede no shopping. Preciso falar com o Engenheiro de Obras ou Facilities para alinharmos a memória de cálculo e emissão de ART. Pode me passar o contato direto ou transferir o ramal?`
          };
          break;

        case 'dor':
          aiResponse = {
            id: `msg_stage_${Date.now()}`,
            sender: 'ai',
            timestamp: hora,
            etapa: 'dor',
            content: `🔍 **ETAPA 2: DIAGNÓSTICO CONSULTIVO & INVESTIGAÇÃO DA DOR**

O cliente não compra a central nem os tubos — ele compra a **certeza de que a loja vai inaugurar sem atrasos e que o Bombeiro não vai interditar a cozinha**.

### 💬 4 Perguntas Estratégicas para Fazer ao Responsável:
1. *"Qual é a data limite que a administração do shopping deu para vocês entregarem a ART do CREA e o Laudo de Estanqueidade das coifas?"*
2. *"A coifa de vocês opera com grelhas/charbroiler ou fritadeiras de alta caloria? Vocês sabiam que o Corpo de Bombeiros e as seguradoras agora exigem supressão química automática Classe K intertravada com a válvula de gás?"*
3. *"O fornecedor que cotou com vocês consegue realizar toda a montagem em horário noturno, deixando a cozinha 100% limpa e operacional para o almoço do dia seguinte?"*
4. *"Se o shopping solicitar vistoria surpresa hoje, o laudo técnico do sistema de exaustão e dutos está regularizado ou sob risco de notificação?"*

> 💡 **Gatilho de Urgência:** Cada dia de loja fechada em shopping por falta de AVCB custa de R$ 15.000 a R$ 40.000 em faturamento perdido + multas contratuais da administradora. Mostre que a Outfire resolve isso em 48h!`,
            scriptCopiar: `Olá! Falando sobre a operação da ${selectedTargetName}: qual é a data limite exigida pelo shopping para a apresentação do Laudo do Bombeiro (AVCB) e ART das coifas? Conseguimos realizar a instalação completa no turno da madrugada, sem parar o faturamento da cozinha e entregando o laudo pronto para aprovação imediata.`
          };
          break;

        case 'solucao':
          aiResponse = {
            id: `msg_stage_${Date.now()}`,
            sender: 'ai',
            timestamp: hora,
            etapa: 'solucao',
            content: `🛡️ **ETAPA 3: APRESENTAÇÃO IRRECUSÁVEL DA SOLUÇÃO OUTFIRE**

Apresente a Outfire não como uma empresa de extintores, mas como uma **Engenharia Especializada em Supressão Autônoma de Alta Performance**.

### 🚀 Nossos 5 Diferenciais que Eliminam a Concorrência:
1. **Central Outfire VTS 32S3 com IHM Touch:** Display colorido exclusivo, supervisão digital de baterias, histórico de eventos e duplo disparo redundante.
2. **Proteção Dupla Integrada (NBR 14518 & NFPA 96):** Saponificante Classe K nebulizado nas fritadeiras/chapas + CO2 de alta pressão no duto e exaustor.
3. **Instalação Noturna Limpa ("Ghost Install"):** Nossa equipe entra às 23h e sai às 05h da manhã. Tubulação em inox 304 escovado com conexões de alta pressão. Cozinha limpa e pronta para faturar.
4. **Corte Automático de Gás em < 1 segundo:** Válvula solenoide proporcional que corta o fluxo de GN/GLP instantaneamente ao menor sinal de chamas.
5. **Entrega Técnica Turnkey com ART do CREA:** Laudo assinado pelo Engenheiro Responsável, memorial de cálculo e treinamento com certificado para a equipe da cozinha.`,
            scriptCopiar: `Prezados da engenharia da ${selectedTargetName}: Apresentamos a Central Outfire VTS 32S3, desenvolvida sob medida para cozinhas de alta demanda em shoppings. Fornecemos o kit completo de fábrica (Saponificante Classe K + CO2 no duto) com montagem noturna limpa sem parar o restaurante e entrega de ART no CREA para liberação imediata junto ao Corpo de Bombeiros.`
          };
          break;

        case 'lucro':
          aiResponse = {
            id: `msg_stage_${Date.now()}`,
            sender: 'ai',
            timestamp: hora,
            etapa: 'lucro',
            content: `💰 **ETAPA 4: ESTRATÉGIA DE OFERTA ALTAMENTE LUCRATIVA PARA A OUTFIRE**

Para garantir **margem líquida de 45% a 55% e receita previsível todo mês**, nunca venda apenas o equipamento isolado. Venda o **Pacote de Proteção Integral (Venda + Instalação + Recorrência)**.

### 📊 Estrutura de Precificação Inteligente (Exemplo Loja Padrão de Coifa Dupla):
- **Equipamentos e Central Touch VTS 32S3 (Kit Fábrica):** R$ 18.500,00 (Custo R$ 8.900) -> *Margem de R$ 9.600*
- **Mão de Obra Noturna Especializada + Tubos Inox + ART:** R$ 9.800,00 (Custo R$ 3.200) -> *Margem de R$ 6.600*
- **Total do Projeto Inicial:** **R$ 28.300,00** *(Lucro bruto de ~R$ 16.200 por loja)*

---

### 🔄 O Pulo do Gato Lucrativo: CONTRATO DE MANUTENÇÃO PREVENTIVA RECORRENTE (MRR)
Exija ou embuta a adesão ao plano de manutenção preventiva semestral:
- **Valor:** R$ 750,00 a R$ 950,00 / mês por loja (ou R$ 4.500 semestrais).
- **O que inclui:** 2 vistorias anuais com pesagem de cilindros, calibração de sensores térmicos, teste elétrico de solenoide e renovação anual do Laudo para o AVCB do shopping.
- **Se a rede tiver 5 lojas:** São **R$ 4.250 / mês de receita recorrente líquida** pingando na conta da Outfire!

### 💡 Dica de Negociação de Alto Nível:
Se o cliente pedir desconto: **NUNCA baixe o preço sem tirar escopo**. 
Em vez de baixar R$ 2.000, ofereça parcelar a mão de obra em 4x ou conceda os primeiros 3 meses de manutenção inclusos mediante fechamento do contrato de 24 meses.`,
            scriptCopiar: `Estrutura de Proposta Comercial Outfire:
1. Fornecimento do Kit Central VTS 32S3 Inox + Cilindro Saponificante Classe K + CO2 Duto: R$ 18.500,00
2. Montagem Noturna Turnkey + Tubulação Inox + ART CREA + Laudo AVCB: R$ 9.800,00
Valor Total: R$ 28.300,00 (50% sinal na aprovação + 50% após emissão da ART).
Opcional Bonificado: Contrato de Manutenção Preventiva Semestral por R$ 750,00/mês garantindo extensão da garantia para 24 meses.`
          };
          break;

        case 'contrato':
          aiResponse = {
            id: `msg_stage_${Date.now()}`,
            sender: 'ai',
            timestamp: hora,
            etapa: 'contrato',
            content: `📄 **ETAPA 5: MINUTA CONTRATUAL COMPLETA & BLINDADA PARA A OUTFIRE**

Abaixo está a minuta jurídica pronta, elaborada para proteger nossa margem, garantir o recebimento pontual e fidelizar o cliente com manutenção periódica.

Você pode **copiar o texto completo com 1 clique** para enviar em PDF ou anexar ao e-mail!`,
            contratoMinuta: `INSTRUMENTO PARTICULAR DE PRESTAÇÃO DE SERVIÇOS DE ENGENHARIA DE SUPRESSÃO CONTRA INCÊNDIO, FORNECIMENTO DE SISTEMA AUTOMATIZADO E MANUTENÇÃO PREVENTIVA

CONTRATADA: OUTFIRE ENGENHARIA DE SUPRESSÃO DE INCÊNDIO LTDA, CNPJ sob o nº 00.000.000/0001-00, com sede técnica no Estado de São Paulo, representada por seu Responsável Técnico Eng. Robson (CREA-SP).

CONTRATANTE: ${selectedTargetName.toUpperCase()}, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº [CNPJ CLIENTE], com sede em [ENDEREÇO CLIENTE].

CLÁUSULA PRIMEIRA – DO OBJETO
O presente contrato tem por objeto o fornecimento, montagem especializada e comissionamento do Sistema Autônomo de Detecção e Supressão de Incêndio Outfire Modelo VTS 32S3, em total conformidade com a ABNT NBR 14518, NFPA 96 e Instruções Técnicas do Corpo de Bombeiros.
Parágrafo Único: O sistema contempla proteção por agente extintor saponificante (Classe K) na área de cocção, proteção por Dióxido de Carbono (CO2) nos dutos de exaustão, central microprocessada com interface IHM touch, baterias seladas, bicos nebulizadores em aço inoxidável e corte automático da linha de gás.

CLÁUSULA SEGUNDA – DO CRONOGRAMA E MONTAGEM NOTURNA
A CONTRATADA executará a instalação em horário extraordinário noturno (entre 23h00 e 05h00), garantindo que as operações normais de atendimento da CONTRATANTE não sejam interrompidas durante os períodos diurnos de almoço e jantar.
Prazo estimado de montagem: 1 a 2 turnos noturnos.

CLÁUSULA TERCEIRA – DO VALOR E CONDIÇÕES DE PAGAMENTO
Pelo fornecimento integral dos equipamentos, materiais de tubulação em aço inox e mão de obra de engenharia, a CONTRATANTE pagará à CONTRATADA o valor global de R$ 28.500,00 (vinte e oito mil e quinhentos reais), nas seguintes condições:
a) 50% (cinquenta por cento) a título de Sinal e Mobilização de Fábrica, pagos na data de assinatura deste instrumento;
b) 50% (cinquenta por cento) no ato da entrega técnica, conclusão dos testes de acionamento e emissão da respectiva ART (Anotação de Responsabilidade Técnica) do CREA e Laudo de Estanqueidade.

CLÁUSULA QUARTA – DA RESPONSABILIDADE TÉCNICA E AVCB
A CONTRATADA emitirá ART assinada por Engenheiro habilitado no CREA e Laudo Técnico conclusivo com validade perante o Corpo de Bombeiros e Administração do Shopping.

CLÁUSULA QUINTA – DO PLANO DE MANUTENÇÃO PREVENTIVA VINCULADO
Para preservação da garantia integral de 12 (doze) meses e manutenção da conformidade exigida pelas seguradoras, as partes pactuam o Plano de Manutenção Preventiva Semestral, no valor mensal de R$ 750,00 (setecentos e cinquenta reais), com visitas periódicas para pesagem de cilindros, verificação de sensores e emissão de laudo de renovação.

CLÁUSULA SEXTA – DO FORO
Para dirimir quaisquer dúvidas decorrentes do presente contrato, as partes elegem o Foro da Comarca de São Paulo/SP, com renúncia de qualquer outro, por mais privilegiado que seja.

São Paulo/SP, ${new Date().toLocaleDateString('pt-BR')}.

___________________________________             ___________________________________
OUTFIRE ENGENHARIA LTDA                         CONTRATANTE: ${selectedTargetName}
Engenheiro Responsável Técnico CREA/SP          Representante Legal / Diretor de Obras`,
            scriptCopiar: `Prezado responsável de Obras da ${selectedTargetName}: Minuta do contrato Outfire para instalação do Sistema de Supressão NBR 14518 estruturada com fornecimento do Kit VTS 32S3 Inox, execução noturna e ART inclusa. Segue minuta em anexo para assinatura. Qualquer ajuste comercial estamos à disposição!`
          };
          break;
      }

      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 600);
  };

  // Enviar mensagem de texto livre do usuário para a IA
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isTyping) return;

    const textoUsuario = inputMessage.trim();
    setInputMessage('');

    const novaMsgUser: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: textoUsuario
    };

    setMessages((prev) => [...prev, novaMsgUser]);
    setIsTyping(true);

    // Resposta inteligente e contextual da IA
    setTimeout(() => {
      let respostaTexto = '';
      let scriptExtra: string | undefined;
      const lower = textoUsuario.toLowerCase();

      if (lower.includes('caro') || lower.includes('desconto') || lower.includes('preço') || lower.includes('preco')) {
        respostaTexto = `💡 **COMO REVERTER A OBJEÇÃO DE PREÇO:**

Quando o cliente diz que *"achou caro"*, ele está comparando o valor com um extintor comum de R$ 300, e não com o **custo de um incêndio ou de ter a loja interditada pelo shopping**.

**Argumentação Matadora para usar agora:**
*"Compreendo perfeitamente sua preocupação com o CAPEX da obra. Porém, observe 3 pontos cruciais:
1. Nossa central possui duplo cilindro independente (Saponificante + CO2) e corte de gás em menos de 1 segundo. Sistemas mais simples não passam na vistoria de shoppings modernos.
2. Fazemos a montagem de madrugada. Você não perde R$ 20.000 em vendas de almoço com salão fechado.
3. Se um dia de atraso no AVCB gerar multa de condomínio no shopping, essa multa já custa mais do que todo o nosso sistema.

Podemos manter o escopo completo e parcelar a mão de obra em 3x sem juros, mantendo o sinal de entrada para os materiais. Fica viável para o fluxo de caixa da obra?"*`;
        scriptExtra = `Entendo a questão orçamentária. Porém, nosso sistema evita a paralisação da cozinha (montagem noturna) e entrega a ART e laudo NBR 14518 sem risco de reprovação no Bombeiro. Para viabilizar, consigo parcelar a mão de obra em 3x mantendo o sinal dos equipamentos. Podemos fechar assim?`;
      } 
      else if (lower.includes('ansul') || lower.includes('kidde') || lower.includes('concorrente') || lower.includes('concorrencia')) {
        respostaTexto = `🛡️ **COMO SUPERAR MARCAS TRADICIONAIS (ANSUL / KIDDE / PROTEGE):**

Marcas importadas têm duas grandes fraquezas que a Outfire domina:
1. **Peças caras e demora de semanas para reposição/recargas:** Se um sistema Ansul dispara, o restaurante fica 10 a 20 dias com a cozinha interditada esperando ampola ou recarga especial de fora.
2. **Central analógica antiga sem visor moderno:** A Outfire entrega a Central VTS 32S3 com painel Touchscreen colorido, que a fiscalização e a brigada do shopping adoram ver na parede.
3. **Equipe própria no Brasil com atendimento 24h:** Nós mesmos fabricamos, montamos e damos a garantia técnica direta com emissão de ART imediata.`;
        scriptExtra = `Diferente de sistemas importados que demoram semanas para recarga após um disparo, a Outfire possui fábrica própria no Brasil, Central Touchscreen de última geração e atendimento técnico 24h para que sua cozinha nunca fique interditada.`;
      }
      else if (lower.includes('reunião') || lower.includes('reuniao') || lower.includes('visita') || lower.includes('agendar')) {
        respostaTexto = `📅 **SCRIPT DE CONVITE PARA VISTORIA TÉCNICA OU REUNIÃO ON-LINE:**

Para avançar com rapidez:
*"Olá, [Nome do Responsável]! Como cada cozinha industrial possui particularidades de duto e equipamentos, podemos fazer uma visita técnica rápida de 20 minutos no shopping ou uma chamada de vídeo para olhar a planta da coifa. Assim já entrego a memória de cálculo exata com a quantidade de bicos e a estimativa de custos sem compromisso. Você teria disponibilidade nesta quinta às 10h ou sexta às 14h?"*`;
        scriptExtra = `Olá! Gostaria de agendar uma breve visita técnica no local da obra ou uma chamada de vídeo de 15 min para analisar a planta da coifa e já liberar a memória de cálculo com o laudo preliminar. Quinta às 10h ou sexta às 14h ficaria melhor para você?`;
      }
      else if (lower.includes('sumiu') || lower.includes('vácuo') || lower.includes('vacuo') || lower.includes('follow') || lower.includes('contato')) {
        respostaTexto = `⚡ **MENSAGEM DE RESGATE ("FOLLOW-UP MATADOR"):**

Se o cliente parou de responder no WhatsApp:
*"Olá [Nome], tudo bem? Sei que a rotina de obras de shopping é corrida! Estou fechando o cronograma da nossa equipe de engenharia para as instalações noturnas das próximas duas semanas no shopping. 

Como a liberação do AVCB costuma ser o gargalo final antes da inauguração, você ainda precisa da reserva da nossa equipe para a montagem e emissão da ART da sua cozinha? Se já resolveram por aí, me avise para eu liberar a data para outro restaurante da praça. Abraço!"*`;
        scriptExtra = `Olá [Nome], tudo bem? Estamos fechando a escala de engenharia para instalações noturnas e emissão de ART das próximas semanas. Você ainda precisa da reserva de data para a liberação da sua coifa junto ao shopping/Bombeiros? Me avise para eu segurar sua data na agenda da equipe!`;
      }
      else {
        respostaTexto = `Entendido, Eng. Robson! Sobre a abordagem para **${selectedTargetName}**:

1. **Foco Técnico:** Esta rede opera com cozinhas de alto fluxo em shoppings onde a gordura volatilizada no duto é o maior risco de ignição espontânea.
2. **Nosso Gancho:** Apresentar a Central Outfire VTS 32S3 com o corte automático de gás e proteção de saponificante Classe K + CO2.
3. **Sugestão de Ação Imediata:** Clique nos botões acima para gerar o **Script de 1º Contato** ou a **Minuta Contratual** completa com valor de R$ 28.500,00 e manutenção mensal de R$ 750,00.

Deseja que eu redija um e-mail formal executivo ou uma mensagem curta e persuasiva para o WhatsApp do diretor de obras?`;
      }

      const novaMsgAi: ChatMessage = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: respostaTexto,
        scriptCopiar: scriptExtra
      };

      setMessages((prev) => [...prev, novaMsgAi]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-5xl h-[92vh] rounded-3xl bg-[#0c0e15] border border-purple-500/40 shadow-[0_0_80px_rgba(168,85,247,0.25)] flex flex-col overflow-hidden text-slate-100 font-sans">
        
        {/* ================= HEADER DO COPILOTO ================= */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#131622] via-[#1a1429] to-[#12151e] border-b border-purple-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-white flex items-center gap-1.5">
                  <span>Copiloto IA de Vendas & Contratos B2B</span>
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-mono font-bold border border-purple-500/40">
                  Fechamento Lucrativo
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Orientação estratégica do 1º contato à assinatura do contrato de alto ticket da Outfire.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Seletor Rápido de Contexto / Alvo */}
            <div className="flex items-center bg-black/60 rounded-xl px-3 py-1.5 border border-white/10 text-xs">
              <Building2 className="w-3.5 h-3.5 text-purple-400 mr-2 shrink-0" />
              <select
                value={selectedTargetName}
                onChange={(e) => {
                  const nome = e.target.value;
                  setSelectedTargetName(nome);
                  const achouRede = SHOPPING_RESTAURANT_CHAINS.find(r => r.nomeRede === nome);
                  if (achouRede) {
                    setTargetTelefone(achouRede.telefones[0] || '');
                    setTargetSetor(achouRede.contatoSetor);
                    setTargetCategoria(achouRede.categoria);
                  }
                }}
                className="bg-transparent text-white font-semibold outline-none max-w-[200px] sm:max-w-[260px] truncate cursor-pointer"
              >
                <optgroup label="Grandes Redes de Shoppings">
                  {SHOPPING_RESTAURANT_CHAINS.map(c => (
                    <option key={c.id} value={c.nomeRede} className="bg-[#10131d] text-white">
                      {c.nomeRede}
                    </option>
                  ))}
                </optgroup>
                {leadsDisponiveis.length > 0 && (
                  <optgroup label="Leads Recebidos no Site">
                    {leadsDisponiveis.map(l => (
                      <option key={l.id} value={l.empresa || l.nome} className="bg-[#10131d] text-white">
                        {l.empresa || l.nome} ({l.cidade || 'Site'})
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              title="Fechar Copiloto IA"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= BARRA DE ESTEIRA: 5 ETAPAS ESTRATÉGICAS ================= */}
        <div className="px-4 py-2.5 bg-[#0a0c12] border-b border-white/10 overflow-x-auto flex items-center gap-2 shrink-0 scrollbar-none">
          <span className="text-[10px] font-mono uppercase text-gray-400 font-bold shrink-0 mr-1 flex items-center gap-1">
            <Flame className="w-3 h-3 text-amber-400" />
            <span>Esteira:</span>
          </span>

          <button
            type="button"
            onClick={() => triggerStage('localizar')}
            className="px-3 py-1.5 rounded-xl bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-200 text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>1. Localizar Decisor</span>
          </button>

          <button
            type="button"
            onClick={() => triggerStage('dor')}
            className="px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-200 text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-cyan-400" />
            <span>2. Investigar Dor</span>
          </button>

          <button
            type="button"
            onClick={() => triggerStage('solucao')}
            className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-[#f3e5ab] text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>3. Pitch da Solução</span>
          </button>

          <button
            type="button"
            onClick={() => triggerStage('lucro')}
            className="px-3 py-1.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-200 text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer"
          >
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>4. Oferta Lucrativa & MRR</span>
          </button>

          <button
            type="button"
            onClick={() => triggerStage('contrato')}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-xs font-extrabold flex items-center gap-1.5 shrink-0 shadow-glow-gold hover:scale-105 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>5. Minuta Contratual Pronta</span>
          </button>
        </div>

        {/* ================= CORPO DO CHAT COM MENSAGENS ================= */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#090b10] to-[#0d1017]">
          
          {/* Card Informativo do Lead em Foco */}
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-gray-400 font-mono">Alvo em Negociação:</span>
              <strong className="text-white text-sm">{selectedTargetName}</strong>
              <span className="text-gray-400">({targetCategoria})</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400 font-mono text-[11px]">Telefone/WhatsApp: <strong className="text-white">{targetTelefone}</strong></span>
              {targetTelefone && (
                <a
                  href={`https://wa.me/55${targetTelefone.replace(/\D/g, '')}?text=${encodeURIComponent(`Olá! Sou Robson da Outfire Engenharia. Gostaria de falar com o responsável de Engenharia/Obras da ${selectedTargetName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1 shadow-md"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>

          {/* Histórico de Mensagens */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1`}
            >
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono px-1">
                <span>{msg.sender === 'user' ? 'Robson (Engenharia Chefe)' : 'IA Outfire B2B Specialist'}</span>
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed shadow-lg ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-amber-600 to-[#d4af37] text-black font-medium rounded-tr-none'
                    : 'bg-[#121622] border border-white/10 text-gray-200 rounded-tl-none'
                }`}
              >
                {/* Conteúdo formatado */}
                <div className="whitespace-pre-wrap space-y-2">
                  {msg.content}
                </div>

                {/* Bloco de Minuta de Contrato para Cópia */}
                {msg.contratoMinuta && (
                  <div className="mt-4 p-4 rounded-xl bg-black/70 border border-[#d4af37]/40 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-mono text-xs text-[#f3e5ab] font-bold flex items-center gap-1.5">
                        <FileText className="w-4 h-4 text-[#d4af37]" />
                        <span>Minuta Jurídica Comercial (Pronta para Assinar)</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => copyText(msg.contratoMinuta!, `contrato_${msg.id}`)}
                        className="px-3 py-1.5 rounded-lg bg-[#d4af37] text-black text-xs font-bold flex items-center gap-1 shadow-glow-gold hover:scale-105 transition-all"
                      >
                        {copiedId === `contrato_${msg.id}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === `contrato_${msg.id}` ? 'Copiado!' : 'Copiar Minuta Completa'}</span>
                      </button>
                    </div>
                    <pre className="text-[11px] font-mono text-gray-300 whitespace-pre-wrap max-h-72 overflow-y-auto bg-black/40 p-3 rounded-lg border border-white/5">
                      {msg.contratoMinuta}
                    </pre>
                  </div>
                )}

                {/* Botão de Cópia Rápida de Script WhatsApp */}
                {msg.scriptCopiar && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-gray-400 font-mono italic">
                      💬 Script pronto para envio:
                    </span>
                    <button
                      type="button"
                      onClick={() => copyText(msg.scriptCopiar!, `script_${msg.id}`)}
                      className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#f3e5ab] text-xs font-bold flex items-center gap-1 transition-all"
                    >
                      {copiedId === `script_${msg.id}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === `script_${msg.id}` ? 'Copiado!' : 'Copiar Texto para WhatsApp'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Indicador de Digitação da IA */}
          {isTyping && (
            <div className="flex items-center gap-2 p-3 text-xs text-purple-300 font-mono animate-pulse">
              <Sparkles className="w-4 h-4 animate-spin text-purple-400" />
              <span>A IA está estruturando a melhor orientação comercial...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ================= SUGESTÕES DE PERGUNTAS RÁPIDAS ================= */}
        <div className="px-4 py-2 bg-[#08090d] border-t border-white/10 overflow-x-auto flex items-center gap-2 shrink-0 scrollbar-none">
          <span className="text-[10px] font-mono text-gray-500 uppercase shrink-0 font-bold">
            💡 Sugestões:
          </span>
          {[
            'O cliente disse que achou caro, como respondo?',
            'O que falar se preferirem Ansul ou Kidde?',
            'Como agendar visita técnica no shopping?',
            'Script para cliente que sumiu no WhatsApp',
            'Como vender o contrato de manutenção de R$ 750/mês?'
          ].map((sugestao, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setInputMessage(sugestao);
              }}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-[11px] font-medium shrink-0 border border-white/5 transition-all text-left"
            >
              {sugestao}
            </button>
          ))}
        </div>

        {/* ================= INPUT DE MENSAGEM LIVRE ================= */}
        <form onSubmit={handleSendMessage} className="p-3 sm:p-4 bg-[#0a0c12] border-t border-purple-500/20 flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Peça orientação à IA para fechar com ${selectedTargetName}... (ex: "Gere uma proposta de R$ 35.000")`}
            className="flex-1 bg-[#131622] border border-white/15 focus:border-purple-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 outline-none transition-all"
          />

          <button
            type="submit"
            disabled={!inputMessage.trim() || isTyping}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-purple-600/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shrink-0"
          >
            <span>Consultar IA</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
