## 1. Especificações Físicas do Gabinete & Tela TFT

| Propriedade | Valor Real / Padrão | Descrição Técnica |
| :--- | :--- | :--- |
| **Dimensões da Tampa Frontal** | `36 cm × 26 cm` (360mm × 260mm) | Tampa em chapa de aço carbono cortada a laser e dobrada CNC. |
| **Tamanho da Tela** | `2.8 polegadas` (56.9mm × 42.7mm) | Display LCD TFT colorido QVGA com matriz sensível ao toque. |
| **Resolução Nativa** | `320px × 240px` | Proporção industrial 4:3 (QVGA). |
| **Posicionamento da Tela** | **Centro da Tampa (X = 0, Y = 0)** | Localizada rigorosamente no centro horizontal, abaixo do logotipo Outfire e acima do banner vermelho. |
| **Recorte no Aço (CAD DXF)**| `78.0mm × 44.0mm` | Janela usinada a laser com furação nos 4 cantos para parafusos em $(\pm 39\text{mm}, \pm 21\text{mm})$. |
| **Sombra & Moldura** | Borda 4px sólida `#111` | Borda preta com cantos chanfrados (`border-radius: 6px`) e parafusos de fixação. |
| **Tipografia Padrão** | `"Courier New", Courier, monospace, sans-serif` | Fonte monoespaçada de alta legibilidade industrial. |

---

## 2. Paleta Oficial de Cores (Design Tokens)

### Cores de Interface & Telas
| Token | Hex Code | Aplicação / Semântica |
| :--- | :--- | :--- |
| `c-blue` | `#1976D2` | Cor primária institucional dos botões de ação e títulos. |
| `c-light-blue` | `#03A9F4` | Teto e rodapé padrão da tela em modo operante normal. |
| `c-red` | `#E53935` | Alarme de emergência, vazamento de gás, falha crítica e botões de perigo. |
| `c-green` | `#2E7D32` | Status operante seguro (`OK`, `ABERTO`, funções ativas). |
| `c-green-light`| `#4CAF50` | LED de pulso cardíaco / funcionamento normal da placa e checkmark. |
| `c-orange` | `#FF9800` | Alertas de treinamento, processos pendentes (`AGUARDANDO...`). |
| `c-amber` | `#d97706` | Inibição de setor / modo lavagem (`SETOR 1 INIBIDO`). |
| `c-grey` | `#9E9E9E` | Sombras dos botões 3D e estados inativos / desabilitados. |
| `c-grey-light`| `#E0E0E0` | Caixas de valores numéricos e fundos de modais/popups. |
| `bg-dark-cabinet`| `#14161b` | Gabinete em aço carbono com pintura eletrostática preta fosca. |
| `gold-outfire` | `#d4af37` | Acabamento do logotipo oficial, QR code e destaques premium. |

---

## 3. Arquitetura Estrutural da Tela (Grid 320×240)

Cada tela TFT 320x240 é construída com **posicionamento absoluto** em camadas para simular o comportamento de renderização de microcontroladores gráficos (ESP32 / LittlevGL / TFT_eSPI):

```
+-------------------------------------------------------------+ (y=0)
|  10/05 15:42 (TFT HEADER - h:30px, #03A9F4)          [✔/LED]|
+-------------------------------------------------------------+ (y=30)
| [EXAUSTOR OK]         [ENERGIA OK]          [GAS ABERTO]    | (y=35..75)
|                                                             |
|   +---------------+                 +---------------+       |
|   |    SETORES    |                 | CONTROLE GÁS  |       | (y=85..135)
|   +---------------+                 +---------------+       |
|                                                             |
|   +---------------+                 +---------------+       |
|   |    REARMAR    |                 |    CONFIG     |       | (y=145..195)
|   +---------------+                 +---------------+       |
|                                                             |
+-------------------------------------------------------------+ (y=205)
|        SISTEMA OPERANTE (BOTTOM BAR - h:35px)               |
+-------------------------------------------------------------+ (y=240)
```

### Componentes Padronizados:

#### A. Barra de Teto (TFT Header)
- **Dimensões**: `width: 320px`, `height: 30px`, `top: 0`, `left: 0`.
- **Fundo**: `#03A9F4` (Azul claro em operação normal), `#E53935` (Vermelho em alarme) ou `#FF9800` (Manutenção).
- **Tipografia**: `14px`, negrito, centralizado, texto branco (`#FFF`).
- **LED Indicador**: `top: 8px`, `right: 12px`, diâmetro `14px × 14px`, circular, verde `#4CAF50` com checkmark ou vermelho em falha.

