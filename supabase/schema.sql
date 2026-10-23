-- ============================================================================
-- ARQUITETURA DE BANCO DE DADOS OUTFIRE® — SISTEMA DE GESTÃO DE OBRAS & PORTAL
-- Banco: PostgreSQL 15+ / Supabase
-- Conformidade: LGPD (Lei 13.709/2018), ABNT NBR 14518, NFPA 17A/96
-- ============================================================================

-- 1. EXTENSÕES OBRIGATÓRIAS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. TIPOS CUSTOMIZADOS (ENUMS)
DO $$ BEGIN
    CREATE TYPE public.user_role AS ENUM (
        'admin_outfire',
        'engenheiro_responsavel',
        'tecnico_instalador',
        'cliente_gestor',
        'cliente_gerente_loja'
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.obra_status AS ENUM (
        'planejamento',
        'checklist_pendente',
        'em_analise_engenharia',
        'tecnico_agendado',
        'instalacao_em_andamento',
        'comissionamento_wizard',
        'concluida_avcb'
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.tipo_documento_projeto AS ENUM (
        'art_crea',
        'laudo_avcb_clcb',
        'memorial_calculo_nbr14518',
        'planta_baixa_dwg_pdf',
        'certificado_conformidade_outfire',
        'relatorio_comissionamento',
        'pop_pos_disparo',
        'foto_vistoria_evidencia'
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.status_conformidade_checklist AS ENUM (
        'conforme',
        'nao_conforme',
        'pendente_adequacao_cliente',
        'nao_aplicavel'
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
    CREATE TYPE public.pedido_status AS ENUM (
        'orcamento',
        'aguardando_aprovacao',
        'aprovado_financeiro',
        'em_separacao_fabrica',
        'faturado_enviado',
        'entregue_na_obra',
        'cancelado'
    );
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

-- ============================================================================
-- 3. TABELAS PRINCIPAIS
-- ============================================================================

-- 3.1. PERFIS DE USUÁRIOS (Sincronizado com auth.users do Supabase)
CREATE TABLE IF NOT EXISTS public.perfis_usuarios (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    nome_completo TEXT NOT NULL,
    telefone_whatsapp TEXT NOT NULL,
    registro_crea_cau TEXT,
    role public.user_role NOT NULL DEFAULT 'cliente_gestor',
    lgpd_termo_aceito BOOLEAN NOT NULL DEFAULT TRUE,
    lgpd_data_aceite TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    avatar_url TEXT,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3.2. EMPRESAS CLIENTES (Restaurantes, Redes, Franqueadoras)
CREATE TABLE IF NOT EXISTS public.empresas_clientes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    cnpj_cpf VARCHAR(20) NOT NULL,
    razao_social TEXT NOT NULL,
    nome_fantasia TEXT NOT NULL,
    segmento_culinario TEXT, -- Ex: Fast Food, Parrilla, Cozinha Industrial
    telefone_comercial TEXT NOT NULL,
    email_contato TEXT NOT NULL,
    cidade TEXT NOT NULL,
    uf VARCHAR(2) NOT NULL,
    status_ativa BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3.3. MEMBROS DA EMPRESA (Vínculo de Usuários com Empresas)
CREATE TABLE IF NOT EXISTS public.membros_empresa (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    empresa_id UUID NOT NULL REFERENCES public.empresas_clientes(id) ON DELETE CASCADE,
    usuario_id UUID NOT NULL REFERENCES public.perfis_usuarios(id) ON DELETE CASCADE,
    funcao_na_empresa TEXT DEFAULT 'Gestor do Restaurante',
    pode_aprovar_pedidos BOOLEAN NOT NULL DEFAULT TRUE,
    pode_baixar_laudos BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    UNIQUE(empresa_id, usuario_id)
);

-- 3.4. OBRAS & UNIDADES DE INSTALAÇÃO
CREATE TABLE IF NOT EXISTS public.obras (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    empresa_id UUID NOT NULL REFERENCES public.empresas_clientes(id) ON DELETE RESTRICT,
    codigo_obra VARCHAR(30) UNIQUE NOT NULL, -- Ex: OBR-2026-OUT-0042
    nome_unidade TEXT NOT NULL, -- Ex: "Restaurante Fasano - Unidade Jardins"
    status public.obra_status NOT NULL DEFAULT 'planejamento',
    progresso_porcentagem INTEGER NOT NULL DEFAULT 15,
    
    -- Localização
    endereco_completo TEXT NOT NULL,
    cidade TEXT NOT NULL,
    uf VARCHAR(2) NOT NULL,
    
    -- Responsabilidade Técnica e Execução
    engenheiro_responsavel_nome TEXT DEFAULT 'Eng. Robson (CREA-SP)',
    tecnico_alocado_nome TEXT,
    tecnico_alocado_telefone TEXT,
    tecnico_alocado_foto TEXT,
    data_agendamento_visita TIMESTAMPTZ,
    
    -- Dados de Engenharia da Cozinha (JSONB Flexível)
    especificacoes_tecnicas JSONB NOT NULL DEFAULT '{
        "quantidade_coifas": 1,
        "comprimento_duto_metros": 6.0,
        "tem_damper_cortafogo": true,
        "volume_saponificante_litros": 10.0,
        "modelo_central": "Central Outfire VTS 32S3 Híbrida"
    }'::jsonb,

    data_previsao_conclusao DATE,
    data_conclusao DATE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3.5. CHECKLIST DE PRÉ-INSTALAÇÃO (OS 8 REQUISITOS OBRIGATÓRIOS ANTES DO TÉCNICO VIAJAR)
CREATE TABLE IF NOT EXISTS public.checklist_pre_instalacao (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    obra_id UUID NOT NULL REFERENCES public.obras(id) ON DELETE CASCADE,
    
    -- 1. Duto de Exaustão
    req1_duto_pronto BOOLEAN NOT NULL DEFAULT FALSE,
    req1_duto_obs TEXT,
    req1_duto_foto_url TEXT,
    
    -- 2. Coifa Industrial Fixada
    req2_coifa_instalada BOOLEAN NOT NULL DEFAULT FALSE,
    req2_coifa_obs TEXT,
    req2_coifa_foto_url TEXT,

    -- 3. Painel Elétrico / Ponto 220V Próximo
    req3_painel_eletrico_220v BOOLEAN NOT NULL DEFAULT FALSE,
    req3_painel_obs TEXT,

    -- 4. Exaustor Funcionando e Testado
    req4_exaustor_funcionando BOOLEAN NOT NULL DEFAULT FALSE,
    req4_exaustor_obs TEXT,

    -- 5. Portas de Acesso / Inspeção nos Dutos
    req5_portas_inspecao_dutos BOOLEAN NOT NULL DEFAULT FALSE,
    req5_portas_obs TEXT,

    -- 6. Rede de Gás e Válvula de Bloqueio
    req6_rede_gas_bloqueio BOOLEAN NOT NULL DEFAULT FALSE,
    req6_gas_obs TEXT,

    -- 7. Equipamentos de Cocção Posicionados
    req7_coccao_posicionada BOOLEAN NOT NULL DEFAULT FALSE,
    req7_coccao_obs TEXT,

    -- 8. Restrições de Horário de Trabalho
    req8_restricao_horario TEXT DEFAULT 'Horário livre / Antes da abertura do restaurante',
    data_pretendida_instalacao DATE,

    -- Status de Validação da Engenharia
    status_checklist VARCHAR(30) NOT NULL DEFAULT 'pendente', -- 'pendente', 'em_analise', 'aprovado_engenharia'
    parecer_engenharia TEXT,
    aprovado_em TIMESTAMPTZ,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    atualizado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    UNIQUE(obra_id)
);

-- 3.6. VAULT DE DOCUMENTOS E PROJETOS
CREATE TABLE IF NOT EXISTS public.documentos_projetos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    obra_id UUID NOT NULL REFERENCES public.obras(id) ON DELETE CASCADE,
    empresa_id UUID NOT NULL REFERENCES public.empresas_clientes(id) ON DELETE CASCADE,
    tipo public.tipo_documento_projeto NOT NULL,
    titulo TEXT NOT NULL,
    descricao TEXT,
    
    storage_path TEXT NOT NULL,
    nome_arquivo_original TEXT NOT NULL,
    tamanho_bytes BIGINT NOT NULL,
    hash_sha256 VARCHAR(64), -- Prova criptográfica de integridade jurídica
    
    numero_art_crea TEXT,
    data_emissao DATE NOT NULL DEFAULT CURRENT_DATE,
    publico_para_cliente BOOLEAN NOT NULL DEFAULT TRUE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 3.7. PEDIDOS DE PEÇAS E KITS
CREATE TABLE IF NOT EXISTS public.pedidos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    numero_pedido VARCHAR(30) UNIQUE NOT NULL, -- Ex: PED-2026-0042
    obra_id UUID REFERENCES public.obras(id) ON DELETE SET NULL,
    empresa_id UUID NOT NULL REFERENCES public.empresas_clientes(id) ON DELETE RESTRICT,
    solicitante_id UUID REFERENCES public.perfis_usuarios(id) ON DELETE SET NULL,
    status public.pedido_status NOT NULL DEFAULT 'orcamento',
    valor_total_brl NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    itens_json JSONB NOT NULL DEFAULT '[]'::jsonb,
    codigo_rastreio TEXT,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ============================================================================
-- 4. HABILITAÇÃO DO RLS EM TODAS AS TABELAS
-- ============================================================================
ALTER TABLE public.perfis_usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.empresas_clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.membros_empresa ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.obras ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checklist_pre_instalacao ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documentos_projetos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pedidos ENABLE ROW LEVEL SECURITY;

-- Exemplo de Política RLS: Usuário só lê seus próprios dados ou os da sua empresa
CREATE POLICY "Usuários acessam apenas seus próprios perfis"
ON public.perfis_usuarios FOR ALL
USING (id = auth.uid());

CREATE POLICY "Clientes acessam apenas suas obras"
ON public.obras FOR SELECT
USING (
    empresa_id IN (
        SELECT empresa_id FROM public.membros_empresa WHERE usuario_id = auth.uid()
    )
);

CREATE POLICY "Clientes acessam seus checklists"
ON public.checklist_pre_instalacao FOR ALL
USING (
    obra_id IN (
        SELECT o.id FROM public.obras o 
        JOIN public.membros_empresa m ON m.empresa_id = o.empresa_id
        WHERE m.usuario_id = auth.uid()
    )
);

CREATE POLICY "Clientes baixam documentos públicos da sua empresa"
ON public.documentos_projetos FOR SELECT
USING (
    empresa_id IN (
        SELECT empresa_id FROM public.membros_empresa WHERE usuario_id = auth.uid()
    ) AND publico_para_cliente = TRUE
);

CREATE POLICY "Clientes visualizam seus pedidos"
ON public.pedidos FOR SELECT
USING (
    empresa_id IN (
        SELECT empresa_id FROM public.membros_empresa WHERE usuario_id = auth.uid()
    )
);
