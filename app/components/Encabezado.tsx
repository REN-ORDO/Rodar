export default function Encabezado() {
  return (
    <header className="border-b border-[#E5E5E0] bg-[#F5F5F0] text-[#151515]">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
        <svg
          aria-hidden="true"
          viewBox="0 0 100 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="w-12"
        >
          <circle cx="33" cy="30" r="22" strokeDasharray="110 28" transform="rotate(-35 33 30)" />
          <circle cx="65" cy="30" r="22" strokeDasharray="110 28" transform="rotate(145 65 30)" />
          <path d="M33 30H65" />
        </svg>
        <span className="text-2xl font-bold">rodar</span>
      </div>
    </header>
  );
}
