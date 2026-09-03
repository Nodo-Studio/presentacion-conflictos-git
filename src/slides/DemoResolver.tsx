function DemoResolver() {
  return (
    <>
      <section>
        <h2>Así se muestra el conflicto detectado</h2>

        <pre className="fragment fade-in">
          <code className="nohighlight" data-trim data-noescape>
            <span className="marker-head">{"<<<<<<< HEAD"}</span>
            {"\nHola mundo v2\n"}
            <span className="marker-sep">{"======="}</span>
            {"\nHola, ¿cómo estás?\n"}
            <span className="marker-head">{">>>>>>> feature-saludo"}</span>
          </code>
        </pre>
        <p className="concepto-warning fragment fade-in">
          Git <strong>pausó el merge</strong> y marcó el archivo con las dos
          versiones: arriba la tuya (<span className="marker-head">HEAD</span>),
          abajo la que llega de{" "}
          <span className="marker-head">feature-saludo</span>.
        </p>
      </section>

      <section>
        <h2>Paso a paso: resolviendo el conflicto</h2>
        <pre className="codigo-demo">
          <code
            className="language-bash"
            data-trim
            data-line-numbers="1-4|6-15|17-19|21-23|25-27|29-38"
          >
            {`# 1. Verificamos el estado del repo
git status
#    → salida: "both modified: saludo.txt"
#    (confirma qué archivo está en conflicto)

# 2. Abrimos el archivo y quitamos los 3 marcadores
#    ANTES (archivo en conflicto):
#    ┌ <<<<<<< HEAD
#    │ Hola mundo v2
#    │ =======
#    │ Hola, ¿cómo estás?
#    └ >>>>>>> feature-saludo
#
#    DESPUÉS (versión elegida):
#    Hola, ¿cómo estás?

# 3. Marcamos el conflicto como resuelto
git add saludo.txt
#    (staging = "ya lo resolví, Git")

# 4. Verificamos que no quede nada pendiente
git status
#    → salida: "all conflicts fixed"

# 5. Completamos el merge
git commit
#    (crea el commit de merge con su mensaje)

# 6. Confirmamos el resultado en el historial
git log --graph --oneline --all
#    → salida:
#    *   7f3a1c2  Merge branch 'feature-saludo'
#    |\\
#    | * a2b5d6e  cambio el saludo desde la rama
#    * | c9d8b4f  otro saludo en main
#    |/
#    * 1e2f3a4  base: saludo inicial
#    (la bifurcación se unió en el commit de merge)`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Archivo resuelto</h2>
        <pre>
          <code className="nohighlight" data-trim data-noescape>
            <span className="resuelto">{"Hola, ¿cómo estás?"}</span>
          </code>
        </pre>
        <div className="concepto-info fragment">
          <p>
            <strong>Elegimos la versión de la rama.</strong> El flujo completo
            fue:
          </p>
          <ol className="flujo-git">
            <li>
              <code>git status</code> — confirmar el archivo en conflicto
            </li>
            <li>Quitar los marcadores — elegir la versión</li>
            <li>
              <code>git add saludo.txt</code> — conflicto resuelto
            </li>
            <li>
              <code>git commit</code> — merge completo
            </li>
            <li>
              <code>git log --graph</code> — confirmar la unión
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default DemoResolver;
