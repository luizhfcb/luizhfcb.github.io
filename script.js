document.getElementById("formJogo").addEventListener("submit", function (event) {
  event.preventDefault();

  const campos = {
    usuario: document.getElementById("usuario"),
    email: document.getElementById("email"),
    nomeJogo: document.getElementById("nomeJogo"),
    genero: document.getElementById("genero"),
    plataforma: document.getElementById("plataforma"),
    preco: document.getElementById("preco"),
    lancamento: document.getElementById("lancamento"),
    classificacao: document.getElementById("classificacao"),
    descricao: document.getElementById("descricao"),
    avaliacao: document.getElementById("avaliacao")
  };

  let valido = true;

  function validar(campo, extraCheck = null) {
    const valor = campo.value.trim();
    if (!valor || (extraCheck && !extraCheck(valor))) {
      campo.classList.add("is-invalid");
      valido = false;
    } else {
      campo.classList.remove("is-invalid");
    }
  }

  validar(campos.usuario);
  validar(campos.email, valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor));
  validar(campos.nomeJogo);
  validar(campos.genero);
  validar(campos.plataforma);
  validar(campos.preco);
  validar(campos.lancamento);
  validar(campos.classificacao);
  validar(campos.descricao);
  validar(campos.avaliacao);

  if (valido) {
    alert("✅ Jogo cadastrado com sucesso!");
    document.getElementById("formJogo").reset();
  }
});