#### B. Caixas de Status Superiores (3 Cards)
- **Quantidade**: 3 cards horizontais.
- **Dimensões de cada caixa**: `width: 96px`, `height: 40px`.
- **Posições Horizontais (Left)**:
  - Card 1 (Exaustor): `left: 10px`
  - Card 2 (Energia): `left: 112px`
  - Card 3 (Gás): `left: 214px`
- **Posição Vertical**: `top: 35px`.
- **Efeito Sombra 3D**: Sombra com offset de +2px na cor `#9E9E9E`.

#### C. Botões Principais de Navegação (Tactile Buttons)
- **Quantidade**: Grade 2×2 (4 botões táteis).
- **Dimensões de cada botão**: `width: 145px`, `height: 50px`.
- **Coluna da Esquerda**: `left: 10px` (Sombra em `left: 12px`).
- **Coluna da Direita**: `left: 165px` (Sombra em `left: 167px`).
- **Linha Superior**: `top: 85px` (Sombra em `top: 87px`).
- **Linha Inferior**: `top: 145px` (Sombra em `top: 147px`).
- **Raio de Borda**: `border-radius: 6px`.

#### D. Barra de Rodapé (Bottom Bar)
- **Dimensões**: `width: 320px`, `height: 35px`, `bottom: 0`, `left: 0`.
- **Estados de Cor**:
  - `#03A9F4` (Azul Claro): `SISTEMA OPERANTE`
  - `#E53935` (Vermelho): `FALHA: EXAUSTOR OFF` ou `FOGO DETECTADO!`
  - `#FF9800` (Laranja): `TREINAMENTO: TOQUE AQUI`
  - `#FBC02D` (Amarelo): `SENSOR FECHADO: COIFA` ou `SETOR 1 INIBIDO: COIFA`

---

## 4. As 14 Seções Oficiais do Manual do Usuário (Edição 2026)

### 1. Dashboard: Tela Inicial & Status Operante (Interface 2026)
- Monitoramento 24h com 3 Cards Superiores (Exaustor, Energia, Gás).
- 4 Botões táteis com ícones (`SETORES`, `CONTROLE GAS`, `REARMAR`, `CONFIG`).
- Banner inferior de Detecção de Incêndio / Central Externa Conectada.
- Status de Conexão no topo com bolinha verde e checkmark (Link RF com placa).

### 2. Módulo de Detecção, Setores & Modo Limpeza (Inibição)
- Supervisão por zonas dedicadas (Coifa Central, Duto Exaustão, Fritadeiras).
- Função `INIBIR LACO (LAVAGEM)`: Inibe temporariamente a zona térmica para higienização a vapor sem disparos acidentais.
- Alerta visual em amarelo: `MANUTENÇÃO: SETOR OFF` e `SETOR 1 INIBIDO: COIFA`.

### 3. Configuração de Central Mista (CO2 + Detecção Independente)
- Modo Híbrido: Combate mecânico nas coifas e supervisão simultânea de laços eletrônicos de alarme predial.
- Seleção entre `MODO: SÓ CO2` e `MODO: CENTRAL MISTA (CO2 + DET)`.
- Opção para renomear laços de detecção diretamente pelo display touch.

### 4. Assistente de Entrega e Testes (Checklist Wizard - 8 Etapas)
- Wizard passo a passo para comissionamento técnico:
  - Etapas 1-2: Seleção de tipo de sistema e quantidade de coifas.
  - Etapas 3-4: Teste de retardo de combate (15s a 60s) e modo de corte dos dampers.
  - Etapa 5: Teste de abertura de válvula de gás e intertravamento com exaustão.
  - Etapa 6: Teste sonoro do alto-falante de voz falada e sirene eletrônica.
  - Etapas 7-8: Registro de comissionamento, contagem da preventiva (180 dias) e validação.

### 5. Alertas Visuais de Falha e Aviso de Sensor Fechado
- `FALHA: EXAUSTOR OFF` (fundo vermelho): Exaustor desligado ou travado, corte preventivo de gás para evitar superaquecimento.
- `FALHA DE ENERGIA`: Queda de luz com continuidade operacional automática por bateria interna de backup.
- `SENSOR FECHADO: COIFA` (amarelo): Alerta de botoeira manual puxada ou sensor travado antes do disparo.

