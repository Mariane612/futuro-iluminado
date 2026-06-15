# Futuro Iluminado | Agroindústria e Bioenergia

**Futuro Iluminado** é um projeto interativo que mostra como as **agroindústrias familiares** – responsáveis por **85,9% dos estabelecimentos** do setor no Brasil – podem transformar resíduos orgânicos em **energia limpa** e **biofertilizantes** por meio de biodigestores.

O site tem como objetivo conscientizar jovens e comunidades sobre a importância da **economia circular**, da **valorização do trabalho no campo** e do **uso de tecnologias sustentáveis** para conciliar produção, meio ambiente e qualidade de vida.

---

## 📁 Estrutura do Projeto

### Tecnologias Utilizadas

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Estrutura principal da página (telas iniciais, conteúdo, formulários, mídia) |
| `style.css` | Estilos visuais, responsividade, temas de acessibilidade e alto contraste |
| `script.js` | Funcionalidades dinâmicas (carrossel, quiz, validação de nome, controle de áudio/vídeo, menu, acessibilidade) |

---

## 📑 Descrição das Seções

### 🖥️ Tela inicial de boas-vindas

- O usuário digita seu nome e confirma em um pop-up.
- Após a confirmação, é exibida uma tela personalizada com informações sobre o projeto (tempo de leitura, vídeo, galeria, quiz).
- O botão **“Vamos começar”** carrega o conteúdo principal.

### 🧭 Cabeçalho (Header)

- Logo do projeto e título: *“Onde a energia conecta, o futuro floresce: agroindústrias e a busca por energia sustentável”*.
- Menu **“Explorar”** (desktop) e **menu hambúrguer** (mobile) com links para as seções:
  - Jornada | Galeria | Curiosidades | Sustentabilidade | Vídeo | Quiz | Contato

### 🌟 Início (Hero)

- **Dados estatísticos**:
  - 85,9% das agroindústrias são familiares
  - 22% do PIB nacional
  - 16 milhões de empregos
- **Três pilares**:
  - Tradição (valorização do saber local)
  - Inovação (biodigestores)
  - Equilíbrio (proteção de rios e solos)
- Botões de chamada: *“Conhecer a jornada”* e *“Ver impacto e solução”*
- Imagem de destaque (`inicio.png`) criada com auxílio de IA.

### 🧩 Jornada Produtiva

Três etapas explicativas:

1. **Herança e produção rural**
2. **O desafio da industrialização** (resíduos e contaminação)
3. **O ciclo da independência** (economia circular e bioenergia)

### 🖼️ Galeria (Carrossel + Áudio)

- Carrossel de imagens da agroindústria local (fornecidas pela **Agroindústria Vô Almerindo**), com navegação manual e automática (a cada 5 segundos).
- Legenda fixa: *“Tradição que é criada, por meio das agroindústrias”*.
- Player de áudio com a história da agroindústria local (`audiohistoria.ogg`).
- **Regra de conflito**: áudio e vídeo não podem tocar juntos; se um estiver rodando, o outro exibe um aviso e pausa.

### 💡 Curiosidades

- Bloco de fatos aleatórios sobre agroindústria, bioenergia e impactos ambientais.
- Botão **“Mostrar outra curiosidade”** para alternar os textos.

### 🌱 Sustentabilidade (Cards expansíveis)

Três cards que expandem ao clicar:

- Impacto dos resíduos
- Solução com biodigestores e bioenergia
- Futuro e custo zero (autossuficiência energética)

### 🎥 Vídeo

- Vídeo *“A Força das Agroindústrias”* (`Agroindustria.mp4`), criado com o apoio do Google Notebook LM.
- Segue a **regra de conflito** com o áudio da galeria.

### ❓ Quiz Interativo

- **5 perguntas** de múltipla escolha sobre os temas do site.
- Após o envio, o usuário recebe:
  - Pontuação total (0 a 5)
  - Feedback individual (certo/errado) com a resposta correta
  - Mensagem motivacional conforme o desempenho
- **Efeito de confetes** para pontuação máxima.

### 📧 Contato

- Identificação da estudante responsável: **Mariane Santos Alves**, 3ª série do Núcleo de Guarapuava.
- E-mail para contato institucional.

### 🦶 Rodapé (Footer)

- Logos do **NRE Guarapuava** e do **Programa Programação Paraná**.
- Links para GitHub e Instagram.

---

## ♿ Funcionalidades de Acessibilidade

| Funcionalidade | Descrição |
|----------------|-----------|
| **Ajuste de fonte** | Botões “Aumentar fonte” / “Diminuir fonte” (14px a 20px) |
| **Alto contraste** | Alterna para fundo preto e textos amarelos, com correções específicas para quiz e cards expansíveis |
| **Menu acessível** | Navegação por teclado, atributos `aria-expanded` e foco visível |

---

## ✍️ Conteúdo Autoral e Créditos

Todo o conteúdo deste site foi produzido com o apoio de ferramentas de inteligência artificial e colaboração da comunidade, conforme detalhado abaixo:

| Item | Autoria/Crédito |
|------|----------------|
| **Título do projeto** | *Futuro Iluminado* (ideia original da desenvolvedora) |
| **Logo do site** (`logo.png`) | Totalmente autoral, desenhada à mão por **Mariane Santos Alves**, sem uso de IA |
| **Imagens da galeria** (`img1.jpeg`, `img4.jpg`, `img5.jpg`, `img6.jpg`, `img7.jpg`) | Fornecidas pela **Agroindústria Vô Almerindo** (autorização para fins educacionais) |
| **Imagem de destaque** (`inicio.png`) | Criada com auxílio do **ChatGPT (OpenAI)** |
| **Áudio** (`audiohistoria.ogg`) | Produção própria, com roteiro baseado em entrevistas e informações da Agroindústria Vô Almerindo |
| **Textos do site** | Elaborados a partir de pesquisas em artigos científicos, sites especializados e com suporte do **Google Notebook LM** (organização e síntese) |
| **Vídeo** (`Agroindustria.mp4`) | Criado com auxílio do **Google Notebook LM**, utilizando素材 e roteiro baseados em dados reais |
| **Programação** (HTML, CSS, JavaScript) | Desenvolvida com assistência das IAs **Google Gemini** e **DeepSeek**, sob supervisão e curadoria da estudante |
| **Identidade visual complementar** (paleta de cores, gradientes, layout, sombras, tipografia) | Criada com auxílio da IA **Claude**, sob orientação e ajustes finos da desenvolvedora. O **logo, porém, é 100% manual** |
