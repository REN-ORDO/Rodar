import estilos from "./Encabezado.module.css";

export default function Encabezado() {
  return (
    <header>
      <div className={`contenedor barra ${estilos.contenido}`}>
        <a className="marca" href="#inicio" aria-label="Rodar, inicio">
          <svg aria-hidden="true" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="8">
            <circle cx="33" cy="30" r="22" strokeDasharray="110 28" transform="rotate(-35 33 30)" />
            <circle cx="65" cy="30" r="22" strokeDasharray="110 28" transform="rotate(145 65 30)" />
            <path d="M33 30H65" />
          </svg>
          rodar.
        </a>

        <nav className={estilos.navegacion} aria-label="Navegación principal">
          <a href="#bicicletas">Comprar</a>
          <a href="#alquiler">Alquilar</a>
        </nav>
      </div>
    </header>
  );
}
