function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("suma");
  const [resultado, setResultado] = React.useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = 0;

    switch (operacion) {
      case "suma":
        res = a + b;
        break;
      case "resta":
        res = a - b;
        break;
      case "multiplicacion":
        res = a * b;
        break;
      case "division":
        res = a / b;
        break;
      default:
        res = "Operacion invalida";
    }

    setResultado(res);
  };

  const camposVacios = num1 === "" || num2 === "";
  const esDivisionInvalida =
    operacion === "division" && parseFloat(num2) === 0;
  const botonDeshabilitado = camposVacios || esDivisionInvalida;

  return (
    <div className="contenedor">
      <h2>Calculadora React</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <select
        value={operacion}
        onChange={(e) => setOperacion(e.target.value)}
      >
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicacion</option>
        <option value="division">Division</option>
      </select>
      <button onClick={calcular} disabled={botonDeshabilitado}>
        Calcular
      </button>

      {resultado !== null && (
        <p className="resultado">Resultado: {resultado}</p>
      )}

      {camposVacios && (
        <p className="advertencia"> Ambos campos deben estar completos.</p>
      )}

      {!camposVacios && esDivisionInvalida && (
        <p className="advertencia">
           No se puede dividir si uno de los valores es cero.
        </p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
