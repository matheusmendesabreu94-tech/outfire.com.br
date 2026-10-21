# Guia de Padrões de Desenho das Telas da IHM e Manual Técnico - OUTFIRE VTS 32S3

Este documento estabelece as diretrizes visuais, proporções geométricas, paleta de cores e componentes estruturais das telas da Interface Homem-Máquina (IHM) da **Central Outfire VTS 32S3**, servindo como padrão normativo para futuras atualizações sem perda de identidade ou proporção.

---

## 1. Especificações Físicas da Tela TFT

| Propriedade | Valor Padrão | Descrição |
| :--- | :--- | :--- |
| **Resolução Nativa** | `320px × 240px` | Display LCD TFT colorido QVGA padrão industrial. |
| **Proporção (Aspect Ratio)** | `4:3` | Formato padrão de exibição embutido no gabinete. |
| **Moldura Física** | Borda 4px sólida `#111` | Borda preta com cantos arredondados (`border-radius: 8px`). |
| **Sombra Externa** | `0 4px 8px rgba(0,0,0,0.3)` | Relevo para destacar o visor na chapa frontal. |
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
| `c-green-light`| `#4CAF50` | LED de pulso cardíaco / funcionamento normal da placa. |
| `c-orange` | `#FF9800` | Alertas de treinamento, processos pendentes (`AGUARDANDO...`). |
| `c-grey` | `#9E9E9E` | Sombras dos botões 3D e estados inativos / desabilitados. |
| `c-grey-light`| `#E0E0E0` | Caixas de valores numéricos e fundos de modais/popups. |
| `bg-dark-cabinet`| `#14161b` | Gabinete em aço carbono com pintura eletrostática preta fosca. |
| `gold-outfire` | `#d4af37` | Acabamento do logotipo oficial, QR code e destaques premium. |

---

## 3. Arquitetura Estrutural da Tela (Grid 320×240)

Cada tela TFT 320x240 é construída com **posicionamento absoluto** em camadas para simular o comportamento de renderização de microcontroladores gráficos (ESP32 / LittlevGL / TFT_eSPI):

```
+-------------------------------------------------------------+ (y=0)
|  10/05 15:42 (TFT HEADER - h:30px, #03A9F4)       [LED]   |
+-------------------------------------------------------------+ (y=30)
| [EXAUSTOR OK]  [ENERGIA OK]   [GAS ABERTO]   [DAMPERS OK]   | (y=35..75)
|                                                             |
|   +---------------+     +---------------+                   |
|   |    SETORES    |     | CONTROLE GÁS  |                   | (y=85..135)
|   +---------------+     +---------------+                   |
|                                                             |
|   +---------------+     +---------------+                   |
|   |    REARMAR    |     |    CONFIG     |                   | (y=145..195)
|   +---------------+     +---------------+                   |
|                                                             |
+-------------------------------------------------------------+ (y=205)
|        SISTEMA OPERANTE (BOTTOM BAR - h:35px)               |
+-------------------------------------------------------------+ (y=240)
```

### Componentes Padronizados:

#### A. Barra de Teto (TFT Header)
- **Dimensões**: `width: 320px`, `height: 30px`, `top: 0`, `left: 0`.
- **Fundo**: `#03A9F4` (Azul claro em operação normal) ou `#E53935` (Vermelho em caso de falha/alarme).
- **Tipografia**: `14px`, negrito, centralizado, texto branco (`#FFF`).
- **LED Indicador**: `top: 9px`, `right: 14px`, diâmetro `12px × 12px`, circular (`border-radius: 50%`), verde `#4CAF50`.

#### B. Caixas de Status Superiores (Status Box)
- **Quantidade**: 4 caixas em linha horizontal.
- **Dimensões de cada caixa**: `width: 75px`, `height: 40px`.
- **Posições Horizontais (Left)**:
  - Caixa 1: `left: 5px`
  - Caixa 2: `left: 83px`
  - Caixa 3: `left: 161px`
  - Caixa 4: `left: 239px`
- **Posição Vertical**: `top: 35px`.
- **Efeito Sombra 3D**: Uma `div` idêntica posicionada com offset de +2px (`top: 37px`, `left: +2px`) na cor `#9E9E9E`.

#### C. Botões Principais de Navegação (Tactile Buttons)
- **Quantidade**: Grade 2×2 (4 botões).
- **Dimensões de cada botão**: `width: 145px`, `height: 50px`.
- **Coluna da Esquerda**: `left: 10px` (Sombra em `left: 12px`).
- **Coluna da Direita**: `left: 165px` (Sombra em `left: 167px`).
- **Linha Superior**: `top: 85px` (Sombra em `top: 87px`).
- **Linha Inferior**: `top: 145px` (Sombra em `top: 147px`).
- **Raio de Borda**: `border-radius: 6px`.
- **Texto**: `14px`, negrito, maiúsculas, centralizado com sombra de texto.

