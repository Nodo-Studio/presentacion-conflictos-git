function Herramientas() {
  return (
    <section>
      <h2>Herramientas que ayudan</h2>
      <ul>
        <li className="fragment fade-in">
          <strong>Editor con merge de 3 vías</strong> — VS Code, JetBrains:
          muestra base, tu versión y la entrante
        </li>
        <li className="fragment fade-in">
          <strong>
            <code>git mergetool</code>
          </strong>{" "}
          — abre tu herramienta favorita desde la terminal
        </li>
        <li className="fragment fade-in">
          <strong>Interfaces gráficas</strong> — GitHub Desktop, GitKraken,
          Fork: visualizan ramas y conflictos
        </li>
        <li className="fragment fade-in">
          <strong>La web de GitHub</strong> — resolver el conflicto desde la
          interfaz del pull request
        </li>
      </ul>
      <p className="concepto-info fragment">
        <strong>Las herramientas no reemplazan entender Git:</strong> solo hacen
        cómoda la decisión que tú tomas.
      </p>
    </section>
  );
}

export default Herramientas;
