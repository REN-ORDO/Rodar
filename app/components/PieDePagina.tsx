import estilos from "./PieDePagina.module.css";

export default function PieDePagina() {
  return (
    <footer className={estilos.pie}>
      <div className={`contenedor barra ${estilos.contenido}`}>
        <a className={`marca ${estilos.marca}`} href="#inicio" aria-label="Rodar, volver al inicio">
          rodar.
        </a>
        <p>Siempre hay una nueva ruta.</p>
      </div>
    </footer>
  );
}
