import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--fuente-cuerpo",
});

const spaceGrotesk = localFont({
  src: "../node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2",
  weight: "300 700",
  variable: "--fuente-titulos",
});

export const metadata: Metadata = {
  title: "Rodar · El camino es tuyo",
  description: "Encuentra tu próxima bicicleta para comprar o alquilar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
