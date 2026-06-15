// ===== DIAGNÓSTICO: Verificar se o botão existe =====
document.addEventListener('DOMContentLoaded', function() {
    const btnTeste = document.getElementById('btnAcessarSite');
    if(btnTeste) {
        console.log("✅ Botão 'Vamos começar' ENCONTRADO!");
    } else {
        console.log("❌ ERRO: Botão 'Vamos começar' NÃO encontrado!");
    }
});

// ============================================
// TELAS INICIAIS COM POPUP + TELA PERSONALIZADA
// ============================================

// Elementos das telas
const telaBoasVindas = document.getElementById('telaBoasVindas');
const popupConfirmacao = document.getElementById('popupConfirmacao');
const telaInformacoes = document.getElementById('telaInformacoes');
const conteudoPrincipal = document.getElementById('conteudoPrincipal');

// Elementos do formulário
const nomeInput = document.getElementById('nomeUsuario');
const btnEntrar = document.getElementById('btnEntrar');

// Elementos do popup
const nomePopupConfirmacao = document.getElementById('nomePopupConfirmacao');
const btnPopupErrado = document.getElementById('btnPopupErrado');
const btnPopupCerto = document.getElementById('btnPopupCerto');

// Elementos da tela de informações
const nomeBoasVindas = document.getElementById('nomeBoasVindas');
const nomePergunta = document.getElementById('nomePergunta');
const btnAcessarSite = document.getElementById('btnAcessarSite');

let nomeUsuario = "";

// FUNÇÃO 1: Mostrar popup de confirmação
function mostrarPopupConfirmacao() {
    const nome = nomeInput.value.trim();
    
    if(nome === "") {
        alert("🌱 Por favor, digite seu nome para começar!");
        return;
    }
    
    nomeUsuario = nome;
    nomePopupConfirmacao.textContent = nomeUsuario;
    popupConfirmacao.style.display = "flex";
}

// FUNÇÃO 2: Fechar popup e voltar para correção
function voltarParaNome() {
    popupConfirmacao.style.display = "none";
    nomeInput.value = "";
    nomeInput.focus();
}

// FUNÇÃO 3: Confirmar nome e ir para tela de boas-vindas
function confirmarNome() {
    popupConfirmacao.style.display = "none";
    telaBoasVindas.style.display = "none";
    
    // Preenche os nomes na tela de boas-vindas
    nomeBoasVindas.textContent = nomeUsuario;
    nomePergunta.textContent = nomeUsuario;
    
    telaInformacoes.style.display = "block";
    
    console.log(`✅ Nome confirmado: ${nomeUsuario}`);
}

// FUNÇÃO 4: Acessar o site principal
function acessarSite() {
    telaInformacoes.style.display = "none";
    conteudoPrincipal.style.display = "block";
    
    console.log(`🌾 Bem-vindo(a) ao site, ${nomeUsuario}! Vamos explorar o poder dos biodigestores!`);
}

// ===== EVENTOS DOS BOTÕES =====
if(btnEntrar) btnEntrar.addEventListener('click', mostrarPopupConfirmacao);
if(btnPopupErrado) btnPopupErrado.addEventListener('click', voltarParaNome);
if(btnPopupCerto) btnPopupCerto.addEventListener('click', confirmarNome);
if(btnAcessarSite) btnAcessarSite.addEventListener('click', acessarSite);

// ===== APERTAR ENTER NO CAMPO DE NOME =====
if(nomeInput) {
    nomeInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            mostrarPopupConfirmacao();
        }
    });
}

// ===== FECHAR POPUP CLICANDO FORA =====
if(popupConfirmacao) {
    popupConfirmacao.addEventListener('click', function(e) {
        if(e.target === popupConfirmacao) {
            voltarParaNome();
        }
    });
}

// ============================================
// FUNCIONALIDADES DE ACESSIBILIDADE
// ============================================

const DEFAULT_FONT_SIZE = 16;
const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 20;
let currentFontSize = DEFAULT_FONT_SIZE;

const applyFontSize = () => {
  document.documentElement.style.fontSize = `${currentFontSize}px`;
};

const increaseFont = () => {
  currentFontSize = Math.min(MAX_FONT_SIZE, currentFontSize + 2);
  applyFontSize();
};

const decreaseFont = () => {
  currentFontSize = Math.max(MIN_FONT_SIZE, currentFontSize - 2);
  applyFontSize();
};

const toggleContrast = () => {
  document.body.classList.toggle('high-contrast');
};

// ============================================
// MENU HAMBÚRGUER E NAVEGAÇÃO
// ============================================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const accessibilityBtn = document.getElementById('accessibility-btn');
const accessibilityMenu = document.getElementById('accessibility-menu');
const revealElements = document.querySelectorAll('.reveal');
const navMore = document.querySelector('.nav-more');
const navMoreBtn = document.getElementById('nav-more-btn');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('show');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

