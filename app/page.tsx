import Encabezado from "./components/Encabezado";
import Hero from "./components/Hero";

import BicicletasDestacadas from "./components/BicicletasDestacadas";

import Alquiler from "./components/Alquiler";

export default function Home() {
  return (
    <>
      <Encabezado />
      <main>
        <Hero />
        <BicicletasDestacadas />
        <Alquiler />
      </main>
    </>
  );
}
