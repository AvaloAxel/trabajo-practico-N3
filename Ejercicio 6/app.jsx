function App() {
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [resultado, setResultado] = React.useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaMetros * alturaMetros);

    if (!isNaN(imc)) {
      let mensaje = '';
      let clase = '';

      if (imc < 18.5) {
        mensaje = 'Nivel bajo de peso.';
        clase = 'amarillo';
      } else if (imc >= 18.5 && imc <= 24.9) {
        mensaje = 'Nivel normal.';
        clase = 'verde';
      } else if (imc >= 25 && imc <= 29.9) {
        mensaje = 'Nivel de sobrepeso.';
        clase = 'naranja';
      } else {
        mensaje = 'Nivel de obesidad.';
        clase = 'rojo';
      }

      setResultado({ imc: imc.toFixed(2), mensaje, clase });
    }
  };

  return (
    <div className="contenedor">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Altura (cm)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
        />
        <button type="submit">Calcular</button>
      </form>
      {resultado && (
        <div className={`resultado ${resultado.clase}`}>
          <p>IMC: {resultado.imc}</p>
          <p>{resultado.mensaje}</p>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
