import Encabezado from "./components/Encabezado";
import Hero from "./components/Hero";

import BicicletasDestacadas from "./components/BicicletasDestacadas";

import Alquiler from "./components/Alquiler";

export default function Home() {
  return (
    <div id="inicio">
      <Encabezado />
      <main>
        <Hero />
        <BicicletasDestacadas />
        <Alquiler />
      </main>
    </div>
  );
}
