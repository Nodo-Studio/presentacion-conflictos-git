function PorQueExisten() {
  return (
    <section>
      <h2>¿Por qué existen los conflictos?</h2>
      <ul>
        <li className="fragment fade-in">
          Git permite <strong>trabajo en paralelo</strong>: cada persona en su
          rama
        </li>
        <li className="fragment fade-in">
          Dos ramas editan <strong>la misma parte</strong> de un archivo
        </li>
        <li className="fragment fade-in">
          Los cambios son <strong>incompatibles</strong>: no se combinan
          automáticamente
        </li>
      </ul>
      <p className="concepto-warning fragment fade-in">
        Git <em>no decide por ti</em> : pausa la operación y pregunta a un
        humano
      </p>
      <p className="fragment small">
        No es un error: es Git protegiendo el código de pérdidas silenciosas.
      </p>
    </section>
  );
}

export default PorQueExisten;
