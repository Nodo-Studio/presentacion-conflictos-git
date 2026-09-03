function ComandosClave() {
  return (
    <section>
      <h2>Comandos para sobrevivir a un conflicto</h2>
      <table className="tabla-operaciones">
        <tbody>
          <tr className="fragment fade-in">
            <td>
              <code>git status</code>
            </td>
            <td>¿qué está en conflicto?</td>
          </tr>
          <tr className="fragment fade-in">
            <td>
              <code>git diff</code>
            </td>
            <td>ver las diferencias exactas</td>
          </tr>
          <tr className="fragment fade-in">
            <td>
              <code>git merge --abort</code>
            </td>
            <td>cancelar todo y volver atrás</td>
          </tr>
          <tr className="fragment fade-in">
            <td>
              <code>git add "archivo"</code>
            </td>
            <td>marcar como resuelto</td>
          </tr>
          <tr className="fragment fade-in">
            <td>
              <code>git rebase --continue</code>
            </td>
            <td>seguir tras resolver en rebase</td>
          </tr>
        </tbody>
      </table>
      <p className="fragment small">
        Si dudas: <code>--abort</code> siempre te saca del problema.
      </p>
    </section>
  );
}

export default ComandosClave;
