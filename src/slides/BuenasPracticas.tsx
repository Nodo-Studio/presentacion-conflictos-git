function BuenasPracticas() {
  return (
    <section>
      <h2>Buenas prácticas para minimizarlos</h2>
      <ul>
        <li className="fragment fade-in">
          Ramas <strong>cortas en tiempo de vida</strong> — poco divergente,
          poco conflicto
        </li>
        <li className="fragment fade-in">
          <strong>Sincronizar seguido</strong>: <code>git pull</code> o{" "}
          <code>git fetch</code> antes de empezar
        </li>
        <li className="fragment fade-in">
          <strong>Commits pequeños y enfocados</strong> — más fáciles de
          reconciliar
        </li>
        <li className="fragment fade-in">
          <strong>Comunicación del equipo</strong> — avisar si se tocará un
          archivo compartido
        </li>
      </ul>
      <p className="concepto-info fragment">
        <strong>Se pueden reducir, no eliminar:</strong> la habilidad clave es
        resolverlos sin miedo.
      </p>
    </section>
  );
}

export default BuenasPracticas;
