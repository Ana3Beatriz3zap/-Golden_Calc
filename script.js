const pesoArInput = document.getElementById("pesoAr");
const pesoAguaInput = document.getElementById("pesoAgua");

const btnCalcular = document.getElementById("btnCalcular");

const mensagemErro = document.getElementById("mensagemErro");

const resultadoDensidade = document.getElementById("resultadoDensidade");
const resultadoPureza = document.getElementById("resultadoPureza");
const resultadoQuilate = document.getElementById("resultadoQuilate");
const resultadoPesoFino = document.getElementById("resultadoPesoFino");


btnCalcular.addEventListener("click", calcular);


function calcular() {

    mensagemErro.style.display = "none";
    mensagemErro.textContent = "";


    const pesoAr = parseFloat(pesoArInput.value);
    const pesoAgua = parseFloat(pesoAguaInput.value);


    // Validação dos campos
    if (isNaN(pesoAr) || isNaN(pesoAgua)) {

        mostrarErro("Preencha os dois campos de pesagem.");

        return;
    }


    // O peso no ar precisa ser maior que zero
    if (pesoAr <= 0) {

        mostrarErro("O peso no ar deve ser maior que zero.");

        return;
    }


    // O peso submerso não pode ser negativo
    if (pesoAgua < 0) {

        mostrarErro("O peso submerso não pode ser negativo.");

        return;
    }


    // O peso submerso deve ser menor que o peso no ar
    if (pesoAgua >= pesoAr) {

        mostrarErro(
            "O peso submerso deve ser menor que o peso no ar."
        );

        return;
    }


    // Cálculo da densidade utilizando o princípio de Arquimedes
    const densidade = pesoAr / (pesoAr - pesoAgua);


    // Calcula a pureza estimada
    const pureza = calcularPureza(densidade);


    // Converte a pureza para quilates
    const quilate = calcularQuilate(pureza);


    // Calcula o peso fino
    const pesoFino = pesoAr * (pureza / 100);


    // Exibe os resultados
    resultadoDensidade.textContent = densidade.toFixed(2);

    resultadoPureza.textContent = pureza.toFixed(1);

    resultadoQuilate.textContent = quilate;

    resultadoPesoFino.textContent = pesoFino.toFixed(2);
}


/*
 * Esta função será substituída quando tivermos
 * a regra oficial utilizada pelo cliente/balança
 * para converter densidade em teor de ouro.
 *
 * Por enquanto, utiliza uma estimativa baseada
 * na relação entre densidade e ouro puro.
 */
function calcularPureza(densidade) {

    const densidadeOuroPuro = 19.32;

    let pureza = (densidade / densidadeOuroPuro) * 100;


    // Impede valores acima de 100%
    if (pureza > 100) {
        pureza = 100;
    }


    // Impede valores negativos
    if (pureza < 0) {
        pureza = 0;
    }


    return pureza;
}


/*
 * Converte a porcentagem de pureza para quilates.
 *
 * 100% = 24K
 * 75%  = 18K
 * 58,5% = 14K
 */
function calcularQuilate(pureza) {

    const quilate = (pureza / 100) * 24;

    return Math.round(quilate);
}


/*
 * Exibe uma mensagem de erro na interface.
 */
function mostrarErro(mensagem) {

    mensagemErro.textContent = mensagem;

    mensagemErro.style.display = "block";
}