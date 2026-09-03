import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight";
import type { RevealApi } from "reveal.js";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./index.css";
import Portada from "./slides/Portada";
import QueEsConflicto from "./slides/QueEsConflicto";
import PorQueExisten from "./slides/PorqueExisten";
import Marcadores from "./slides/Marcadores";
import CuandoAparecen from "./slides/CuandoAparecen";
import DemoConflicto from "./slides/DemoConflicto";
import DemoResolver from "./slides/DemoResolver";
import Herramientas from "./slides/Herramientas";
import BuenasPracticas from "./slides/BuenasPracticas";
import ComandosClave from "./slides/ComandosClaves";
import Resumen from "./slides/Resumen";
import Gracias from "./slides/Gracias";

function App() {
  const revealRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<RevealApi | null>(null);

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
    }
  }, []);

  return (
    <>
      <div ref={revealRef} className="reveal">
        <div className="slides">
          <Portada />
          <QueEsConflicto />
          <PorQueExisten />
          <CuandoAparecen />
          <Marcadores />
          <DemoConflicto />
          <DemoResolver />
          <Herramientas />
          <BuenasPracticas />
          <ComandosClave />
          <Resumen />
          <Gracias />
        </div>
      </div>
    </>
  );
}

export default App;
