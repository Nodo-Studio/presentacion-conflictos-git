import { useEffect, useRef, useState } from "react";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight";
import type { RevealApi } from "reveal.js";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./index.css";
import Portada from "./slides/Portada";

function App() {
  const revealRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //Barra de progreso:
    if (revealRef.current && !deckRef.current) {
      deckRef.current = new Reveal(revealRef.current, {
        hash: true,
        slideNumber: true,
        transition: "slide",
        plugins: [RevealHighlight],
      });

      deckRef.current.initialize();

      //Barra de progrtesso
      deckRef.current.on("slidechanged", () => {
        setProgress(deckRef.current!.getProgress());
      });
    }
  }, []);

  return (
    <>
      <div ref={revealRef} className="reveal">
        <div className="slides">
          <Portada />
        </div>
      </div>
      <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
    </>
  );
}

export default App;
