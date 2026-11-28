import Encabezado from "./components/Encabezado";
import Hero from "./components/Hero";

import BicicletasDestacadas from "./components/BicicletasDestacadas";

export default function Home() {
  return (
    <>
      <Encabezado />
      <main>
        <Hero />
        <BicicletasDestacadas />
      </main>
    </>
  );
}
