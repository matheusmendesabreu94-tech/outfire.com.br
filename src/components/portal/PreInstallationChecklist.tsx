import React, { useState } from 'react';
import { 
  CheckCircle2, AlertTriangle, Clock, ShieldCheck, 
  Camera, Upload, FileText, Send, Check, X, Info, Flame, Wrench
} from 'lucide-react';
import { PreInstallationChecklist as IChecklist, ObraItem } from '../../types/clientPortal';
import { updateChecklist } from '../../utils/portalStorage';

interface Props {
  obra: ObraItem;
  onUpdate: (updatedObra: ObraItem) => void;
}

export const PreInstallationChecklist: React.FC<Props> = ({ obra, onUpdate }) => {
  const current = obra.checklist || {
    id: `chk_${Date.now()}`,
    obraId: obra.id,
    dutoPronto: false,
    coifaInstalada: false,
    painelEletrico220v: false,
    exaustorFuncionando: false,
    portasInspecaoDutos: false,
    redeGasBloqueio: false,
    coccaoPosicionada: false,
    restricaoHorario: 'Livre',
    status: 'pendente',
    atualizadoEm: new Date().toISOString()
  };

  const [form, setForm] = useState<IChecklist>(current);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Calcula itens concluídos (7 itens de infraestrutura)
  const itemsCount = [
    form.dutoPronto,
    form.coifaInstalada,
    form.painelEletrico220v,
    form.exaustorFuncionando,
    form.portasInspecaoDutos,
    form.redeGasBloqueio,
    form.coccaoPosicionada
  ].filter(Boolean).length;

  const readinessPercent = Math.round((itemsCount / 7) * 100);

  const handleToggle = (key: keyof IChecklist) => {
    setForm(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = (submitForReview = false) => {
    const updatedStatus = submitForReview && itemsCount === 7 
      ? 'em_analise' 
      : form.status;

    const saved = updateChecklist(obra.id, {
      ...form,
      status: updatedStatus
    });

    setForm(saved);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);

    // Se enviado para revisão, abre o WhatsApp da engenharia Outfire com o aviso
    if (submitForReview) {
      const msg = `📋 *CHECKLIST PRÉ-INSTALAÇÃO ENVIADO PELO PORTAL OUTFIRE*\n\n` +
        `🏢 *Loja:* ${obra.nomeLoja}\n` +
        `📍 *Endereço:* ${obra.endereco} - ${obra.cidade}/${obra.uf}\n` +
        `✅ *Prontidão da Cozinha:* ${readinessPercent}% (${itemsCount}/7 itens)\n` +
        `⏰ *Horário Permitido:* ${form.restricaoHorario}\n` +
        `📅 *Data Pretendida:* ${form.dataPretendida || 'A definir'}\n\n` +
        `Engenheiro Robson, os dados de infraestrutura e fotos foram inseridos no portal. Solicito a validação e o agendamento da visita técnica!`;

      const url = `https://wa.me/5511916999411?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    }
  };

  // Simula upload de foto com compressão para WebP
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'dutoFotoUrl' | 'coifaFotoUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setForm(prev => ({ ...prev, [field]: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* 1. Header & Readiness Meter */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#12141c] via-[#1a1710] to-[#12141c] border border-amber-500/30 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-[#e5c05d] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Checklist Obrigatório de Pré-Instalação
            </div>
            <h3 className="text-xl font-black text-white">
              Validação das Condições da Cozinha
            </h3>
            <p className="text-xs text-gray-400 mt-1 max-w-2xl">
              Para garantir que a instalação ocorra sem imprevistos e sem custos adicionais de diárias de deslocamento, 
              confirme se os 8 requisitos abaixo estão prontos antes do envio do técnico credenciado Outfire.
            </p>
          </div>

          <div className="bg-[#0e1014] p-4 rounded-xl border border-white/10 shrink-0 text-center min-w-[200px]">
            <span className="text-[11px] font-mono uppercase text-gray-400 font-bold block">
              Prontidão da Obra
            </span>
            <div className="text-3xl font-black text-amber-400 my-1 font-mono">
              {readinessPercent}%
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500"
                style={{ width: `${readinessPercent}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-400 mt-1 block">
              {itemsCount} de 7 requisitos atendidos
            </span>
          </div>
        </div>

        {/* Status Alert Banner */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-400">Status atual:</span>
            {form.status === 'aprovado_engenharia' ? (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Aprovado pela Engenharia (Técnico Liberado)
              </span>
            ) : form.status === 'em_analise' ? (
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Em Análise pela Engenharia
              </span>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> Pendente de Preenchimento pelo Cliente
              </span>
            )}
          </div>

          {savedSuccess && (
            <span className="text-xs text-emerald-400 font-bold animate-pulse flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Alterações salvas com sucesso!
            </span>
          )}
        </div>
      </div>

      {/* 2. Os 8 Requisitos Detalhados */}
      <div className="space-y-4">

        {/* 1. Duto de Exaustão */}
        <div className={`p-5 rounded-2xl border transition-all ${form.dutoPronto ? 'bg-[#0f1412] border-emerald-500/30' : 'bg-[#12141a] border-white/10'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => handleToggle('dutoPronto')}
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  form.dutoPronto ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 border border-white/20'
                }`}
              >
                {form.dutoPronto && <Check className="w-4 h-4 stroke-[3]" />}
              </button>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>1. Duto de Exaustão Fabricado e Fixado</span>
                  {form.dutoPronto ? (
                    <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PRONTO</span>
                  ) : (
                    <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">PENDENTE</span>
                  )}
                </h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  O duto precisa estar totalmente montado com solda contínua e estanque, com bocal para injeção de CO2 ou saponificante.
                </p>
              </div>
            </div>

            <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5 shrink-0 transition-all">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>{form.dutoFotoUrl ? 'Alterar Foto' : 'Anexar Foto'}</span>
              <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, 'dutoFotoUrl')} className="hidden" />
            </label>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-white/5">
            <input
              type="text"
              placeholder="Observações do duto (ex: duto soldado em chapa 1.37mm, altura de 4 metros)"
              value={form.dutoObs || ''}
              onChange={(e) => setForm({ ...form, dutoObs: e.target.value })}
              className="w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
            />
            {form.dutoFotoUrl && (
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Foto do duto anexada com sucesso
              </div>
            )}
          </div>
        </div>

        {/* 2. Coifa Industrial */}
        <div className={`p-5 rounded-2xl border transition-all ${form.coifaInstalada ? 'bg-[#0f1412] border-emerald-500/30' : 'bg-[#12141a] border-white/10'}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => handleToggle('coifaInstalada')}
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  form.coifaInstalada ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 border border-white/20'
                }`}
              >
                {form.coifaInstalada && <Check className="w-4 h-4 stroke-[3]" />}
              </button>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>2. Coifa Industrial Chumbada e Nivelada</span>
                  {form.coifaInstalada ? (
                    <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PRONTO</span>
                  ) : (
                    <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">PENDENTE</span>
                  )}
                </h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  A coifa deve estar em sua posição final definitiva sobre os blocos de cocção para receber a tubulação de aço inox e os bicos aspersores.
                </p>
              </div>
            </div>

            <label className="cursor-pointer px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 flex items-center gap-1.5 shrink-0 transition-all">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>{form.coifaFotoUrl ? 'Alterar Foto' : 'Anexar Foto'}</span>
              <input type="file" accept="image/*" onChange={(e) => handlePhotoUpload(e, 'coifaFotoUrl')} className="hidden" />
            </label>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-white/5">
            <input
              type="text"
              placeholder="Observações da coifa (ex: coifa central 3x1.2m em aço inox 304 com calhas)"
              value={form.coifaObs || ''}
              onChange={(e) => setForm({ ...form, coifaObs: e.target.value })}
              className="w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
            />
            {form.coifaFotoUrl && (
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <Check className="w-3.5 h-3.5" /> Foto da coifa anexada com sucesso
              </div>
            )}
          </div>
        </div>

        {/* 3. Painel Elétrico 220V */}
        <div className={`p-5 rounded-2xl border transition-all ${form.painelEletrico220v ? 'bg-[#0f1412] border-emerald-500/30' : 'bg-[#12141a] border-white/10'}`}>
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => handleToggle('painelEletrico220v')}
              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                form.painelEletrico220v ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 border border-white/20'
              }`}
            >
              {form.painelEletrico220v && <Check className="w-4 h-4 stroke-[3]" />}
            </button>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>3. Ponto Elétrico 220V / 110V com Aterramento Próximo à Central</span>
                {form.painelEletrico220v ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PRONTO</span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">PENDENTE</span>
                )}
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Ponto de alimentação para a fonte interna da Central Outfire VTS 32S3 e carregador de baterias 12V.
              </p>
              <input
                type="text"
                placeholder="Ex: Tomada 220V com disjuntor de 10A dedicada a 1m do local da central"
                value={form.painelObs || ''}
                onChange={(e) => setForm({ ...form, painelObs: e.target.value })}
                className="mt-2.5 w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* 4. Exaustor Operacional */}
        <div className={`p-5 rounded-2xl border transition-all ${form.exaustorFuncionando ? 'bg-[#0f1412] border-emerald-500/30' : 'bg-[#12141a] border-white/10'}`}>
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => handleToggle('exaustorFuncionando')}
              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                form.exaustorFuncionando ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 border border-white/20'
              }`}
            >
              {form.exaustorFuncionando && <Check className="w-4 h-4 stroke-[3]" />}
            </button>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>4. Exaustor / Motor em Funcionamento e Testado</span>
                {form.exaustorFuncionando ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PRONTO</span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">PENDENTE</span>
                )}
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                A central possui relé de intertravamento para ligar o exaustor no modo de emergência ou desarmar a tiragem na injeção de CO2.
              </p>
              <input
                type="text"
                placeholder="Ex: Motor siroco 3CV trifásico com chave contatora e partida direta"
                value={form.exaustorObs || ''}
                onChange={(e) => setForm({ ...form, exaustorObs: e.target.value })}
                className="mt-2.5 w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* 5. Portas de Acesso / Inspeção */}
        <div className={`p-5 rounded-2xl border transition-all ${form.portasInspecaoDutos ? 'bg-[#0f1412] border-emerald-500/30' : 'bg-[#12141a] border-white/10'}`}>
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => handleToggle('portasInspecaoDutos')}
              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                form.portasInspecaoDutos ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 border border-white/20'
              }`}
            >
              {form.portasInspecaoDutos && <Check className="w-4 h-4 stroke-[3]" />}
            </button>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>5. Portas de Acesso e Inspeção nos Dutos (NBR 14518)</span>
                {form.portasInspecaoDutos ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PRONTO</span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">PENDENTE</span>
                )}
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Exigência do Corpo de Bombeiros e NBR 14518: portas estanques a cada 3 metros e em todas as mudanças de direção/curvas do duto.
              </p>
              <input
                type="text"
                placeholder="Ex: 2 portas de inspeção instaladas nas curvas com vedação em gaxeta de silicone"
                value={form.portasObs || ''}
                onChange={(e) => setForm({ ...form, portasObs: e.target.value })}
                className="mt-2.5 w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* 6. Rede de Gás */}
        <div className={`p-5 rounded-2xl border transition-all ${form.redeGasBloqueio ? 'bg-[#0f1412] border-emerald-500/30' : 'bg-[#12141a] border-white/10'}`}>
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => handleToggle('redeGasBloqueio')}
              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                form.redeGasBloqueio ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 border border-white/20'
              }`}
            >
              {form.redeGasBloqueio && <Check className="w-4 h-4 stroke-[3]" />}
            </button>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>6. Tubulação de Gás com Ponto para Válvula de Corte</span>
                {form.redeGasBloqueio ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PRONTO</span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">PENDENTE</span>
                )}
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Ramal de GLP ou Gás Natural pronto para receber a solenoide de intertravamento comandada pela Central Outfire.
              </p>
              <input
                type="text"
                placeholder="Ex: Tubulação de cobre 1 polegada com válvula esfera de bloqueio instalada"
                value={form.gasObs || ''}
                onChange={(e) => setForm({ ...form, gasObs: e.target.value })}
                className="mt-2.5 w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* 7. Equipamentos de Cocção Posicionados */}
        <div className={`p-5 rounded-2xl border transition-all ${form.coccaoPosicionada ? 'bg-[#0f1412] border-emerald-500/30' : 'bg-[#12141a] border-white/10'}`}>
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => handleToggle('coccaoPosicionada')}
              className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                form.coccaoPosicionada ? 'bg-emerald-500 text-black font-bold' : 'bg-white/10 border border-white/20'
              }`}
            >
              {form.coccaoPosicionada && <Check className="w-4 h-4 stroke-[3]" />}
            </button>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>7. Equipamentos de Cocção no Posicionamento Definitivo</span>
                {form.coccaoPosicionada ? (
                  <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded">PRONTO</span>
                ) : (
                  <span className="text-[10px] text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">PENDENTE</span>
                )}
              </h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Cada bico aspersor possui ângulo e vazão calculada especificamente para o centro de cada fritadeira, chapa ou fogão.
              </p>
              <input
                type="text"
                placeholder="Ex: 2 Fritadeiras Pitco 20L e 1 Charbroiler já nivelados sob a coifa"
                value={form.coccaoObs || ''}
                onChange={(e) => setForm({ ...form, coccaoObs: e.target.value })}
                className="mt-2.5 w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

        {/* 8. Restrições de Horário e Data Pretendida */}
        <div className="p-5 rounded-2xl bg-[#12141a] border border-white/10">
          <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>8. Horários de Trabalho Permitidos e Previsão</span>
          </h4>
          <p className="text-xs text-gray-400 mb-3">
            Para que nossa equipe não atrapalhe a operação nem o atendimento do restaurante:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-gray-300 block mb-1">
                Restrição de Horário da Cozinha:
              </label>
              <input
                type="text"
                placeholder="Ex: De segunda a quarta, das 06h às 11h"
                value={form.restricaoHorario}
                onChange={(e) => setForm({ ...form, restricaoHorario: e.target.value })}
                className="w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-300 block mb-1">
                Data Pretendida para a Instalação:
              </label>
              <input
                type="date"
                value={form.dataPretendida || ''}
                onChange={(e) => setForm({ ...form, dataPretendida: e.target.value })}
                className="w-full bg-black/40 border border-white/10 text-xs text-white rounded-lg px-3 py-2 outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>

      </div>

      {/* 3. Actions Toolbar */}
      <div className="p-5 rounded-2xl bg-[#0e1014] border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-400 flex items-center gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Ao enviar, a equipe de engenharia é notificada para validar as fotos e emitir a ordem de serviço.</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => handleSave(false)}
            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-200 transition-all"
          >
            Salvar Rascunho
          </button>
          
          <button
            type="button"
            onClick={() => handleSave(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89628] text-black text-xs font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Enviar para Engenharia Outfire</span>
          </button>
        </div>
      </div>

    </div>
  );
};
