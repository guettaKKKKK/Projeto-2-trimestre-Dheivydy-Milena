const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Que ideia vem a sua mente quando se vê o uso de computadores, celulares e tablets no ambiente escolar?",
        alternativas: [
            "Isso é muito bom! Está ajudando a expandir conhecimento e facilitando tarefas escolares.",
            "Não é bom! Dispersa os estudantes e não expande o conhecimento."
        ]
    },
    {
        enunciado: "Quais desafios você enfrenta ao incorporar tecnologias em suas aulas?",
        alternativas: [
            "Curva de aprendizado das novas ferramentas e plataformas.",
            "Dificuldade de acesso à internet estável e dispositivos suficientes para todos os alunos."
        ]
    }
    {
        enunciado: "Como você utiliza as tecnologias para promover a colaboração entre os alunos?",
        alternativas: [
            "Através de plataformas online para trabalho em grupo e compartilhamento de documentos.",
            "Principalmente através de métodos tradicionais de interação em sala de aula."
        ]
    },
    {
        enunciado: "Em sua opinião, as tecnologias ajudam a motivar os alunos no processo de aprendizagem?",
        alternativas: [
            "Sim, as tecnologias oferecem recursos interativos e interessantes.",
            "Não necessariamente, a motivação dos alunos depende mais da metodologia de ensino do que das tecnologias."
        ]
    }
    {
        enunciado: "Como você vê o futuro da educação com o avanço contínuo das tecnologias?        ",
        alternativas: [
            "Promissor, as tecnologias têm o potencial de transformar profundamente a forma como aprendemos.",
            "Incerto, há preocupações sobre como integrar as tecnologias de forma eficaz e equitativa na educação."
        ]
    },
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta()
