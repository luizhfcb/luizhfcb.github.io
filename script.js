document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("cadastroForm");

  form.addEventListener("submit", function (event) {
    
    event.preventDefault();
    event.stopPropagation();

    
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

    let valido = true;

    function validar(campo, extraCheck = null) {
      const valor = campo.value.trim();
      let campoValido = true;

      if (!valor) { 
        campoValido = false;
      } else if (extraCheck) {
        campoValido = extraCheck(valor);
      }
      
      if (!campoValido) {
        campo.classList.add("is-invalid");
        valido = false;
      } else {
        campo.classList.remove("is-invalid"); 
        campo.classList.add("is-valid");
      }
    }

    
    validar(campos.usuario);
    validar(campos.email, valor => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor));
    validar(campos.nomeJogo);
    validar(campos.genero);
    validar(campos.plataforma);
    validar(campos.preco);
    validar(campos.dataLancamento);
    validar(campos.classificacao);
    validar(campos.descricao);
   
    if (!form.checkValidity()) {
        valido = false;
    }

    form.classList.add("was-validated");

    if (valido) {
      alert("✅ Jogo cadastrado com sucesso!");
      form.reset();
      
      form.classList.remove("was-validated");
      Object.values(campos).forEach(campo => {
        campo.classList.remove('is-valid');
      });
    }
  });
});