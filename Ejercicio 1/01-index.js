const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const boton = document.getElementById("boton");

const seleccion = document.getElementById("seleccion");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", calcular);
num1.addEventListener("input", verificarDivision);
num2.addEventListener("input", verificarDivision);
seleccion.addEventListener("change", verificarDivision);

function calcular() {
  const n1 = parseFloat(num1.value);
  const n2 = parseFloat(num2.value);
  let res;

  switch (seleccion.value) {
    case "suma":
      res = n1 + n2;
      break;
    case "resta":
      res = n1 - n2;
      break;
    case "multiplicacion":
      res = n1 * n2;
      break;
    case "division":
      res = n1 / n2;
      break;
    default:
      res = "Operación no válida";
  }

  resultado.textContent = `Resultado: ${res}`;
}
function verificarDivision() {
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value); 
    if (seleccion.value === "division" && (n2 === 0 || n1 === 0)) {
        resultado.textContent = "Error: División por cero no permitida.";
        boton.disabled = true;}
        else {
        boton.disabled = false; 
        
        return;
    }
}
