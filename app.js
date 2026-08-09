const btnEscanear = document.getElementById("btnEscanear");
const btnGuardar = document.getElementById("btnGuardar");

const codigo = document.getElementById("codigo");
const descripcion = document.getElementById("descripcion");
const ubicacion = document.getElementById("ubicacion");
const usuario = document.getElementById("usuario");
const estado = document.getElementById("estado");

let scanner = null;

btnEscanear.addEventListener("click", iniciarEscaner);

<script src="https://unpkg.com/@zxing/browser@latest"></script>
btnGuardar.addEventListener("click", function () {
  if (codigo.value.trim() === "") {
    estado.textContent = "Primero escanee o escriba un código";
    return;
  }

  estado.textContent = "Guardando...";

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      codigo: codigo.value.trim(),
      descripcion: descripcion.value.trim(),
      ubicacion: ubicacion.value.trim(),
      usuario: usuario.value.trim()
    })
  })
  .then(response => response.json())
  .then(data => {
    estado.textContent = "Guardado correctamente";

    codigo.value = "";
    descripcion.value = "";
    ubicacion.value = "";
    usuario.value = "";
  })
  .catch(error => {
    estado.textContent = "Error al guardar";
    console.log(error);
  });
});
