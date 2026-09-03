function DemoConflicto() {
  return (
    <section>
      <h2>Demo: reproduciendo un conflicto</h2>
      <pre className="codigo-demo">
        <code
          className="language-bash"
          data-trim
          data-line-numbers="1-5|7-10|12-15|17-19"
        >
          {`# 1. Creamos un repo nuevo con un commit base
git init demo && cd demo
echo "Hola mundo" > saludo.txt
git add saludo.txt
git commit -m "base: saludo inicial"

# 2. Abrimos una rama y editamos la MISMA línea
git switch -c feature-saludo
echo "Hola, ¿cómo estás?" > saludo.txt
git commit -m "cambio el saludo desde la rama"

# 3. Volvemos a main y editamos la MISMA línea distinto
git switch main
echo "Hola mundo v2" > saludo.txt
git commit -m "otro saludo en main"

# 4. Fusionamos: Git detecta cambios incompatibles
git merge feature-saludo
# ⚠ CONFLICTO en saludo.txt: Git pausa y espera tu decisión`}
        </code>
      </pre>
    </section>
  );
}

export default DemoConflicto;
