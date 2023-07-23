let body = document.querySelector("body");

body.classList.add("body_laranja_claro");

let botao_noturno_diurno = document.querySelector("#noturno_diurno");

botao_noturno_diurno.classList.add("laranja_escuro");

function trocaNoturnoDiurno() {
  body.classList.toggle("body_laranja_escuro");
  botao_noturno_diurno.classList.toggle("laranja_claro");
   botao_noturno_diurno.classList.toggle("laranja_escuro");

  if (botao_noturno_diurno.innerText === "Modo Noturno") {
    botao_noturno_diurno.innerText = "Modo Diurno";
  } else {
    botao_noturno_diurno.innerText = "Modo Noturno";
  }
}