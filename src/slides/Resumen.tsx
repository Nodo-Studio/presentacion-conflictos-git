function Resumen() {
  return (
    <section>
      <h2>Resumen</h2>
      <ul>
        <li className="fragment fade-in">
          Los conflictos son <strong>normales</strong> en el trabajo en equipo
        </li>
        <li className="fragment fade-in">
          Git los <strong>marca claramente</strong> y espera tu decisión
        </li>
        <li className="fragment fade-in">
          El flujo siempre es :
          <code> status → diff → resolver → add → commit</code>
        </li>
        <li className="fragment fade-in">
          Las <strong>buenas prácticas</strong> los reducen; las herramientas
          los hacen cómodos
        </li>
      </ul>
    </section>
  );
}

export default Resumen;
