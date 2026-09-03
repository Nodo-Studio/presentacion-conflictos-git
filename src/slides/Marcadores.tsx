function Marcadores() {
  return (
    <>
      <section data-auto-animate>
        <h2>Así se ve : antes del conflicto</h2>
        <pre data-id="codigo">
          <code className="language-javascript" data-trim>
            {`// saludo.js
function saludar() {
  return "Hola mundo";
}

console.log(saludar());`}
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <h2>Así se ve: durante el conflicto</h2>
        <div className="conflicto-layout">
          <div className="conflicto-codigo">
            <pre data-id="codigo">
              <code className="language-javascript" data-trim>
                {`// saludo.js
function saludar() {
<<<<<<< HEAD
  return "Hola mundo";
=======
  return "Hola, ¿cómo estás?";
>>>>>>> feature-saludo
}

console.log(saludar());`}
              </code>
            </pre>
          </div>
          <div className="conflicto-info">
            <h3 className="info-titulo">Tu versión (HEAD)</h3>
            <p>
              Es la rama en la que estás parado: lo que <strong>tú</strong>{" "}
              cambiaste.
            </p>
            <div className="conflicto-screenshot">
              Pantallazo de un conflicto real en GitHub
            </div>
          </div>
        </div>
        <p className="fragment small" style={{ textAlign: "left" }}>
          <span className="marker-head">{"<<<<<<< HEAD"}</span> — tu versión
          (rama actual)
          <br />
          <span className="marker-sep">{"======="}</span> — separador de
          versiones
          <br />
          <span className="marker-head">{">>>>>>> feature-saludo"}</span> — la
          versión entrante
        </p>
      </section>{" "}
    </>
  );
}

export default Marcadores;
