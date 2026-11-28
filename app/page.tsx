import Encabezado from "./components/Encabezado";
import Hero from "./components/Hero";
import BicicletasDestacadas from "./components/BicicletasDestacadas";
import Alquiler from "./components/Alquiler";
import PieDePagina from "./components/PieDePagina";

export default function Inicio() {
  return (
    <div id="inicio">
      <Encabezado />
      <main>
        <Hero />
        <BicicletasDestacadas />
        <Alquiler />
      </main>
      <PieDePagina />
    </div>
  );
}
