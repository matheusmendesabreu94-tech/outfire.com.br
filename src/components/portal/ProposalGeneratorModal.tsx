import React, { useState, useEffect } from 'react';
import { 
  X, FileText, Printer, MessageSquare, Download, CheckCircle2, 
  Plus, Trash2, ShieldCheck, DollarSign, Clock, Calendar, 
  Building2, Edit2, Copy, Sparkles, AlertCircle, Wrench
} from 'lucide-react';
import { CrmLead, LeadProposal, ProposalItem } from '../../types/crm';
import { saveLeadProposal, deleteLeadProposal } from '../../utils/crmStorage';

interface ProposalGeneratorModalProps {
  lead: CrmLead;
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

// Itens padrão do Kit Outfire para Cozinhas de Shopping
const DEFAULT_PROPOSAL_ITEMS: ProposalItem[] = [
  {
    id: 'item_central',
    descricao: 'Central Inteligente de Detecção e Combate OutFire VTS 32S3 com IHM Touchscreen, avisos de voz em português, bateria reserva e nobreak embutido',
    quantidade: 1,
    unidade: 'unid',
    valorUnitario: 3850,
    valorTotal: 3850
  },
  {
    id: 'item_saponificante',
    descricao: 'Cilindro em Aço Inox 12 Litros com Válvula Solenoide de Abertura Rápida, manômetro de pressão e Agente Extintor Saponificante Classe K biodegradável',
    quantidade: 1,
    unidade: 'unid',
    valorUnitario: 2450,
    valorTotal: 2450
  },
  {
    id: 'item_co2',
    descricao: 'Cilindro de CO2 10 kg Alta Pressão em aço sem costura para supressão rápida em dutos e curvas de exaustão',
    quantidade: 1,
    unidade: 'unid',
    valorUnitario: 1650,
    valorTotal: 1650
  },
  {
    id: 'item_bicos_inox',
    descricao: 'Kit de Bicos de Aspersão em Aço Inox 304: 7 bicos especiais para saponificante na linha de cocção + 3 bicos injetores de CO2 para o duto',
    quantidade: 1,
    unidade: 'kit',
    valorUnitario: 1120,
    valorTotal: 1120
  },
  {
    id: 'item_tubulacao',
    descricao: 'Linha de Tubulação em Aço Inox 304, Conexões T e Curvas de Alta Pressão, mangueiras hidráulicas flexíveis de alta pressão R1 (saponificante e CO2)',
    quantidade: 1,
    unidade: 'kit',
    valorUnitario: 890,
    valorTotal: 890
  },
  {
    id: 'item_sensores_gas',
    descricao: 'Sensores Térmicos Blindados de Alta Temperatura (145°C/300°C) + Detector de Vazamento de Gás GLP/GN Intelbras para corte automático de gás',
    quantidade: 1,
    unidade: 'kit',
    valorUnitario: 780,
    valorTotal: 780
  },
  {
    id: 'item_acionador_sirene',
    descricao: 'Acionador Manual de Emergência Vermelho Intelbras com quebre-o-vidro e martelinho + Sirene Audiovisual Vermelha Estroboscópica',
    quantidade: 1,
    unidade: 'kit',
    valorUnitario: 460,
    valorTotal: 460
  },
  {
    id: 'item_instalacao_noturna',
    descricao: 'Mão de Obra Especializada em Turno Noturno (23h às 06h - Sem paralisação das operações do shopping), fixação, cabeamento e testes de estanqueidade',
    quantidade: 1,
    unidade: 'serviço',
    valorUnitario: 2500,
    valorTotal: 2500
  },
  {
    id: 'item_art_laudo',
    descricao: 'Emissão de ART (Anotação de Responsabilidade Técnica) no CREA assinada por Engenheiro Especialista + Laudo de Estanqueidade ABNT NBR 14518 para AVCB',
    quantidade: 1,
    unidade: 'laudo',
    valorUnitario: 850,
    valorTotal: 850
  }
];

export const ProposalGeneratorModal: React.FC<ProposalGeneratorModalProps> = ({
  lead,
  isOpen,
  onClose,
  onShowToast
}) => {
  // Inicialização do estado da proposta
  const [proposalNumber, setProposalNumber] = useState<string>(() => {
    if (lead.propostaComercial?.numeroProposta) return lead.propostaComercial.numeroProposta;
    const year = new Date().getFullYear();
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `OUT-${year}-${rand}`;
  });

  const [validadeDias, setValidadeDias] = useState<number>(lead.propostaComercial?.validadeDias || 15);
  const [responsavelTecnico, setResponsavelTecnico] = useState<string>(
    lead.propostaComercial?.responsavelTecnico || 'Eng. Robson Mendes — CREA/SP 506.912/D'
  );
  const [artCrea, setArtCrea] = useState<string>(
    lead.propostaComercial?.artCrea || 'ART Nacional Bombeiros / CREA nº 2026/SP-9418'
  );
  const [condicoesPagamento, setCondicoesPagamento] = useState<string>(
    lead.propostaComercial?.condicoesPagamento || '40% de sinal no pedido + 60% faturado em 3x sem juros (ou 5% desc. via PIX à vista)'
  );
  const [prazoExecucao, setPrazoExecucao] = useState<string>(
    lead.propostaComercial?.prazoExecucao || '1 a 2 turnos noturnos (23h às 06h) — Cozinha 100% liberada e operacional às 06h'
  );
  const [observacoesGerais, setObservacoesGerais] = useState<string>(
    lead.propostaComercial?.observacoesGerais ||
    `Dimensionamento específico para a cozinha do ${lead.empresa}. Sistema integralmente conforme com ABNT NBR 14518:2020 e normas do Corpo de Bombeiros / AVCB.`
  );

  const [incluiArtCrea, setIncluiArtCrea] = useState<boolean>(lead.propostaComercial?.incluiArtCrea ?? true);
  const [incluiLaudoEstanqueidade, setIncluiLaudoEstanqueidade] = useState<boolean>(lead.propostaComercial?.incluiLaudoEstanqueidade ?? true);
  const [incluiTreinamentoBrigada, setIncluiTreinamentoBrigada] = useState<boolean>(lead.propostaComercial?.incluiTreinamentoBrigada ?? true);
  const [garantiaMeses, setGarantiaMeses] = useState<number>(lead.propostaComercial?.garantiaMeses || 12);

  // Itens da Proposta
  const [items, setItems] = useState<ProposalItem[]>(() => {
    if (lead.propostaComercial?.itens && lead.propostaComercial.itens.length > 0) {
      return lead.propostaComercial.itens;
    }
    return DEFAULT_PROPOSAL_ITEMS;
  });

  const [desconto, setDesconto] = useState<number>(lead.propostaComercial?.desconto || 0);

  // Cálculos
  const valorEquipamentos = items
    .filter(i => !i.descricao.toLowerCase().includes('mão de obra') && !i.descricao.toLowerCase().includes('instalação'))
    .reduce((acc, curr) => acc + curr.valorTotal, 0);

  const valorMaoDeObra = items
    .filter(i => i.descricao.toLowerCase().includes('mão de obra') || i.descricao.toLowerCase().includes('instalação'))
    .reduce((acc, curr) => acc + curr.valorTotal, 0);

  const subtotalGeral = items.reduce((acc, curr) => acc + curr.valorTotal, 0);
  const valorFinal = Math.max(0, subtotalGeral - desconto);

  // Manipulação de Itens
  const handleUpdateItemQty = (id: string, qty: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const quantidade = Math.max(1, qty);
        return { ...item, quantidade, valorTotal: quantidade * item.valorUnitario };
      }
      return item;
    }));
  };

  const handleUpdateItemPrice = (id: string, price: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === id) {
        const valorUnitario = Math.max(0, price);
        return { ...item, valorUnitario, valorTotal: item.quantidade * valorUnitario };
      }
      return item;
    }));
  };

  const handleDeleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAddNewItem = () => {
    const newItem: ProposalItem = {
      id: `item_custom_${Date.now()}`,
      descricao: 'Item adicional de engenharia / acessório sob medida',
      quantidade: 1,
      unidade: 'unid',
      valorUnitario: 350,
      valorTotal: 350
    };
    setItems(prev => [...prev, newItem]);
  };

  // Salvar no CRM Lead
  const handleSaveProposal = () => {
    const proposal: LeadProposal = {
      id: lead.propostaComercial?.id || `prop_${Date.now()}`,
      numeroProposta: proposalNumber,
      dataCriacao: new Date().toISOString(),
      validadeDias,
      responsavelTecnico,
      artCrea,
      valorEquipamentos,
      valorMaoDeObra,
      desconto,
      valorFinal,
      condicoesPagamento,
      prazoExecucao,
      incluiArtCrea,
      incluiLaudoEstanqueidade,
      incluiTreinamentoBrigada,
      garantiaMeses,
      itens: items,
      observacoesGerais,
      statusProposta: 'enviada'
    };

    const success = saveLeadProposal(lead.id, proposal);
    if (success) {
      onShowToast(`Proposta nº ${proposalNumber} salva com sucesso no Lead e status atualizado!`);
    } else {
      onShowToast('Erro ao salvar proposta no Lead.');
    }
  };

  // Enviar Proposta via WhatsApp
  const cleanPhone = lead.telefone.replace(/\D/g, '');
  const waProposalText = encodeURIComponent(
`*OUTFIRE ENGENHARIA CONTRA INCÊNDIO*
*Proposta Comercial & Técnica Nº ${proposalNumber}*

Olá *${lead.nome}*! Conforme conversamos sobre o *${lead.empresa}*, segue a nossa proposta técnica para o sistema de combate a incêndio de coifas e dutos:

✅ *Sistema Completo:* Central OutFire VTS 32S3 com IHM Touchscreen e avisos de voz
✅ *Agentes Extintores:* Cilindro Inox 12L Saponificante Classe K + Cilindro CO2 10kg Alta Pressão para Dutos
✅ *Componentes:* Bicos Inox 304, tubulações, acionador manual Intelbras, sirene audiovisual e detector de gás
✅ *Montagem Noturna:* 23h às 06h (sem paralisação da cozinha / shopping)
✅ *Documentação Inclusa:* ART no CREA + Laudo de Estanqueidade NBR 14518 + FISPQ Classe K

💰 *Investimento Total:* ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
💳 *Condições:* ${condicoesPagamento}
⏳ *Prazo de Instalação:* ${prazoExecucao}
🛡️ *Garantia Oficial:* 12 Meses

Estou à disposição para tirarmos qualquer dúvida ou agendarmos a visita técnica!`
  );
  const waProposalUrl = `https://wa.me/55${cleanPhone}?text=${waProposalText}`;

  // Copiar Resumo
  const handleCopySummary = () => {
    const text = decodeURIComponent(waProposalText);
    navigator.clipboard.writeText(text);
    onShowToast('Resumo da proposta copiado para a área de transferência!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white print:fixed print:inset-0">
      
      {/* Container Principal */}
      <div 
        className="bg-[#0b0e14] border border-[#d4af37]/40 rounded-3xl w-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-w-full print:max-h-full print:rounded-none print:bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ================= BARRA SUPERIOR (NÃO IMPRESSA) ================= */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-[#141824] to-[#0e121a] print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white font-sans">
                  Gerador de Orçamento & Proposta Executiva
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-bold font-mono">
                  {proposalNumber}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Cliente: <strong className="text-white">{lead.empresa}</strong> ({lead.nome})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveProposal}
              className="px-3.5 py-2 rounded-xl bg-[#d4af37] hover:bg-[#e6c555] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-glow-gold transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Salvar no Lead</span>
            </button>

            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Imprimir / Salvar PDF</span>
            </button>

            <a
              href={waProposalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={handleCopySummary}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
              title="Copiar Resumo"
            >
              <Copy className="w-4 h-4" />
            </button>

            <button 
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= DOCUMENTO IMPRIMÍVEL / VISUALIZADOR ================= */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 custom-scrollbar bg-[#0d1017] text-gray-200 print:bg-white print:text-black print:p-8 print:overflow-visible">
          
          {/* Cabeçalho Oficial Papel Timbrado OutFire */}
          <div className="border-b-2 border-[#d4af37] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="/assets/logo-outfire-gold.png" 
                alt="OutFire Engenharia" 
                className="h-12 sm:h-14 w-auto object-contain"
                onError={(e: any) => { e.currentTarget.src = '/assets/logo-outfire.png'; }}
              />
              <div>
                <h1 className="text-xl font-black text-white print:text-black tracking-wider">
                  OUTFIRE ENGENHARIA
                </h1>
                <p className="text-[11px] text-gray-400 print:text-gray-600 uppercase tracking-widest font-mono">
                  Sistemas Inteligentes de Supressão & Detecção
                </p>
              </div>
            </div>

            <div className="text-right text-xs text-gray-400 print:text-gray-600 space-y-0.5">
              <p><strong className="text-white print:text-black font-mono">{proposalNumber}</strong></p>
              <p>Data de Emissão: {new Date().toLocaleDateString('pt-BR')}</p>
              <p>Validade: <strong>{validadeDias} dias corridos</strong></p>
              <p>Engenharia: (11) 94732-0947 • contato@outfire.com.br</p>
            </div>
          </div>

          {/* Dados do Cliente e Responsável Técnico */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
            
            {/* Box Cliente */}
            <div className="p-4 rounded-2xl bg-[#141824] border border-white/10 print:bg-gray-50 print:border-gray-300">
              <div className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Dados do Cliente / Restaurante</span>
              </div>
              <h4 className="text-base font-black text-white print:text-black">
                {lead.empresa}
              </h4>
              <p className="text-xs text-gray-300 print:text-gray-700 mt-1">
                Responsável: <strong>{lead.nome}</strong> {lead.cargo ? `(${lead.cargo})` : ''}
              </p>
              <p className="text-xs text-gray-300 print:text-gray-700">
                Contato: {lead.telefone} • {lead.email}
              </p>
              <p className="text-xs text-gray-300 print:text-gray-700">
                Localização: {lead.cidade || 'Não informada'} {lead.estado ? `(${lead.estado})` : ''}
              </p>
              {lead.tipoCozinha && (
                <p className="text-xs text-gray-400 print:text-gray-600 mt-1">
                  Perfil de Cocção: <span className="font-semibold text-amber-300 print:text-amber-800">{lead.tipoCozinha}</span>
                </p>
              )}
            </div>

            {/* Box Engenharia e Normas */}
            <div className="p-4 rounded-2xl bg-[#141824] border border-white/10 print:bg-gray-50 print:border-gray-300">
              <div className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Engenharia & Responsabilidade Técnica</span>
              </div>
              <p className="text-xs text-gray-300 print:text-gray-700">
                Engenheiro Resp.: <strong className="text-white print:text-black">{responsavelTecnico}</strong>
              </p>
              <p className="text-xs text-gray-300 print:text-gray-700 mt-1">
                Anotação de Responsabilidade: <span className="font-mono text-emerald-400 print:text-emerald-700">{artCrea}</span>
              </p>
              <p className="text-xs text-gray-300 print:text-gray-700 mt-1">
                Normas Vigentes: <strong>ABNT NBR 14518:2020 • NFPA 17A • NFPA 96 • IT Bombeiros</strong>
              </p>
              <p className="text-xs text-gray-400 print:text-gray-600 mt-1">
                Turno de Montagem: <strong>Noturno (23h às 06h)</strong> sem parada do shopping
              </p>
            </div>

          </div>

          {/* Tabela de Itens Dimensionados */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-[#d4af37] uppercase tracking-wider flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                <span>Memorial Descritivo de Equipamentos & Serviços Dimensionados</span>
              </h4>
              <button
                type="button"
                onClick={handleAddNewItem}
                className="print:hidden text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-bold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar Item</span>
              </button>
            </div>

            <div className="rounded-2xl border border-white/10 overflow-hidden print:border-gray-300">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#141824] text-gray-300 print:bg-gray-100 print:text-gray-800 border-b border-white/10 print:border-gray-300">
                    <th className="p-3 w-12 text-center">Item</th>
                    <th className="p-3">Descrição Detalhada</th>
                    <th className="p-3 w-20 text-center">Qtd</th>
                    <th className="p-3 w-28 text-right">Unitário</th>
                    <th className="p-3 w-28 text-right">Total</th>
                    <th className="p-3 w-10 text-center print:hidden"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 print:divide-gray-200">
                  {items.map((item, index) => (
                    <tr key={item.id} className="hover:bg-white/5 print:hover:bg-transparent">
                      <td className="p-3 text-center font-mono text-gray-400 print:text-gray-600">
                        {String(index + 1).padStart(2, '0')}
                      </td>
                      <td className="p-3 font-medium text-white print:text-black">
                        {item.descricao}
                      </td>
                      <td className="p-3 text-center">
                        <input
                          type="number"
                          min={1}
                          value={item.quantidade}
                          onChange={(e) => handleUpdateItemQty(item.id, parseInt(e.target.value) || 1)}
                          className="w-14 text-center bg-black/40 border border-white/10 rounded-lg p-1 text-white print:bg-transparent print:border-none print:text-black focus:outline-none focus:border-[#d4af37]"
                        />
                      </td>
                      <td className="p-3 text-right font-mono text-gray-300 print:text-black">
                        {item.valorUnitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </td>
                      <td className="p-3 text-right font-mono font-bold text-[#d4af37] print:text-black">
                        {item.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </td>
                      <td className="p-3 text-center print:hidden">
                        <button
                          type="button"
                          onClick={() => handleDeleteItem(item.id)}
                          className="text-gray-500 hover:text-red-400 p-1"
                          title="Remover Item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totais & Fechamento Financeiro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Garantias & Conformidades Inclusas */}
            <div className="p-4 rounded-2xl bg-[#141824] border border-white/10 space-y-2.5 print:bg-gray-50 print:border-gray-300 text-xs">
              <span className="font-bold text-[#f3e5ab] print:text-black block uppercase tracking-wider text-[11px]">
                🛡️ Garantias e Documentações Inclusas nesta Proposta:
              </span>
              
              <div className="space-y-1.5 text-gray-300 print:text-gray-700">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={incluiArtCrea}
                    onChange={(e) => setIncluiArtCrea(e.target.checked)}
                    className="rounded border-gray-600 text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <span><strong>ART no CREA</strong> com recolhimento e taxa de engenharia inclusa</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={incluiLaudoEstanqueidade}
                    onChange={(e) => setIncluiLaudoEstanqueidade(e.target.checked)}
                    className="rounded border-gray-600 text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <span><strong>Laudo de Estanqueidade Pneumática (150 PSI)</strong> e teste de disparo</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={incluiTreinamentoBrigada}
                    onChange={(e) => setIncluiTreinamentoBrigada(e.target.checked)}
                    className="rounded border-gray-600 text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <span><strong>Treinamento da Equipe / Brigada</strong> da cozinha com certificado</span>
                </label>

                <p className="pt-1 text-gray-400 print:text-gray-600">
                  Garantia Integral de <strong>{garantiaMeses} Meses</strong> contra defeitos de fabricação em todos os componentes.
                </p>
              </div>
            </div>

            {/* Quadro de Valores */}
            <div className="p-5 rounded-2xl bg-[#141824] border border-[#d4af37]/30 space-y-3 print:bg-gray-50 print:border-gray-400">
              <div className="flex justify-between text-xs text-gray-400 print:text-gray-600">
                <span>Subtotal Equipamentos:</span>
                <span className="font-mono text-white print:text-black">{valorEquipamentos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>

              <div className="flex justify-between text-xs text-gray-400 print:text-gray-600">
                <span>Mão de Obra e Instalação Noturna:</span>
                <span className="font-mono text-white print:text-black">{valorMaoDeObra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>

              {/* Campo Desconto */}
              <div className="flex items-center justify-between text-xs text-gray-400 print:text-gray-600">
                <span>Desconto Comercial Aplicado:</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">R$</span>
                  <input
                    type="number"
                    min={0}
                    value={desconto}
                    onChange={(e) => setDesconto(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-24 text-right bg-black/40 border border-white/10 rounded-lg p-1 text-emerald-400 font-mono font-bold print:bg-transparent print:border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 print:border-gray-300 flex justify-between items-baseline">
                <span className="text-sm font-black text-white print:text-black uppercase">
                  Valor Total da Proposta:
                </span>
                <span className="text-2xl font-black text-[#d4af37] print:text-black font-mono">
                  {valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </span>
              </div>

              <div className="text-[11px] text-gray-400 print:text-gray-600 pt-1 border-t border-white/5 space-y-1">
                <p><strong>Condições de Pagamento:</strong> {condicoesPagamento}</p>
                <p><strong>Prazo de Instalação:</strong> {prazoExecucao}</p>
              </div>
            </div>

          </div>

          {/* Observações Gerais e Assinaturas */}
          <div className="pt-4 border-t border-white/10 print:border-gray-300 space-y-4">
            
            <div>
              <span className="text-xs font-bold text-gray-300 print:text-gray-700 block mb-1">
                Observações Técnicas e Instruções ao Shopping:
              </span>
              <textarea
                value={observacoesGerais}
                onChange={(e) => setObservacoesGerais(e.target.value)}
                rows={2}
                className="w-full bg-[#141824] border border-white/10 rounded-xl p-3 text-xs text-gray-300 print:bg-transparent print:border-none print:p-0 print:text-black focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Bloco de Assinaturas (Padrão Engenharia) */}
            <div className="grid grid-cols-2 gap-8 pt-8 print:pt-12 text-center text-xs text-gray-400 print:text-gray-700">
              <div className="border-t border-gray-600 print:border-gray-400 pt-2">
                <strong className="text-white print:text-black block text-sm">
                  OUTFIRE ENGENHARIA CONTRA INCÊNDIO
                </strong>
                <span>{responsavelTecnico}</span>
              </div>

              <div className="border-t border-gray-600 print:border-gray-400 pt-2">
                <strong className="text-white print:text-black block text-sm">
                  {lead.empresa}
                </strong>
                <span>De Acordo / Assinatura do Cliente ({lead.nome})</span>
              </div>
            </div>

          </div>

        </div>

        {/* ================= RODAPÉ DO MODAL (NÃO IMPRESSO) ================= */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e121a] flex flex-wrap items-center justify-between gap-3 print:hidden">
          <div className="text-xs text-gray-400">
            Validade: <strong>{validadeDias} dias</strong> • Garantia: <strong>{garantiaMeses} meses</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveProposal}
              className="px-4 py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#e6c555] text-black font-extrabold text-xs flex items-center gap-1.5 shadow-glow-gold transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Salvar Orçamento no Lead</span>
            </button>

            <a
              href={waProposalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enviar via WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

