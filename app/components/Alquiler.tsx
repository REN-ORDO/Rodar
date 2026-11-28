import estilos from "./Alquiler.module.css";

export default function Alquiler() {
  return (
    <section id="alquiler" className={estilos.alquiler} aria-labelledby="titulo-alquiler">
      <div className={`contenedor ${estilos.contenido}`}>
        <div>
          <p className="etiqueta">Alquiler de bicicletas</p>
          <h2 id="titulo-alquiler">¿Solo por hoy?</h2>
        </div>
        <p>Elige tu bici y recorre la ciudad a tu ritmo. Alquila por horas o por días.</p>
      </div>
    </section>
  );
}
