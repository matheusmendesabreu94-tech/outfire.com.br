import React, { useRef, useState } from 'react';
import { Camera, Image as ImageIcon, X, Plus, AlertCircle, Loader2 } from 'lucide-react';

interface MultiPhotoUploadProps {
  photos: string[]; // array de base64 strings
  onPhotosChange: (photos: string[]) => void;
  maxPhotos?: number;
  label?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
}

// Redimensiona e comprime imagem via Canvas para economizar espaço e memória
async function compressImage(file: File, maxWidth = 1200, maxHeight = 1200, quality = 0.75): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target?.result as string;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(img.src);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
}

export const MultiPhotoUpload: React.FC<MultiPhotoUploadProps> = ({
  photos = [],
  onPhotosChange,
  maxPhotos = 10,
  label = 'Fotos & Comprovantes',
  className = '',
  disabled = false,
  required = false,
  helperText = 'Tire foto com a câmera ou escolha da galeria',
}) => {
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0 || disabled) return;
    setError(null);
    setProcessing(true);

    try {
      const availableSlots = maxPhotos - photos.length;
      if (availableSlots <= 0) {
        setError(`Limite máximo de ${maxPhotos} fotos atingido.`);
        setProcessing(false);
        return;
      }

      const filesToProcess = Array.from(files).slice(0, availableSlots);
      const compressedList: string[] = [];

      for (const file of filesToProcess) {
        if (!file.type.startsWith('image/')) continue;
        const base64 = await compressImage(file);
        compressedList.push(base64);
      }

      onPhotosChange([...photos, ...compressedList]);
    } catch (err) {
      console.error('Erro ao processar imagens:', err);
      setError('Falha ao processar uma ou mais fotos.');
    } finally {
      setProcessing(false);
      // Reset inputs
      if (cameraInputRef.current) cameraInputRef.current.value = '';
      if (galleryInputRef.current) galleryInputRef.current.value = '';
    }
  };

  const removePhoto = (index: number) => {
    if (disabled) return;
    const updated = photos.filter((_, i) => i !== index);
    onPhotosChange(updated);
  };

  const canAddMore = photos.length < maxPhotos && !disabled;

  return (
    <div className={`w-full ${className}`}>
      {/* Hidden inputs: Câmera com capture="environment" e Galeria com multiple */}
      <input
        type="file"
        ref={cameraInputRef}
        accept="image/*"
        capture="environment"
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
        disabled={disabled}
      />
      <input
        type="file"
        ref={galleryInputRef}
        accept="image/*"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
        disabled={disabled}
      />

      {/* Header com contador */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-semibold text-gray-300 flex items-center gap-1">
          <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>{label}</span>
          {required && <span className="text-[#d4af37]">*</span>}
        </label>
        <span className="text-[11px] font-mono text-[#d4af37]">
          {photos.length}/{maxPhotos} fotos
        </span>
      </div>

      {helperText && (
        <p className="text-[11px] text-gray-400 mb-2.5">{helperText}</p>
      )}

      {/* Grid de miniaturas e botões */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5">
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="relative group aspect-square rounded-xl overflow-hidden border border-[#d4af37]/40 bg-[#08090b] shadow-md"
          >
            <img
              src={src}
              alt={`Foto ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <button
              type="button"
              onClick={() => removePhoto(idx)}
              disabled={disabled}
              title="Remover foto"
              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-md cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute bottom-0 inset-x-0 bg-black/60 text-[9px] text-center font-mono py-0.5 text-gray-300">
              #{idx + 1}
            </div>
          </div>
        ))}

        {/* Botão Câmera Rápida */}
        {canAddMore && (
          <button
            type="button"
            onClick={() => cameraInputRef.current?.click()}
            disabled={processing}
            className="aspect-square rounded-xl border-2 border-dashed border-[#d4af37]/50 hover:border-[#d4af37] bg-[#14171e]/70 hover:bg-[#d4af37]/10 flex flex-col items-center justify-center gap-1 text-[#f3e5ab] transition-all cursor-pointer group p-2 text-center"
            title="Tirar foto com a câmera"
          >
            {processing ? (
              <Loader2 className="w-5 h-5 text-[#d4af37] animate-spin" />
            ) : (
              <>
                <div className="p-2 rounded-full bg-[#d4af37]/20 group-hover:bg-[#d4af37]/30 text-[#d4af37] transition-colors">
                  <Camera className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-bold text-gray-300 group-hover:text-white leading-tight">
                  Câmera
                </span>
              </>
            )}
          </button>
        )}

        {/* Botão Galeria / Arquivos */}
        {canAddMore && (
          <button
            type="button"
            onClick={() => galleryInputRef.current?.click()}
            disabled={processing}
            className="aspect-square rounded-xl border border-white/15 hover:border-white/30 bg-[#0c0f16] hover:bg-white/5 flex flex-col items-center justify-center gap-1 text-gray-300 hover:text-white transition-all cursor-pointer group p-2 text-center"
            title="Escolher fotos da galeria"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 text-gray-300 group-hover:text-white transition-colors">
              <ImageIcon className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold text-gray-300 group-hover:text-white leading-tight">
              Galeria
            </span>
          </button>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-1.5 mt-2 text-[11px] text-red-400">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
