import type { Metadata } from "next";
import { Fredoka, Lexend } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-display",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creciendo Juntos en Cristo",
  description: "Escuelita Dominical — muy pronto, juegos bíblicos para toda la familia.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fredoka.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
