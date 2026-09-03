function QueEsConflicto() {
  return (
    <>
      <section data-auto-animate>
        <h2>¿Qué es un conflicto?</h2>
      </section>
      <section data-auto-animate>
        <h2>¿Qué es un conflicto?</h2>
        <p className="concepto">
          Situación en la que Git <strong>no puede fusionar</strong>{" "}
          automáticamente dos versiones de la misma línea o archivo, y{" "}
          <strong>pausa</strong> la operación (<code>merge</code> o{" "}
          <code>rebase</code>) para que una persona elija el resultado correcto.
        </p>
        <p className="small">
          La mayoría de los merges Git los resuelve solo (auto-merge); el
          conflicto ocurre solo cuando hay ambigüedad real.
        </p>
      </section>
    </>
  );
}

export default QueEsConflicto;
