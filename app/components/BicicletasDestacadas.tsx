import Image from "next/image";
import estilos from "./BicicletasDestacadas.module.css";

const bicicletas = [
  {
    nombre: "Trail X1",
    categoria: "Montaña · Rin 29",
    foto: "/bicicletas/gris-grafito.webp",
    descripcionFoto: "Trail X1 gris grafito de perfil",
    precio: 1850000,
  },
  {
    nombre: "Velo R2",
    categoria: "Ruta · Rin 700",
    foto: "/bicicletas/azul-petroleo.webp",
    descripcionFoto: "Velo R2 azul petróleo de perfil",
    precio: 2490000,
  },
  {
    nombre: "Urban One",
    categoria: "Urbana · Rin 700",
    foto: "/bicicletas/blanca-rodar.webp",
    descripcionFoto: "Urban One blanca de perfil",
    precio: 1290000,
  },
];

const formatoPrecio = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  currencyDisplay: "code",
  maximumFractionDigits: 0,
});

export default function BicicletasDestacadas() {
  return (
    <section id="bicicletas" className={`contenedor ${estilos.bicicletas}`} aria-labelledby="titulo-bicicletas">
      <p className={`etiqueta ${estilos.etiqueta}`}>Bicicletas Rodar</p>
      <h2 id="titulo-bicicletas">Encuentra tu ritmo.</h2>

      <div className={estilos.lista}>
        {bicicletas.map((bicicleta) => (
          <article className={estilos.bicicleta} key={bicicleta.nombre}>
            <div className={estilos.foto}>
              <Image
                src={bicicleta.foto}
                alt={bicicleta.descripcionFoto}
                width={1774}
                height={887}
                sizes="(min-width: 1280px) 380px, (min-width: 821px) 33vw, 100vw"
              />
            </div>
            <div className={estilos.informacion}>
              <p className={`etiqueta ${estilos.categoria}`}>{bicicleta.categoria}</p>
              <h3>{bicicleta.nombre}</h3>
              <p>{formatoPrecio.format(bicicleta.precio)}</p>
            </div>
          </article>
        ))}
      </div>
      <p className={estilos.nota}>Modelos y precios de ejemplo.</p>
    </section>
  );
}
