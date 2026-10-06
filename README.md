# 🪙 Calculadora de Pureza do Ouro - CA Joias

Aplicação web desenvolvida para auxiliar a **CA Joias** na análise de peças de ouro por meio de pesagem no ar e pesagem hidrostática.

O sistema calcula a **densidade da peça**, apresenta uma estimativa de **pureza do ouro**, **quilates** e **peso fino**, além de disponibilizar uma tabela de referência para consulta.

## ⚖️ Processo de Medição

O sistema foi desenvolvido com base no procedimento de medição realizado com a **Balança Gehaka BK3000**:

1. **Pesagem no ar:** a peça é pesada normalmente no prato da balança.
2. **Pesagem hidrostática:** a mesma peça é pesada completamente submersa em água utilizando o kit de densidade.
3. **Cálculo da densidade:** a densidade é determinada a partir das duas pesagens utilizando o princípio de Arquimedes.
4. **Análise da peça:** a partir da densidade obtida, o sistema apresenta uma estimativa do teor de ouro e seus respectivos quilates.

A aplicação utiliza o princípio de Arquimedes para determinar a densidade da peça a partir das pesagens no ar e na água.

> **Observação:** a tabela apresentada no sistema é uma referência para interpretação dos resultados. Os valores podem variar de acordo com a composição da liga metálica.

**Referência:** [Gehaka - BK3000](https://www.gehaka.com.br/produtos/linha-pesagem/balanca-de-precisao-com-ajuste-automatico-por-peso-interno/bk3000-ajuste-automatico-peso-interno)

---

## 💡 Funcionalidades

- ⚖️ Registro do peso da peça no ar.
- 💧 Registro do peso da peça submersa em água.
- 🧮 Cálculo automático da densidade.
- 🪙 Estimativa do percentual de pureza do ouro.
- 💎 Estimativa dos quilates da peça.
- ⚱️ Cálculo do peso fino.
- 📊 Tabela de referência de densidade, teor e quilates.
- ⚠️ Validação dos valores informados pelo usuário.
- 📱 Interface responsiva para diferentes tamanhos de tela.
- 🏢 Identidade visual personalizada para a CA Joias.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando:

- **HTML5** — estrutura da aplicação.
- **CSS3** — estilização, layout e responsividade.
- **JavaScript** — validações e implementação dos cálculos.
- **Google Fonts (Poppins)** — tipografia da aplicação.
- **Git e GitHub** — versionamento e hospedagem do código.
- **GitHub Pages** — publicação da aplicação web.

---

## 🚀 Como Executar o Projeto

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, portanto não é necessário instalar dependências ou configurar um servidor para executá-lo.

### 💻 Executando Localmente

#### Abrindo diretamente no navegador

Após baixar ou clonar o projeto, acesse a pasta: 

```text
Golden_Calc/
│
├── index.html <-
├── style.css
├── script.js
├── favicon.png
├── logo_au sem fundo.png
└── ca sem fundo.png
