function Marcadores() {
  return (
    <>
      <section data-auto-animate>
        <h2>Así se ve: antes del conflicto</h2>
        <pre data-id="codigo" className="codigo-marcadores">
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
        <pre data-id="codigo" className="codigo-marcadores">
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
        <div
          className="concepto-info fragment"
          style={{ textAlign: "left", marginTop: "15px" }}
        >
          <p className="info-subtitulo">Marcadores</p>
          <p>
            <span className="marker-head">{"<<<<<<< HEAD"}</span> — tu versión
            (rama actual)
            <br />
            <span className="marker-sep">{"======="}</span> — separador de
            versiones
            <br />
            <span className="marker-head">{">>>>>>> feature-saludo"}</span> — la
            versión entrante
          </p>
        </div>
      </section>
    </>
  );
}

export default Marcadores;