### 6. Telas de Emergência: Pré-Alarme & Descarga Efetuada
- **Pré-Alarme**: Tela vermelha pulsante com `FOGO DETECTADO: COIFA EM DISPARO`, contagem regressiva de `15s` e opção `TOQUE NA TELA PARA ABORTAR`.
- **Descarga Efetuada**: Abertura das solenoides de combate, bloqueio de segurança e botão `REARMAR SISTEMA` disponível após estabilização.

### 7. Simulação de Combate (Treinamento de Voz para a Equipe)
- Ativação pela barra `TREINAMENTO: TOQUE AQUI`.
- Diálogo falado pelo sintetizador DAC interno instruindo os funcionários da cozinha sobre procedimentos de evacuação e combate.

### 8. Configuração Inicial: Data e Hora
- Ajuste de RTC calendário (Dia / Mês / Ano) e Relógio Mundial (Hora : Minuto) com botões `+` (vermelho) e `-` (azul).

### 9. Tempos de Combate CO2, Saponificante & Pós-Descarga
- Ajuste de tempo de abandono/retardo (15s padrão).
- Tempo de atuação do produto extintor.
- Corte automático de 10 minutos nas bobinas solenoides para evitar superaquecimento elétrico.
- Seleção do modo de acionamento do Damper (`PULSO` ou `RETENÇÃO`).

### 10. Configuração dos Avisos de Voz (Sintetizador DAC)
- Seleção de repetições do áudio falado:
  - `1 VEZ (TOCA 1X E PARA)`
  - `N VEZES [2x, 3x ou 5x repetições]`
  - `CONTÍNUO (REPETE NO ALARME)`
  - `2ª FALHA` (filtro contra ruídos elétricos momentâneos).

### 11. Automação Diária: Agenda e Mural Semanal de Gás
- Programação diária de abertura e fechamento de gás por horário (ex: 08:00 às 22:00).
- Teclas rápidas: `SD (DIA)` para salvar o dia atual e `SS (SEM.)` para replicar na semana inteira com 1 toque.
- Mural semanal completo domingo a sábado com indicação de solenoide 1 ou 2.

### 12. Configuração de Falhas (Rede AC, Bateria & Desativação de Exaustor)
- Função **Desativar/Ignorar Falha de Exaustor (`DESLIG` em vermelho)** para cozinhas sem fiação de monitoramento 220V do exaustor ou durante manutenção de motores.
- Habilitação independente de alertas de Rede AC e Baterias.
- Vistoria Semestral Obrigatória (180 dias): Alerta de revisão e pesagem de cilindros.

### 13. Pareamento Sem Fio da Central (Link Painel-Central)
- Comunicação industrial 100% sem fio direta entre o painel touch de parede e a central na coifa (sem necessidade de roteador Wi-Fi ou internet).
- Botão `ESQUECER REDE` para troca rápida e pareamento instantâneo de novos painéis pelo botão `RST`.

### 14. Termo de Garantia Limitada (12 Meses) & Suporte Técnico
- Cobertura total de **12 meses (365 dias)** contra defeitos de fabricação e falhas de software/hardware para o conjunto IHM Touch + Placa Master.
- Cronograma de vistorias preventivas semestrais obrigatórias (180 dias).
- Contatos diretos de suporte: Telefone/WhatsApp `(15) 98157-7847`, e-mail `contato@outfire.com.br` e site `outfire.com.br`.

---

## 5. Template HTML/CSS para Criação de Novas Telas

Ao criar uma nova tela, copie e preencha a estrutura padrão:

```html
<div class="screen">
    <!-- Header -->
    <div class="tft-header">
        10/05 15:50
        <div class="tft-led"></div>
    </div>
    
    <!-- Caixas de Status / Conteúdo Superior -->
    <div class="status-box-shadow" style="top: 37px; left: 7px; width: 75px; height: 40px;"></div>
    <div class="status-box-body c-green" style="top: 35px; left: 5px; width: 75px; height: 40px;">
        EXAUSTOR<span>OK</span>
    </div>

    <!-- Botões Táteis com Sombra -->
    <div class="btn-shadow" style="top: 87px; left: 12px; width: 145px; height: 50px;"></div>
    <div class="btn-body c-blue" style="top: 85px; left: 10px; width: 145px; height: 50px; font-size: 14px;">
        NOME DO BOTÃO
    </div>

    <!-- Barra de Rodapé -->
    <div class="bottom-bar">
        SISTEMA OPERANTE
    </div>
</div>
```
