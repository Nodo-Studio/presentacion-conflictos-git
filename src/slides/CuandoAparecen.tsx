function CuandoAparecen() {
  return (
    <section>
      <h2>¿Cuándo aparecen?</h2>
      <table>
        <thead>
          <tr>
            <th>Operación</th>
            <th>Cuándo ocurre</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fragment fade-in">
            <td>
              <code>git merge</code>
            </td>
            <td>Al fusionar dos ramas divergentes</td>
            <td>Commit de merge + resolución</td>
          </tr>
          <tr className="fragment fade-in">
            <td>
              <code>git rebase</code>
            </td>
            <td>Al reaplicar commits sobre otra base</td>
            <td>Un conflicto por commit reaplicado</td>
          </tr>
          <tr className="fragment fade-in">
            <td>
              <code>git pull</code>
            </td>
            <td>Al descargar cambios remotos incompatibles</td>
            <td>Es un merge (o rebase) oculto</td>
          </tr>
          <tr className="fragment fade-in">
            <td>
              <code>git stash pop</code>
            </td>
            <td>Al restaurar cambios guardados</td>
            <td>Conflicto local</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CuandoAparecen;
