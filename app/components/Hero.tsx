import Image from "next/image";
import estilos from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={estilos.portada} aria-labelledby="titulo-portada">
      <div className={`contenedor ${estilos.contenido}`}>
        <div>
          <p className={`etiqueta ${estilos.etiqueta}`}>Compra · Alquila · Explora</p>
          <h1 id="titulo-portada">
            El camino
            <br />
            es tuyo.
          </h1>
          <p className={estilos.descripcion}>
            Encuentra tu próxima bicicleta y sal a descubrir la ciudad.
          </p>
          <div className={estilos.acciones}>
            <a className={`${estilos.boton} ${estilos.botonLima}`} href="#bicicletas">
              Comprar <span aria-hidden="true">↗</span>
            </a>
            <a className={estilos.boton} href="#alquiler">Alquilar</a>
          </div>
        </div>

        <Image
          className={estilos.bicicleta}
          src="/bicicletas/Rodar_Hero_Transparente.webp"
          alt="Bicicleta de montaña gris grafito con detalles en verde lima"
          width={1536}
          height={1024}
          sizes="(min-width: 1280px) 650px, (min-width: 821px) 55vw, 100vw"
          loading="eager"
        />
      </div>
    </section>
  );
}
