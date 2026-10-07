//Variáveis para armazenar os elementos do DOM que vem da página HTML a partir do id
const pesoArInput = document.getElementById("pesoAr");
const pesoAguaInput = document.getElementById("pesoAgua");
const botaoCalcular = document.getElementById("btnCalcular");
const mensagemErro = document.getElementById("mensagemErro");
const resultadoDensidade = document.getElementById("resultadoDensidade");
const resultadoPureza = document.getElementById("resultadoPureza");
const resultadoQuilate = document.getElementById("resultadoQuilate");
const resultadoPesoFino = document.getElementById("resultadoPesoFino");


//Constantes para os valores fixos usados nos cálculos
const DENSIDADE_OURO_PURO = 19.32;
const PERCENTUAL_MAXIMO = 100;
const PERCENTUAL_MINIMO = 0;
const QUILATES_MAXIMOS = 24;

//função para exibir mensagem de erro
function exibirErro(mensagem) {
    mensagemErro.innerHTML = mensagem;
    mensagemErro.style.display = "block";
}

//função para ocultar mensagem de erro
function ocultarErro() {
    mensagemErro.style.display = "none";
}

//função responsável por validar os valores de pesagem e retornar mensagens de erro apropriadas
function validarPesagens(pesoAr, pesoAgua) {
    if (isNaN(pesoAr) || isNaN(pesoAgua)) {
        return "Preencha os dois campos de pesagem.";
    }

    if (pesoAr <= 0) {
        return "O peso no ar deve ser maior que zero.";
    }

    if (pesoAgua < 0) {
        return "O peso submerso não pode ser negativo.";
    }

    if (pesoAgua >= pesoAr) {
        return "O peso submerso deve ser menor que o peso no ar.";
    }

    return null;
}

//função para calcular a densidade do ouro
function calcularDensidade(pesoAr, pesoAgua) {
    return pesoAr / (pesoAr - pesoAgua);
}

//função para calcular a pureza do ouro com base na densidade
function calcularPureza(densidade) {
    const pureza = (densidade / DENSIDADE_OURO_PURO) * PERCENTUAL_MAXIMO;

    return Math.min(
        Math.max(pureza, PERCENTUAL_MINIMO),
        PERCENTUAL_MAXIMO
    );
}

//função para calcular o quilate do ouro com base na pureza
function calcularQuilate(pureza) {
    return Math.round((pureza / PERCENTUAL_MAXIMO) * QUILATES_MAXIMOS);
}

//função para calcular o peso fino do ouro com base no peso no ar e na pureza
function calcularPesoFino(pesoAr, pureza) {
    return pesoAr * (pureza / PERCENTUAL_MAXIMO);
}

//função para exibir os resultados dos cálculos na página HTML
function exibirResultados(densidade, pureza, quilate, pesoFino) {
    resultadoDensidade.innerHTML = densidade.toFixed(2);
    resultadoPureza.innerHTML = pureza.toFixed(1);
    resultadoQuilate.innerHTML = quilate;
    resultadoPesoFino.innerHTML = pesoFino.toFixed(2);
}

//função principal que é chamada quando o botão de calcular é clicado
function calcularPurezaOuro() {
    ocultarErro();

    const pesoAr = parseFloat(pesoArInput.value);
    const pesoAgua = parseFloat(pesoAguaInput.value);

    const erro = validarPesagens(pesoAr, pesoAgua);

    if (erro) {
        exibirErro(erro);
        return;
    }

    const densidade = calcularDensidade(pesoAr, pesoAgua);
    const pureza = calcularPureza(densidade);
    const quilate = calcularQuilate(pureza);
    const pesoFino = calcularPesoFino(pesoAr, pureza);

    exibirResultados(densidade, pureza, quilate, pesoFino);
}

botaoCalcular.onclick = calcularPurezaOuro;