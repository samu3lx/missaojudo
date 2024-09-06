const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelectorAll(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está no início da luta. Qual é sua primeira técnica?",
        alternativas: [
            {
                texto: "Um golpe de ippon seoi nage (arremesso por cima do ombro).",
                afirmacao: "Você executa um ippon seoi nage perfeitamente, derrubando seu oponente com um golpe limpo. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Um golpe de ouchi gari (rasteira interna).",
                afirmacao: "Você tenta um ouchi gari, mas seu oponente consegue se equilibrar e evitar a queda. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Seu oponente tenta um ataque. Como você responde?",
        alternativas: [
            {
                texto: "Usa uma técnica de contra-ataque (kaeshi waza).",
                afirmacao: "Seu contra-ataque foi eficaz, derrubando seu oponente e ganhando um wazari (meio ponto).",
                pontos: 1
            },
            {
                texto: "Defende o ataque e se afasta.",
                afirmacao: "Você defende com sucesso, mas não marca pontos.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está no chão, em ne-waza (técnicas de solo). Qual é sua próxima ação?",
        alternativas: [
            {
                texto: "Tenta um estrangulamento (shime waza).",
                afirmacao: "Você aplica um estrangulamento eficaz, forçando seu oponente a desistir. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Tenta um imobilização (osaekomi waza).",
                afirmacao: "Você consegue imobilizar seu oponente, mas ele escapa antes de você garantir a pontuação máxima. Meio ponto para você.",
                pontos: 1
            }            
        ]
    },
    {
        enunciado: "Você está de pé novamente, o que você faz?",
        alternativas: [
            {
                texto: "Executa um harai goshi (arremesso com a perna varrendo).",
                afirmacao: "Seu harai goshi foi bem executado, derrubando seu oponente com um golpe limpo. Ponto completo para você!",
                pontos: 1
            },
            {
                texto: "Tenta um kouchi gari (rasteira menor).",
                afirmacao: "Seu kouchi gari foi bloqueado pelo seu oponente. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Seu oponente está tentando te imobilizar. Como você reage?",
        alternativas: [
            {
                texto: "Usa uma técnica de escape (hikkomi gaeshi).",
                afirmacao: "Você usa hikkomi gaeshi para escapar da imobilização e contra-atacar. Meio ponto para você.",
                pontos: 1
            },
            {
                texto: "Tenta resistir à imobilização.",
                afirmacao: "Você resiste à imobilização, mas não consegue escapar completamente. Nenhum ponto marcado.",
                pontos: 0
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enuiado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () ==> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta();
}

mostraPergunta();