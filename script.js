const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Que ideia vem a sua mente quando se vê o uso de computadores, celulares e tablets no ambiente escolar?",
        alternativas: [
            {
                texto: "Isso é muito bom! Está ajudando a expandir conhecimento e facilitando tarefas escolares",
                afirmacao: "Talvez não necessariamente a facilitação nas tarefas escolares seja uma coisa boa."
            },
            {
                texto: "Não é bom! Dispersa os estudantes e não expande o conhecimento.",
                afirmacao: "A tecnologia pode ser boa de certa forma."
            }
        ]
    },
    {
        enunciado: "Quais desafios você enfrenta ao incorporar tecnologias em suas aulas?",
        alternativas: [
            {
                texto: "Curva de aprendizado das novas ferramentas e plataformas.",
                afirmacao: "Dispersar pode ser uma coisa muito fácil tendo em vista tantas novas funções para navegar."
            },
            {
                texto: "Dificuldade de acesso à internet estável e dispositivos suficientes para todos os alunos.",
                afirmacao: "Temos que ver sempre novas táticas para lidar com as dificuldades que a falta de tecnologia nos proporciona."
            }
        ]
    },
    {
        enunciado: "Como você utiliza as tecnologias para promover a colaboração entre os alunos?",
        alternativas: [
            {
                texto: "Através de plataformas online para trabalho em grupo e compartilhamento de documentos.",
                afirmacao: "È muito bom explorar os métodos novos, mas também pode ser muito interessante experimentar métodos tradicionais."
            },
            {
                texto: "Principalmente através de métodos tradicionais de interação em sala de aula.",
                afirmacao: "È bom desfrutar dos métodos tradicionais, mas a internet é a nossa maior rede de informações, e pode ser usada de forma precisa."
            }
        ]
    },
    {
        enunciado: "Em sua opinião, as tecnologias ajudam a motivar os alunos no processo de aprendizagem?",
        alternativas: [
            {
                texto: "Sim, as tecnologias oferecem recursos interativos e interessantes.",
                afirmacao: "O novo pode parecer melhor, mas nem sempre é."
            },
            {
                texto: "Não necessariamente, a motivação dos alunos depende mais da metodologia de ensino do que das tecnologias.",
                afirmacao: "De certo modo, é interessante que façamos o uso das novas tecnologias"
            }
        ]
    },
    {
        enunciado: "Como você vê o futuro da educação com o avanço contínuo das tecnologias?",
        alternativas: [
            {
                texto: "Promissor, as tecnologias têm o potencial de transformar profundamente a forma como aprendemos.",
                afirmacao: "Voce deve ver de diferentes formas como podemos lidar com a tecnologia e com o que ela tem a nos proporcionar. O novo pode parecer fantástico, mas devemos ter em vista suas ações e consequẽncias."
            },
            {
                texto: "Incerto, há preocupações sobre como integrar as tecnologias de forma eficaz e equitativa na educação",
                afirmacao: "Não veja de maneira tão negativa o uso da tecnologia, pode parecer assustador implementar o novo sem pensar nas consequências, mas o seu uso pode ser de importante ajuda."
            }
        ]
    },
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
    caixaPerguntas.textContent = "Obrigado pela paciência!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();