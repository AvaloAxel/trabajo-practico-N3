function App() {
  const [habilitado, setHabilitado] = React.useState('izquierdo');

  const manejarClic = (boton) => {
    setHabilitado(boton === 'izquierdo' ? 'derecho' : 'izquierdo');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => manejarClic('izquierdo')}
        disabled={habilitado !== 'izquierdo'}
      >
        Izquierdo
      </button>

      <button
        onClick={() => manejarClic('derecho')}
        disabled={habilitado !== 'derecho'}
        style={{ marginLeft: '20px' }}
      >
        Derecho
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
