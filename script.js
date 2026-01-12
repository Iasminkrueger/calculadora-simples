let resultado = document.getElementById("resultado");

function inserir(valor) {
    if (resultado.innerHTML === "0") {
        resultado.innerHTML = valor;
    } else {
        resultado.innerHTML += valor;
    }
}

function limpar() {
    resultado.innerHTML = "0";
}

function apagar() {
    let texto = resultado.innerHTML;
    resultado.innerHTML = texto.length > 1 ? texto.slice(0, -1) : "0";
}

function calcular() {
    try {
        resultado.innerHTML = eval(resultado.innerHTML);

        resultado.classList.remove("animar");
        void resultado.offsetWidth;
        resultado.classList.add("animar");

    } catch {
        resultado.innerHTML = "Erro";
    }
}
