const a = document.getElementById("pesoAr");
const b = document.getElementById("pesoAgua");
const c = document.getElementById("btnCalcular");
const d = document.getElementById("mensagemErro");
const e = document.getElementById("resultadoDensidade");
const f = document.getElementById("resultadoPureza");
const g = document.getElementById("resultadoQuilate");
const h = document.getElementById("resultadoPesoFino");

c.onclick = function () {

    d.style.display = "none";

    let x = parseFloat(a.value);
    let y = parseFloat(b.value);

    if (isNaN(x)) {
        d.innerHTML = "Preencha os dois campos de pesagem.";
        d.style.display = "block";
        return;
    }

    if (isNaN(y)) {
        d.innerHTML = "Preencha os dois campos de pesagem.";
        d.style.display = "block";
        return;
    }

    if (x <= 0) {
        d.innerHTML = "O peso no ar deve ser maior que zero.";
        d.style.display = "block";
        return;
    }

    if (y < 0) {
        d.innerHTML = "O peso submerso não pode ser negativo.";
        d.style.display = "block";
        return;
    }

    if (y >= x) {
        d.innerHTML = "O peso submerso deve ser menor que o peso no ar.";
        d.style.display = "block";
        return;
    }

    let z = x / (x - y);

    let q = (z / 19.32) * 100;

    if (q > 100) {
        q = 100;
    }

    if (q < 0) {
        q = 0;
    }

    let r = Math.round((q / 100) * 24);

    let s = x * (q / 100);

    e.innerHTML = z.toFixed(2);
    f.innerHTML = q.toFixed(1);
    g.innerHTML = r;
    h.innerHTML = s.toFixed(2);
};
