import React, { useState, useRef } from 'react';
import { 
  X, Upload, FileText, Image as ImageIcon, Trash2, 
  Download, Eye, CheckCircle2, MessageSquare, AlertCircle, 
  ExternalLink, ZoomIn, ZoomOut, RotateCw
} from 'lucide-react';
import { CrmLead, PlantaBaixaLead } from '../../types/crm';
import { saveLeadPlantaBaixa, deleteLeadPlantaBaixa } from '../../utils/crmStorage';

interface PlantaBaixaModalProps {
  lead: CrmLead;
  isOpen: boolean;
  onClose: () => void;
  onOpenProposal: (lead: CrmLead) => void;
  onShowToast: (msg: string) => void;
}

export const PlantaBaixaModal: React.FC<PlantaBaixaModalProps> = ({
  lead,
  isOpen,
  onClose,
  onOpenProposal,
  onShowToast
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [observacoes, setObservacoes] = useState(lead.plantaBaixa?.observacoes || '');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [fullView, setFullView] = useState(false);

  if (!isOpen) return null;

  const cleanPhone = lead.telefone.replace(/\D/g, '');
  const waAskPlantMsg = encodeURIComponent(
    `Olá ${lead.nome}! Aqui é da Engenharia da Outfire. Para fazermos o dimensionamento exato do sistema de combate a incêndio da sua cozinha no ${lead.empresa} (bicos de saponificante, duto de CO2 e tubulação inox), você poderia nos enviar por aqui a planta baixa da cozinha ou o croqui das coifas com as medidas dos equipamentos? Aguardo o envio!`
  );
  const waAskPlantUrl = `https://wa.me/55${cleanPhone}?text=${waAskPlantMsg}`;

  // Processar arquivo selecionado
  const handleProcessFile = (file: File) => {
    if (!file) return;

    // Limite de 10MB
    if (file.size > 10 * 1024 * 1024) {
      onShowToast('O arquivo excede o limite de 10 MB. Selecione um arquivo menor.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const planta: PlantaBaixaLead = {
        url: dataUrl,
        nomeArquivo: file.name,
        tipoArquivo: file.type || 'application/octet-stream',
        tamanhoBytes: file.size,
        dataUpload: new Date().toISOString(),
        observacoes: observacoes.trim() || undefined
      };

      const success = saveLeadPlantaBaixa(lead.id, planta);
      if (success) {
        onShowToast(`Planta baixa "${file.name}" anexada com sucesso ao lead!`);
      } else {
        onShowToast('Erro ao salvar a planta baixa.');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleProcessFile(e.target.files[0]);
    }
  };

  const handleDelete = () => {
    if (confirm(`Deseja realmente remover a planta baixa deste lead (${lead.empresa})?`)) {
      deleteLeadPlantaBaixa(lead.id);
      onShowToast('Planta baixa removida.');
    }
  };

  const formatFileSize = (bytes?: number) => {
    if (!bytes) return 'Tamanho desconhecido';
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isImage = lead.plantaBaixa?.tipoArquivo.startsWith('image/') || 
                  lead.plantaBaixa?.url.startsWith('data:image/');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="bg-[#0b0e14] border border-[#d4af37]/40 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#141824] to-[#0e121a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white font-sans">
                  Planta Baixa & Croqui da Cozinha
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f3e5ab] text-xs font-bold">
                  {lead.empresa}
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">
                Cliente: <strong className="text-white">{lead.nome}</strong> • {lead.telefone}
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo Principal */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 custom-scrollbar">

          {lead.plantaBaixa ? (
            /* ================= Visualizador de Planta Já Anexada ================= */
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#141824] border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                    {isImage ? <ImageIcon className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{lead.plantaBaixa.nomeArquivo}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5 font-mono">
                      {formatFileSize(lead.plantaBaixa.tamanhoBytes)} • Enviado em{' '}
                      {new Date(lead.plantaBaixa.dataUpload).toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={lead.plantaBaixa.url}
                    download={lead.plantaBaixa.nomeArquivo}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baixar</span>
                  </a>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Substituir</span>
                  </button>

                  <button
                    onClick={handleDelete}
                    className="p-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-500/30 transition-all"
                    title="Excluir Planta"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Área de Visualização Interativa */}
              <div className="relative rounded-2xl bg-black border border-white/10 overflow-hidden min-h-[360px] flex flex-col items-center justify-center p-4">
                {isImage ? (
                  <>
                    {/* Controles de Zoom / Rotação */}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-black/80 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
                      <button
                        onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white"
                        title="Diminuir Zoom"
                      >
                        <ZoomOut className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono text-gray-300 px-1">
                        {Math.round(zoomLevel * 100)}%
                      </span>
                      <button
                        onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white"
                        title="Aumentar Zoom"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setRotation(prev => (prev + 90) % 360)}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white"
                        title="Girar Imagem"
                      >
                        <RotateCw className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setZoomLevel(1); setRotation(0); }}
                        className="text-[10px] text-[#d4af37] px-2 py-1 hover:underline font-mono"
                      >
                        Reset
                      </button>
                    </div>

                    <div className="overflow-auto max-h-[500px] w-full flex items-center justify-center">
                      <img 
                        src={lead.plantaBaixa.url} 
                        alt="Planta Baixa da Cozinha"
                        style={{
                          transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                          transition: 'transform 0.2s ease-out'
                        }}
                        className="max-w-full max-h-[460px] object-contain rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
                      />
                    </div>
                  </>
                ) : (
                  /* Visualizador de PDF */
                  <div className="text-center p-8 space-y-4">
                    <FileText className="w-16 h-16 text-amber-400 mx-auto" />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Documento PDF Anexado
                      </h4>
                      <p className="text-xs text-gray-400 max-w-md mx-auto mt-1">
                        O arquivo PDF com o projeto técnico ou planta da cozinha está armazenado no lead.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href={lead.plantaBaixa.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-[#d4af37] hover:bg-[#e6c555] text-black font-bold text-xs flex items-center gap-2 shadow-lg"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Abrir PDF em Nova Aba</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Ação rápida: Gerar Orçamento com base na planta */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      Planta disponível para dimensionamento
                    </h5>
                    <p className="text-xs text-gray-400">
                      Use as medidas da planta para montar a proposta técnica e o memorial de cálculo.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenProposal(lead);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38728] text-black font-extrabold text-xs flex items-center gap-2 shadow-glow-gold hover:brightness-110 transition-all shrink-0"
                >
                  <FileText className="w-4 h-4" />
                  <span>Criar Orçamento para esta Cozinha</span>
                </button>
              </div>

            </div>
          ) : (
            /* ================= Upload de Planta Vazio ================= */
            <div className="space-y-6">
              
              {/* Box de Arraste e Solte */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`p-10 rounded-3xl border-2 border-dashed transition-all text-center cursor-pointer flex flex-col items-center justify-center gap-4 ${
                  isDragging 
                    ? 'border-[#d4af37] bg-[#d4af37]/10 scale-[1.01]' 
                    : 'border-white/15 bg-[#121622] hover:border-[#d4af37]/50 hover:bg-[#161a29]'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Upload className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Clique para selecionar ou arraste a Planta Baixa / Croqui aqui
                  </h4>
                  <p className="text-xs text-gray-400 max-w-md mx-auto">
                    Suporta imagens de alta resolução (<strong>PNG, JPG, JPEG</strong>) e projetos em <strong>PDF</strong> de até 10 MB.
                  </p>
                </div>

                <span className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all">
                  Selecionar Arquivo do Computador
                </span>
              </div>

              {/* Botão de Solicitação Direta via WhatsApp */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-emerald-900/20 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      Cliente ainda não enviou a planta?
                    </h5>
                    <p className="text-xs text-gray-300">
                      Dispare uma mensagem formatada solicitando o croqui ou fotos das coifas com medidas.
                    </p>
                  </div>
                </div>

                <a
                  href={waAskPlantUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Pedir Planta via WhatsApp</span>
                </a>
              </div>

              {/* Orientações Técnicas para o Vendedor/Engenheiro */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                <h6 className="text-xs font-bold text-[#f3e5ab] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>O que analisar na Planta Baixa da Cozinha:</span>
                </h6>
                <ul className="text-xs text-gray-400 space-y-1 list-disc pl-5">
                  <li><strong>Comprimento e largura da coifa:</strong> 1 bico de saponificante a cada 0,6m a 0,8m de frente de cocção.</li>
                  <li><strong>Linha de cocção sob a coifa:</strong> Identificar fritadeiras (óleo), charbroiler/chapa e fogões industriais.</li>
                  <li><strong>Duto de exaustão:</strong> Diâmetro ou seção retangular (exige 1 a 3 bicos injetores de CO2 na entrada do duto).</li>
                  <li><strong>Ponto de fixação da Central Outfire:</strong> Instalar a 1,40m do piso, visível e fora da zona direta de calor.</li>
                </ul>
              </div>

            </div>
          )}

          {/* Input oculto de arquivo */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />

        </div>

        {/* Rodapé do Modal */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0e121a] flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
