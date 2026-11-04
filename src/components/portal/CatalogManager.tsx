import React, { useState, useRef } from 'react';
import { 
  Plus, Edit3, Trash2, Image as ImageIcon, Check, X, 
  Search, Filter, RotateCcw, Copy, Star, Tag, AlertCircle, 
  Upload, Link as LinkIcon, CheckCircle2, Eye, ShoppingCart, DollarSign
} from 'lucide-react';
import { ProductItem } from '../../types';
import { 
  useStoreCatalog, 
  saveCatalogProduct, 
  deleteCatalogProduct, 
  resetCatalogToDefault,
  OUTFIRE_ASSET_GALLERY 
} from '../../utils/catalogStorage';

const CATEGORIAS_CONFIG: { id: ProductItem['category']; label: string; color: string }[] = [
  { id: 'kit', label: 'Sistemas & Centrais VTS', color: 'bg-amber-500/20 text-[#f3e5ab] border-amber-500/30' },
  { id: 'central', label: 'Centrais Avulsas', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' },
  { id: 'bicos', label: 'Bicos de Aspersão', color: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
  { id: 'sensores', label: 'Sensores Térmicos', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  { id: 'cilindro', label: 'Cilindros & Recargas', color: 'bg-rose-500/20 text-rose-300 border-rose-500/30' },
  { id: 'valvulas', label: 'Válvulas de Gás', color: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  { id: 'acessorios', label: 'Acessórios & Acionadores', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' }
];

export const CatalogManager: React.FC = () => {
  const products = useStoreCatalog();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [stockFilter, setStockFilter] = useState<'all' | 'inStock' | 'outOfStock'>('all');

  // Modais
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [productToDelete, setProductToDelete] = useState<ProductItem | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [quickPhotoProduct, setQuickPhotoProduct] = useState<ProductItem | null>(null);

  // Notificação toast temporária
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filtragem dos produtos
  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch = 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchStock = 
      stockFilter === 'all' ||
      (stockFilter === 'inStock' && p.inStock) ||
      (stockFilter === 'outOfStock' && !p.inStock);

    return matchCategory && matchSearch && matchStock;
  });

  // Estatísticas
  const totalProdutos = products.length;
  const emEstoque = products.filter(p => p.inStock).length;
  const emDestaque = products.filter(p => p.featured).length;

  // Abrir modal para novo produto
  const handleAddNew = () => {
    const nextSkuNum = String(products.length + 1).padStart(2, '0');
    setEditingProduct({
      id: `prod_${Date.now()}`,
      sku: `OUT-NOV-${nextSkuNum}`,
      name: '',
      category: 'kit',
      priceBRL: 1500,
      description: '',
      image: '/assets/central-outfire-fundo-removido.png',
      specs: [
        'Conformidade técnica ABNT NBR 14518',
        'Garantia de fábrica Outfire 12 meses'
      ],
      featured: false,
      inStock: true
    });
    setIsNewProduct(true);
  };

  // Duplicar produto
  const handleDuplicate = (prod: ProductItem) => {
    const duplicated: ProductItem = {
      ...prod,
      id: `prod_${Date.now()}`,
      sku: `${prod.sku}-COPY`,
      name: `${prod.name} (Cópia)`,
      featured: false
    };
    saveCatalogProduct(duplicated);
    showToast(`Produto duplicado: ${duplicated.name}`);
  };

  // Alternar status de estoque rápido
  const handleToggleStock = (prod: ProductItem) => {
    const updated = { ...prod, inStock: !prod.inStock };
    saveCatalogProduct(updated);
    showToast(`${prod.name} agora está ${updated.inStock ? 'EM ESTOQUE' : 'ESGOTADO'}.`);
  };

  // Alternar destaque rápido
  const handleToggleFeatured = (prod: ProductItem) => {
    const updated = { ...prod, featured: !prod.featured };
    saveCatalogProduct(updated);
    showToast(`${prod.name} ${updated.featured ? 'marcado como destaque' : 'removido dos destaques'}.`);
  };

  // Exclusão confirmada
  const handleConfirmDelete = () => {
    if (productToDelete) {
      deleteCatalogProduct(productToDelete.id);
      showToast(`Produto ${productToDelete.name} excluído do catálogo.`);
      setProductToDelete(null);
    }
  };

  // Reset para padrão de fábrica
  const handleConfirmReset = () => {
    resetCatalogToDefault();
    showToast('Catálogo restaurado para a lista oficial de fábrica!');
    setShowResetConfirm(false);
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0e1218] border border-[#d4af37] text-white px-5 py-3 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* 1. HEADER DE GESTÃO DO CATÁLOGO */}
      <div className="bg-gradient-to-r from-[#12161f] to-[#0a0d13] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#f3e5ab] text-xs font-bold uppercase tracking-wider mb-2">
              <ShoppingCart className="w-3.5 h-3.5 text-[#d4af37]" />
              Gestão de Vendas & Loja Virtual
            </div>
            <h2 className="text-2xl font-black text-white flex items-center gap-3">
              Catálogo de Produtos do Site
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#d4af37]/20 text-[#f3e5ab] border border-[#d4af37]/30 font-normal">
                {totalProdutos} itens ativos
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl">
              Edite qualquer produto, altere fotos, modifique preços, crie novos componentes ou pause produtos fora de estoque. Todas as alterações refletem imediatamente na loja pública do site.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 hover:text-white flex items-center gap-2 transition-all"
              title="Voltar ao catálogo padrão de fábrica"
            >
              <RotateCcw className="w-4 h-4 text-gray-400" />
              <span className="hidden sm:inline">Restaurar Padrão</span>
            </button>

            <button
              onClick={handleAddNew}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] hover:from-[#e5c05d] hover:to-[#cda83b] text-black text-xs font-extrabold flex items-center gap-2 shadow-glow-gold transition-all"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>Adicionar Produto</span>
            </button>
          </div>
        </div>

        {/* Métricas rápidas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/5">
          <div className="bg-black/30 border border-white/5 rounded-xl p-3">
            <p className="text-[11px] text-gray-400 font-medium">Total de Produtos</p>
            <p className="text-xl font-bold text-white mt-0.5">{totalProdutos}</p>
          </div>
          <div className="bg-black/30 border border-white/5 rounded-xl p-3">
            <p className="text-[11px] text-emerald-400 font-medium">Disponíveis em Estoque</p>
            <p className="text-xl font-bold text-emerald-300 mt-0.5">{emEstoque}</p>
          </div>
          <div className="bg-black/30 border border-white/5 rounded-xl p-3">
            <p className="text-[11px] text-amber-400 font-medium">Produtos em Destaque</p>
            <p className="text-xl font-bold text-amber-300 mt-0.5">{emDestaque}</p>
          </div>
          <div className="bg-black/30 border border-white/5 rounded-xl p-3">
            <p className="text-[11px] text-rose-400 font-medium">Esgotados / Pausados</p>
            <p className="text-xl font-bold text-rose-300 mt-0.5">{totalProdutos - emEstoque}</p>
          </div>
        </div>
      </div>

      {/* 2. BARRA DE PESQUISA E FILTROS */}
      <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        {/* Campo de Busca */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome do produto, código SKU ou descrição..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-all"
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filtro por Estoque */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 hidden sm:inline">Estoque:</span>
          <div className="flex bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setStockFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${stockFilter === 'all' ? 'bg-[#d4af37] text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              Todos
            </button>
            <button
              onClick={() => setStockFilter('inStock')}
              className={`px-3 py-1.5 rounded-lg transition-all ${stockFilter === 'inStock' ? 'bg-emerald-500 text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              Em Estoque
            </button>
            <button
              onClick={() => setStockFilter('outOfStock')}
              className={`px-3 py-1.5 rounded-lg transition-all ${stockFilter === 'outOfStock' ? 'bg-rose-500 text-white font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              Pausados
            </button>
          </div>
        </div>
      </div>

      {/* Categorias Chips */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
            selectedCategory === 'all'
              ? 'bg-[#d4af37] text-black shadow-glow-gold'
              : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
          }`}
        >
          Todas as Categorias ({products.length})
        </button>
        {CATEGORIAS_CONFIG.map(cat => {
          const count = products.filter(p => p.category === cat.id).length;
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#d4af37] text-black shadow-glow-gold'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/20 text-black' : 'bg-white/10 text-gray-300'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. GRID DE PRODUTOS */}
      {filteredProducts.length === 0 ? (
        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-12 text-center">
          <AlertCircle className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">Nenhum produto encontrado</h3>
          <p className="text-sm text-gray-400 mt-1 max-w-md mx-auto">
            Nenhum produto coincide com a busca "{search}" ou categoria selecionada.
          </p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory('all'); setStockFilter('all'); }}
            className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs text-white font-bold"
          >
            Limpar Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => {
            const catConfig = CATEGORIAS_CONFIG.find(c => c.id === product.category) || CATEGORIAS_CONFIG[0];
            return (
              <div 
                key={product.id}
                className={`bg-[#0d1017] border rounded-2xl overflow-hidden flex flex-col justify-between transition-all group ${
                  product.featured 
                    ? 'border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.1)]' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Imagem do Produto + Badges */}
                <div className="relative aspect-[16/10] bg-black/60 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/central-outfire-fundo-removido.png';
                    }}
                  />

                  {/* Badges superiores */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${catConfig.color}`}>
                      {catConfig.label}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 text-gray-300 border border-white/10">
                      {product.sku}
                    </span>
                  </div>

                  {/* Botão Destaque Rápido */}
                  <button
                    onClick={() => handleToggleFeatured(product)}
                    className={`absolute top-3 right-3 p-1.5 rounded-full backdrop-blur-md border transition-all z-10 ${
                      product.featured
                        ? 'bg-amber-500 text-black border-amber-400 shadow-glow-gold'
                        : 'bg-black/60 text-gray-400 border-white/10 hover:text-amber-400 hover:border-amber-400/40'
                    }`}
                    title={product.featured ? 'Produto em Destaque' : 'Marcar como Destaque'}
                  >
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </button>

                  {/* Overlay para trocar foto em 1 clique */}
                  <button
                    onClick={() => setQuickPhotoProduct(product)}
                    className="absolute inset-0 bg-black/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1.5 text-white transition-opacity duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-glow-gold">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#f3e5ab]">Alterar Foto do Produto</span>
                  </button>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Especificações resumidas */}
                    {product.specs && product.specs.length > 0 && (
                      <div className="space-y-1 mb-4 border-t border-white/5 pt-3">
                        {product.specs.slice(0, 2).map((s, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-400 line-clamp-1">
                            <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                            <span>{s}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Preço e Status de Estoque */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Preço na Loja</p>
                      <p className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]">
                        R$ {product.priceBRL.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>

                    {/* Botão de Estoque Rápido */}
                    <button
                      onClick={() => handleToggleStock(product)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                        product.inStock
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20'
                          : 'bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20'
                      }`}
                      title="Clique para alternar status de estoque"
                    >
                      <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
                      <span>{product.inStock ? 'Em Estoque' : 'Pausado'}</span>
                    </button>
                  </div>
                </div>

                {/* Barra de Ações do Rodapé */}
                <div className="p-3 bg-black/40 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setQuickPhotoProduct(product)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    title="Mudar Foto"
                  >
                    <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="text-[11px]">Foto</span>
                  </button>

                  <button
                    onClick={() => handleDuplicate(product)}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    title="Duplicar Produto"
                  >
                    <Copy className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-[11px]">Duplicar</span>
                  </button>

                  <button
                    onClick={() => { setEditingProduct(product); setIsNewProduct(false); }}
                    className="flex-1 py-2 px-3 rounded-lg bg-white/10 hover:bg-[#d4af37] hover:text-black text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Editar</span>
                  </button>

                  <button
                    onClick={() => setProductToDelete(product)}
                    className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors"
                    title="Excluir Produto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. MODAL COMPLETO DE CRIAÇÃO / EDIÇÃO DE PRODUTO */}
      {editingProduct && (
        <ProductEditModal
          product={editingProduct}
          isNew={isNewProduct}
          onClose={() => setEditingProduct(null)}
          onSave={(saved) => {
            saveCatalogProduct(saved);
            showToast(`Produto ${saved.name} salvo com sucesso!`);
            setEditingProduct(null);
          }}
        />
      )}

      {/* 5. MODAL RÁPIDO DE ALTERAÇÃO DE FOTO */}
      {quickPhotoProduct && (
        <QuickPhotoModal
          product={quickPhotoProduct}
          onClose={() => setQuickPhotoProduct(null)}
          onSave={(newImageUrl) => {
            const updated = { ...quickPhotoProduct, image: newImageUrl };
            saveCatalogProduct(updated);
            showToast(`Foto de ${quickPhotoProduct.name} atualizada!`);
            setQuickPhotoProduct(null);
          }}
        />
      )}

      {/* 6. MODAL DE CONFIRMAÇÃO DE EXCLUSÃO */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0f1218] border border-red-500/30 rounded-2xl p-6 max-w-md w-full shadow-[0_0_50px_rgba(239,68,68,0.2)]">
            <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Excluir Produto do Catálogo?</h3>
            <p className="text-sm text-gray-300 mt-2">
              Tem certeza que deseja remover <strong className="text-white">"{productToDelete.name}"</strong> (SKU: {productToDelete.sku}) da loja do site? Esta ação não pode ser desfeita.
            </p>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => setProductToDelete(null)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg"
              >
                Sim, Excluir Produto
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. MODAL DE CONFIRMAÇÃO DE RESTAURAÇÃO DE FÁBRICA */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0f1218] border border-amber-500/30 rounded-2xl p-6 max-w-md w-full shadow-[0_0_50px_rgba(212,175,55,0.2)]">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4">
              <RotateCcw className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Restaurar Catálogo de Fábrica?</h3>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              Isso recarregará todos os produtos originais de fábrica (centrais VTS, bicos, sensores, cilindros e válvulas) e descartará customizações locais não salvas.
            </p>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-5 py-2 rounded-xl bg-[#d4af37] hover:bg-[#e5c05d] text-black text-xs font-extrabold shadow-glow-gold"
              >
                Sim, Restaurar Catálogo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// SUBCOMPONENTE: MODAL DE EDIÇÃO DE PRODUTO
// ==========================================
interface ProductEditModalProps {
  product: ProductItem;
  isNew: boolean;
  onClose: () => void;
  onSave: (product: ProductItem) => void;
}

const ProductEditModal: React.FC<ProductEditModalProps> = ({ product, isNew, onClose, onSave }) => {
  const [formData, setFormData] = useState<ProductItem>({ ...product });
  const [newSpec, setNewSpec] = useState('');
  const [showGallery, setShowGallery] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload de foto local do computador/celular
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setFormData(prev => ({ ...prev, image: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Adicionar especificação técnica
  const handleAddSpec = () => {
    if (newSpec.trim()) {
      setFormData(prev => ({
        ...prev,
        specs: [...(prev.specs || []), newSpec.trim()]
      }));
      setNewSpec('');
    }
  };

  // Remover especificação técnica
  const handleRemoveSpec = (index: number) => {
    setFormData(prev => ({
      ...prev,
      specs: prev.specs.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Por favor, informe o nome do produto.');
      return;
    }
    if (!formData.sku.trim()) {
      alert('Por favor, informe o código SKU.');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="bg-[#0c0f16] border border-[#d4af37]/40 rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden my-auto">
        
        {/* Cabeçalho do Modal */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#10141e]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#d4af37]/10 text-[#f3e5ab] text-[10px] font-bold uppercase tracking-wider mb-1">
              <Edit3 className="w-3 h-3 text-[#d4af37]" />
              {isNew ? 'Cadastro de Novo Item' : 'Edição de Produto'}
            </div>
            <h3 className="text-xl font-bold text-white">
              {isNew ? 'Adicionar Produto ao Catálogo' : `Editar: ${formData.name || 'Produto'}`}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário com Scroll */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Seção 1: Dados Principais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Nome Comercial do Produto *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Ex: Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)"
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Código SKU / Referência *
              </label>
              <input
                type="text"
                required
                value={formData.sku}
                onChange={(e) => setFormData(prev => ({ ...prev, sku: e.target.value }))}
                placeholder="Ex: OUT-VTS-1C"
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white font-mono placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Categoria do Produto *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value as ProductItem['category'] }))}
                className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white focus:outline-none focus:border-[#d4af37]"
              >
                {CATEGORIAS_CONFIG.map(cat => (
                  <option key={cat.id} value={cat.id} className="bg-gray-900 text-white">
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                Preço de Venda (R$) *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-[#d4af37] font-bold">R$</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  required
                  value={formData.priceBRL}
                  onChange={(e) => setFormData(prev => ({ ...prev, priceBRL: parseFloat(e.target.value) || 0 }))}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white font-bold placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.inStock}
                  onChange={(e) => setFormData(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="w-4 h-4 rounded text-[#d4af37] bg-black border-white/20 focus:ring-0"
                />
                <span className="text-xs font-bold text-white">Disponível em Estoque</span>
              </label>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="w-4 h-4 rounded text-[#d4af37] bg-black border-white/20 focus:ring-0"
                />
                <span className="text-xs font-bold text-[#f3e5ab] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current text-[#d4af37]" />
                  Destaque na Loja
                </span>
              </label>
            </div>
          </div>

          {/* Seção 2: Foto do Produto */}
          <div className="p-4 bg-black/40 border border-white/10 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#d4af37]" />
                Foto do Produto
              </label>
              <button
                type="button"
                onClick={() => setShowGallery(!showGallery)}
                className="text-xs text-[#f3e5ab] hover:underline font-bold"
              >
                {showGallery ? 'Ocultar Galeria' : 'Escolher da Galeria Outfire'}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Preview da Imagem */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-black border-2 border-[#d4af37]/40 p-2 flex items-center justify-center shrink-0 overflow-hidden shadow-glow-gold">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/central-outfire-fundo-removido.png';
                  }}
                />
              </div>

              {/* Controles de Foto */}
              <div className="flex-1 w-full space-y-2.5">
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors border border-white/10"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#d4af37]" />
                    Upload do Dispositivo
                  </button>
                </div>

                <div className="relative">
                  <LinkIcon className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                    placeholder="Ou cole a URL direta da imagem..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>
            </div>

            {/* Galeria de Fotos Rápidas da Outfire */}
            {showGallery && (
              <div className="pt-3 border-t border-white/10">
                <p className="text-[11px] text-gray-400 font-semibold mb-2">
                  Selecione uma foto oficial em alta resolução da biblioteca Outfire:
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 max-h-44 overflow-y-auto p-1">
                  {OUTFIRE_ASSET_GALLERY.map((asset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, image: asset.url }))}
                      className={`p-1.5 rounded-xl border bg-black/60 flex flex-col items-center gap-1 transition-all ${
                        formData.image === asset.url
                          ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 bg-black'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <img src={asset.url} alt={asset.label} className="w-12 h-12 object-contain" />
                      <span className="text-[9px] text-gray-300 line-clamp-1 text-center font-medium">
                        {asset.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Seção 3: Descrição */}
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Descrição Detalhada do Produto
            </label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Descreva o produto, aplicação em cozinhas profissionais, benefícios técnicos e diferenciais..."
              className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] leading-relaxed"
            />
          </div>

          {/* Seção 4: Especificações Técnicas */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Especificações Técnicas & Diferenciais (Itens de lista)
              </label>
              <span className="text-[11px] text-gray-400">
                {(formData.specs || []).length} itens
              </span>
            </div>

            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={newSpec}
                onChange={(e) => setNewSpec(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSpec(); } }}
                placeholder="Ex: Material em Aço Inox 304, Resistente a 400°C..."
                className="flex-1 px-4 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
              />
              <button
                type="button"
                onClick={handleAddSpec}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-[#f3e5ab] flex items-center gap-1.5 border border-white/10"
              >
                <Plus className="w-3.5 h-3.5" />
                Adicionar
              </button>
            </div>

            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {(formData.specs || []).map((spec, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-black/30 border border-white/5 text-xs text-gray-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                    <span>{spec}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveSpec(idx)}
                    className="text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé do Modal */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] hover:from-[#e5c05d] hover:to-[#cda83b] text-black text-xs font-extrabold flex items-center gap-2 shadow-glow-gold transition-all"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>{isNew ? 'Cadastrar Produto' : 'Salvar Alterações'}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

// ==========================================
// SUBCOMPONENTE: MODAL RÁPIDO PARA TROCA DE FOTO
// ==========================================
interface QuickPhotoModalProps {
  product: ProductItem;
  onClose: () => void;
  onSave: (newImageUrl: string) => void;
}

const QuickPhotoModal: React.FC<QuickPhotoModalProps> = ({ product, onClose, onSave }) => {
  const [currentUrl, setCurrentUrl] = useState(product.image);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setCurrentUrl(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#0c0f16] border border-[#d4af37]/40 rounded-3xl max-w-xl w-full p-6 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase text-[#f3e5ab] tracking-wider">Alteração Rápida</span>
            <h3 className="text-lg font-bold text-white">Trocar Foto: {product.name}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Preview Atual */}
        <div className="flex items-center justify-center p-4 bg-black/60 rounded-2xl border border-white/10 aspect-[16/9] overflow-hidden">
          <img
            src={currentUrl}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/central-outfire-fundo-removido.png';
            }}
          />
        </div>

        {/* Opções de Upload e URL */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center justify-center gap-2 border border-white/10"
            >
              <Upload className="w-4 h-4 text-[#d4af37]" />
              Fazer Upload de Nova Imagem
            </button>
          </div>

          <div className="relative">
            <LinkIcon className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={currentUrl}
              onChange={(e) => setCurrentUrl(e.target.value)}
              placeholder="Cole a URL da foto..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/50 border border-white/10 text-xs text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>

        {/* Galeria Rápida */}
        <div>
          <p className="text-[11px] text-gray-400 font-bold mb-2">Ou escolha uma foto oficial do catálogo:</p>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 max-h-36 overflow-y-auto p-1">
            {OUTFIRE_ASSET_GALLERY.map((asset, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentUrl(asset.url)}
                className={`p-1.5 rounded-xl border bg-black/50 flex flex-col items-center gap-1 transition-all ${
                  currentUrl === asset.url
                    ? 'border-[#d4af37] ring-2 ring-[#d4af37]/30 bg-black'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <img src={asset.url} alt={asset.label} className="w-10 h-10 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Botões do Rodapé */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-gray-300"
          >
            Cancelar
          </button>
          <button
            onClick={() => onSave(currentUrl)}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89628] text-black text-xs font-extrabold shadow-glow-gold"
          >
            Aplicar Nova Foto
          </button>
        </div>

      </div>
    </div>
  );
};
