export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-background px-6 py-16">
      <main className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
          Estamos construyendo algo lindo para Crecer Juntos en Cristo 🌱
        </h1>
        <p className="max-w-md text-lg leading-8 text-foreground/80 sm:text-xl">
          Muy pronto vas a poder jugar, aprender y divertirte con nosotros.
        </p>
      </main>
    </div>
  );
}
