import Image from "next/image";

export default function Hero() {
  return (
    <section aria-labelledby="titulo-portada" className="bg-[#151515] text-[#F5F5F0]">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h1 id="titulo-portada" className="text-4xl font-bold tracking-tight md:text-6xl">
            Compra o alquila tu próxima bicicleta
          </h1>
        </div>
        <Image
          src="/bicicletas/Rodar_Hero_Transparente.webp"
          alt="Bicicleta de rodar"
          width={1536}
          height={1024}
          sizes="(min-width: 1152px) 536px, (min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
