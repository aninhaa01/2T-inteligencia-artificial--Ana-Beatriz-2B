const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    
    {
        enunciado: "Você entra em uma sala de aula onde há um robô interativo que responde perguntas com precisão e usa hologramas para ensinar. Qual é sua reação inicial?",
        alternativas: [
            {
                texto: "Uau, é isso que eu esperava do futuro!",
                afirmacao: "Ficou empolgado e logo quis entender como a tecnologia funciona por trás dessa inovação. "
            },
            {
                texto: "Prefiro um ensino mais tradicional.",
                afirmacao: "Ficou receoso com o excesso de tecnologia e refletiu sobre os limites entre inovação e aprendizado humano. "
            }
        ]
    },
    {
        enunciado: "Você foi convidado para testar um aplicativo que usa realidade aumentada para estudar biologia. Como você utiliza essa tecnologia?",
        alternativas: [
            {
                texto: "Explora todas as funções e até dá ideias para melhorias.",
                afirmacao: "Demonstrou espírito inovador e senso crítico ao analisar ferramentas tecnológicas educacionais."
            },
            {
                texto: "Usa apenas as funções básicas para cumprir o objetivo da tarefa.",
                afirmacao: "Utilizou a tecnologia de forma funcional, priorizando o resultado prático."
            }
        ]
    },
    {
        enunciado: "Sua escola lançou um laboratório de inovação com impressoras 3D, kits de robótica e sensores IoT. Qual projeto você gostaria de desenvolver lá?",
        alternativas: [
            {
                texto: "Um protótipo de casa inteligente ecológica.",
                afirmacao: "Propôs um projeto que une inovação e sustentabilidade."
            },
            {
                texto: "Um robô que coleta dados ambientais e envia alertas por aplicativo.",
                afirmacao: "Pensou em um projeto voltado para tecnologia e monitoramento ambiental."
            }
        ]
    },
    {
        enunciado: "Durante um evento sobre inovação, você precisa apresentar uma ideia tecnológica que possa melhorar a vida na sua cidade. O que você escolhe?",
        alternativas: [
            {
                texto: "Um sistema inteligente de coleta de lixo que usa sensores e roteamento otimizado.",
                afirmacao: "Mostrou visão urbana e foco em soluções para problemas coletivos."
            },
            {
                texto: "Um app colaborativo que conecta jovens inventores e mentores da área de tecnologia.",
                afirmacao: "Criou uma solução voltada para o desenvolvimento de talentos e comunidades criativas."
            }
        ]
    },
    {
        enunciado: "Você descobre que uma grande empresa de tecnologia está promovendo um concurso de inovação com prêmios para ideias disruptivas. O que você faz?",
        alternativas: [
            {
                texto: "Monta uma equipe e desenvolve um projeto ousado usando IA e blockchain.",
                afirmacao: "Assumiu o papel de liderança e investiu em soluções inovadoras para resolver grandes problemas."
            },
            {
                texto: "Prefere observar os projetos concorrentes para aprender mais sobre as tendências atuais.",
                afirmacao: "Usou a oportunidade para se atualizar e se inspirar nas soluções apresentadas pelos participantes."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();