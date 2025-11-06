document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("cadastroForm");

  const campos = {
    usuario: document.getElementById("usuario"),
    email: document.getElementById("email"),
    nomeJogo: document.getElementById("nomeJogo"),
    genero: document.getElementById("genero"),
    plataforma: document.getElementById("plataforma"),
    preco: document.getElementById("preco"),
    dataLancamento: document.getElementById("dataLancamento"),
    classificacao: document.getElementById("classificacao"),
    descricao: document.getElementById("descricao"),
  };

  function validarCampo(campo, regex = null) {
    const valor = campo.value.trim();
    let campoValido = true;

    if (!valor) {
      campoValido = false;
    } else if (regex && !regex.test(valor)) {
      campoValido = false;
    }
    
    if (campoValido) {
      campo.classList.remove("is-invalid");
      campo.classList.add("is-valid");
      return true;
    } else {
      campo.classList.remove("is-valid");
      campo.classList.add("is-invalid");
      return false;
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  campos.usuario.addEventListener("input", () => validarCampo(campos.usuario));
  campos.email.addEventListener("input", () => validarCampo(campos.email, emailRegex));
  campos.nomeJogo.addEventListener("input", () => validarCampo(campos.nomeJogo));
  campos.plataforma.addEventListener("input", () => validarCampo(campos.plataforma));
  campos.preco.addEventListener("input", () => validarCampo(campos.preco));
  campos.descricao.addEventListener("input", () => validarCampo(campos.descricao));
  
  campos.genero.addEventListener("change", () => validarCampo(campos.genero));
  campos.dataLancamento.addEventListener("change", () => validarCampo(campos.dataLancamento));
  campos.classificacao.addEventListener("change", () => validarCampo(campos.classificacao));

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    let formularioValido = true;
    if (!validarCampo(campos.usuario)) formularioValido = false;
    if (!validarCampo(campos.email, emailRegex)) formularioValido = false;
    if (!validarCampo(campos.nomeJogo)) formularioValido = false;
    if (!validarCampo(campos.genero)) formularioValido = false;
    if (!validarCampo(campos.plataforma)) formularioValido = false;
    if (!validarCampo(campos.preco)) formularioValido = false;
    if (!validarCampo(campos.dataLancamento)) formularioValido = false;
    if (!validarCampo(campos.classificacao)) formularioValido = false;
    if (!validarCampo(campos.descricao)) formularioValido = false;

    form.classList.add("was-validated");

    if (formularioValido) {
      alert("✅ Jogo cadastrado com sucesso!");
      form.reset();

      form.classList.remove("was-validated");
      Object.values(campos).forEach(campo => {
        campo.classList.remove('is-valid');
        campo.classList.remove('is-invalid');
      });
    }
  });
});