if (navMore && navMoreBtn) {
  navMoreBtn.addEventListener('click', () => {
    const isOpen = navMore.classList.toggle('open');
    navMoreBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navMore.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMore.classList.remove('open');
      navMoreBtn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!navMore.contains(event.target)) {
      navMore.classList.remove('open');
      navMoreBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

if (accessibilityBtn && accessibilityMenu) {
  accessibilityBtn.addEventListener('click', () => {
    const isHidden = accessibilityMenu.classList.toggle('hidden');
    accessibilityBtn.setAttribute('aria-expanded', String(!isHidden));
  });
}

// ============================================
// EFEITO REVEAL AO SCROLL
// ============================================

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============================================
// CARROSSEL DA GALERIA - VERSÃO COM TEXTO FIXO
// ============================================

const carouselItems = [
  { src: 'img1.jpeg' },
  { src: 'img4.jpg' },
  { src: 'img5.jpg' },
  { src: 'img6.jpg' },
  { src: 'img7.jpg' }
];

let currentIndex = 0;
let autoSlide;

// Texto fixo para a legenda (conforme solicitado)
const TITULO_PADRAO = "Tradição que é criada";
const DESCRICAO_PADRAO = "tradição que é criada, por meio das agroindústrias";

function updateCarousel() {
  const item = carouselItems[currentIndex];
  const img = document.getElementById('carousel-image');
  const title = document.getElementById('carousel-title');
  const description = document.getElementById('carousel-description');

  if (!img) return;

  img.src = item.src;
  img.alt = "Galeria - Agroindústria e bioenergia";
  
  if (title) title.textContent = TITULO_PADRAO;
  if (description) description.textContent = DESCRICAO_PADRAO;
}

function changeSlide(direction) {
  currentIndex = (currentIndex + direction + carouselItems.length) % carouselItems.length;
  updateCarousel();
}

function startAutoSlide() {
  if (autoSlide) clearInterval(autoSlide);
  autoSlide = setInterval(() => changeSlide(1), 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Botões do carrossel (já possuem onclick no HTML)
// Não há dots no HTML, então removemos qualquer referência a eles.

// ============================================
// CURIOSIDADES ALEATÓRIAS - ATUALIZADAS PARA O TEMA DE AGROINDÚSTRIA E BIODIGESTORES
// ============================================

const facts = [
  'Força Econômica: A agroindústria representa 22% do PIB brasileiro e gera cerca de 16 milhões de empregos. É um dos setores mais potentes do país, comparável ao petrolífero.',
  'Base Familiar: No Brasil, 85,9% das agroindústrias são geridas por famílias (Censo 2017). Elas são essenciais para manter o jovem no campo e preservar tradições.',
  'Lixo que vira Luz: Resíduos que seriam descartados podem ser transformados em bioenergia e biocombustíveis. Isso cria uma economia circular que reduz custos e poluição.',
  'Perigo Ambiental: O descarte incorreto de resíduos industriais contamina rios e mata a biodiversidade. O cuidado com o solo é vital para a saúde dos seres humanos.',
  'Energia Limpa: Tecnologias como biodigestores tratam resíduos orgânicos para gerar energia própria. Transformam um problema ambiental em solução econômica sustentável.'
];

const factText = document.getElementById('fact-text');
const factBtn = document.getElementById('fact-btn');
let currentFactIndex = 0;

if (factBtn && factText) {
  factBtn.addEventListener('click', () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * facts.length);
    } while (nextIndex === currentFactIndex && facts.length > 1);
    currentFactIndex = nextIndex;
    factText.textContent = facts[currentFactIndex];
  });
}

// ============================================
// QUIZ INTERATIVO COM FEEDBACK VISUAL - ATUALIZADO PARA O NOVO TEMA
// ============================================

const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');

if (quizForm && quizResult) {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const answers = ['q1', 'q2', 'q3', 'q4', 'q5'];
    let score = 0;
    let allAnswered = true;
    
    // Limpa feedbacks anteriores
    document.querySelectorAll('.quiz-feedback').forEach(fb => {
      fb.className = 'quiz-feedback';
      fb.innerHTML = '';
    });

    answers.forEach((question) => {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      
      if (!selected) {
        allAnswered = false;
        return;
      }
      
      const isCorrect = selected.value === 'certo';
      if (isCorrect) {
        score += 1;
      }
      
      // Mostra feedback visual para cada pergunta
      const questionCard = selected.closest('.quiz-question-card');
      const feedbackDiv = questionCard.querySelector('.quiz-feedback');
      const questionNumber = questionCard.dataset.question;
      
      if (isCorrect) {
        feedbackDiv.className = 'quiz-feedback certo';
        feedbackDiv.innerHTML = '✅ Correto! Bom conhecimento!';
      } else {
        feedbackDiv.className = 'quiz-feedback errado';
        // Mostra a resposta correta
        const respostaCorreta = getRespostaCorreta(question);
        feedbackDiv.innerHTML = `❌ Ops! A resposta correta é: ${respostaCorreta}. Continue explorando o site!`;
      }
    });

    if (!allAnswered) {
      quizResult.textContent = '📢 Responda todas as perguntas para ver o resultado!';
      quizResult.classList.add('show');
      setTimeout(() => {
        quizResult.classList.remove('show');
      }, 3000);
      return;
    }

    const feedbacks = {
      5: '🌟 PARABÉNS! Você acertou tudo! Você é um expert em agroindústria e bioenergia! 🌟',
      4: '📚 EXCELENTE! Você acertou 4 de 5 perguntas. Quase perfeito!',
      3: '👍 MUITO BOM! Você acertou 3 de 5 perguntas. Continue aprendendo!',
      2: '📖 BOM! Você acertou 2 de 5 perguntas. Vale revisar o conteúdo.',
      1: '🌱 VOCÊ ACERTOU 1 pergunta. Explore mais o site e tente novamente!',
      0: '🌾 Você ainda não acertou nenhuma. Vamos explorar o site juntos?'
    };

    // Efeito especial para pontuação máxima
    quizResult.textContent = `🎯 RESULTADO: ${score}/5. ${feedbacks[score]} 🎯`;
    quizResult.classList.add('show');
    
    if (score === 5) {
      quizResult.classList.add('celebration');
      confettiEffect();
      setTimeout(() => {
        quizResult.classList.remove('celebration');
      }, 1000);
    } else {
      quizResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

// Função auxiliar para mostrar a resposta correta (ATUALIZADA)
function getRespostaCorreta(question) {
  const respostas = {
    q1: '85,9% 🌾',
    q2: 'Contaminação do solo e dos rios 💧',
    q3: 'Biodigestor ⚙️',
    q4: 'Geração de energia própria e redução de custos ⚡',
    q5: 'Economia circular 🔄'
  };
  return respostas[question] || 'Confira no site!';
}

// Efeito de confete para pontuação máxima
function confettiEffect() {
  const colors = ['#335f45', '#b27a2f', '#e8c78c', '#244533', '#c88e3d'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-20px';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}

// Adiciona animação CSS para o confete
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ============================================
// CARDS EXPANSÍVEIS (SUSTENTABILIDADE)
// ============================================

const cardToggles = document.querySelectorAll('.card-toggle');

cardToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const card = toggle.closest('.expandable-card');
    const isOpen = card.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.querySelector('.card-icon').textContent = isOpen ? '−' : '+';
  });
});

// ============================================
// AUTO SLIDE DO CARROSSEL
// ============================================

const carouselWrapper = document.querySelector('.carousel-wrapper');
if (carouselWrapper) {
  carouselWrapper.addEventListener('mouseenter', stopAutoSlide);
  carouselWrapper.addEventListener('mouseleave', startAutoSlide);
}

// Inicializa o carrossel
updateCarousel();
startAutoSlide();

console.log("✅ Site carregado com sucesso! (Versão atualizada - Agroindústria e Biodigestores)");

// ============================================
// CONTROLE DE CONFLITO ENTRE ÁUDIO E VÍDEO
// ============================================
const audio = document.getElementById('audioHistoria');
const video = document.getElementById('videoAgroindustria');

// Função para exibir aviso (pode ser trocada por um toast estilizado depois)
function mostrarAviso(mensagem) {
  alert(mensagem); // Alerta simples. Se preferir, pode criar um elemento flutuante.
}

if (audio && video) {
  // Quando tentar tocar o áudio
  audio.addEventListener('play', function() {
    if (!video.paused) {
      mostrarAviso("🎵 Para reproduzir o áudio, pause o vídeo primeiro.");
      audio.pause(); // Impede o áudio de tocar
      audio.currentTime = 0; // (opcional) rebobina o áudio
    }
  });

  // Quando tentar tocar o vídeo
  video.addEventListener('play', function() {
    if (!audio.paused) {
      mostrarAviso("🎬 Para visualizar o vídeo, pause o áudio primeiro.");
      video.pause(); // Impede o vídeo de tocar
    }
  });
} else {
  console.warn("Elementos de áudio ou vídeo não encontrados. Verifique os IDs.");
}
function mostrarAviso(mensagem) {
  const toast = document.createElement('div');
  toast.textContent = mensagem;
  toast.style.position = 'fixed';
  toast.style.bottom = '80px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#2E1500';
  toast.style.color = '#fff';
  toast.style.padding = '12px 24px';
  toast.style.borderRadius = '40px';
  toast.style.zIndex = '10000';
  toast.style.fontWeight = 'bold';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
