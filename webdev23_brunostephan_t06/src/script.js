let body = document.querySelector("body");
body.classList.add("body_laranja_claro");
let botao_noturno_diurno = document.querySelector("#botao_noturno_diurno");
botao_noturno_diurno.classList.add("laranja_escuro");

let img = document.querySelector("#img_git");
let caixa_input = document.querySelector("#caixa_input");
let nome_span = document.querySelector("#nome_span");
let tipo_span = document.querySelector("#tipo_span");
let bio_span = document.querySelector("#bio_span");

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

async function buscaGIT() {
  let login = caixa_input.value.toLowerCase().trim().replace(" ", "-");
  let res = await fetch("https://api.github.com/users/" + login);
  console.log(res);
  let json = await res.json();

  img.src = json.avatar_url;

  nome_span.innerText = json.name;
  tipo_span.innerText = json.type;
  bio_span.innerText = json.bio;
}