#### D. Barra de Rodapé (Bottom Bar)
- **Dimensões**: `width: 320px`, `height: 35px`, `bottom: 0`, `left: 0`.
- **Tipografia**: `16px`, negrito, centralizado, texto branco (`#FFF`).
- **Estados de Cor**:
  - `#03A9F4` (Azul Claro): `SISTEMA OPERANTE`
  - `#E53935` (Vermelho): `VAZAMENTO DE GAS!` ou `FALHA NO SISTEMA!`
  - `#FF9800` (Laranja): `TREINAMENTO: TOQUE AQUI`

---

## 4. Telas do Sistema Mapeadas no Manual

### 1. Dashboard: Tela Inicial & Status Operante
- Exibe o status consolidado de **Exaustor**, **Energia**, **Gás** e **Dampers**.
- Quatro atalhos: `SETORES`, `CONTROLE GAS`, `REARMAR` e `CONFIG`.
- Rodapé verde/azul claro: `SISTEMA OPERANTE`.

### 2. Ícones de Falha & Alertas de Perigo Vermelhos
- Quando ocorre anomalia física (falha de rede AC, inibição de exaustão, vazamento de gás pelo sensor de GLP/GN ou rompimento de damper).
- As caixas superiores assumem fundo vermelho `#E53935`:
  - `EXAUSTOR FALHA`
  - `ENERGIA FALHA`
  - `GAS VAZAMENTO`
  - `DAMPERS FECHADO`
- O botão `REARMAR` assume tom vermelho escarlate.
- O rodapé pulsa em vermelho: `VAZAMENTO DE GAS!`.

### 3. Assistente de Voz & Módulo de Treinamento
- Rodapé laranja: `TREINAMENTO: TOQUE AQUI`.
- Ao tocar, abre modal com confirmação: `INICIAR TREINAMENTO? [SIM] / [NAO]`.
- Quando confirmado, a caixa acústica aciona os arquivos `.WAV` sintetizados guiando a brigada em português.

### 4. Configuração de Data e Hora (RTC)
- Ajuste de **Data** (Dia / Mês / Ano) e **Hora Mundial** (Hora : Minuto).
- Botões de incremento `+` (vermelho ou azul) e decremento `-` (azul).
- Caixas centrais com valores em destaque numérico.

### 5. Tempos de Disparo: CO2, Saponificante e Damper
- `GAS/CO2 (ATRASO)`: Ajuste do tempo de abandono/evacuação (de 5s a 120s).
- `DAMPER (TEMPO)`: Temporização de fechamento das lâminas corta-fogo.
- `MODO DAMPER`: Seleção entre `PULSO`, `RETENCAO` e `DIRETO`.

### 6. Agenda Semanal e Controle de Válvula de Gás
- Permite programar horários de abertura e fechamento automático de gás de cozinha (ex: 08:00 às 22:00).
- Botões `SS (SEM.)` (salvar para a semana toda) e `SD (DIA)` (salvar apenas para o dia selecionado).
- Tabela de revisão com indicação de solenoide 1 (Impar) ou solenoide 2 (Par/Descanso).

### 7. Monitoramento de Bateria e Calibração Industrial
- `LIMITE ALARME (24V)`: Ajuste da tensão mínima de piso crítico (ex: 23.0V).
- `CALIBRAÇÃO INDUSTRIAL`: Tela com campo para digitar a leitura real medida com multímetro (ex: 24.0V), permitindo ao microcontrolador calcular o offset exato do divisor resistivo.

### 8. Parametrização do Relé de Falhas (Contato Seco)
- Três seletores independentes: `FALHA AC`, `FALHA BATERIA`, `VAZAMENTO GAS`.
- Opções: `ATIVA` (verde) ou `DESLIG` (cinza).
- Conecta a central ao sistema de automação predial do shopping ou corporativo.

### 9. Tecnologia de Dampers com Fio e Sem Fio
- Opções: `DAMPER AUTOMATICO` (intertravamento por disparo) e `DAMPER SEM FIO` (módulos remotos LoRa P2P).
- Lista de 15 baías (`D.1` a `D.15`) com botões `PAREAR`, `AGUARDANDO...` e `EXCLUIR`.

### 10. Menu de Pareamento Criptografado (WPS)
- Tela com instruções de acionamento do botão `RST` da central.
- Botões `CANCELAR` (vermelho) e `ESQUECER REDE` (cinza).

### 11. Termo de Garantia (6 Meses) e Preventivas
- Cobertura de 6 meses (180 dias) para componentes e placa de controle.
- Requisito mandatório de preventiva a cada 6 meses com registro na memória da IHM.

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
