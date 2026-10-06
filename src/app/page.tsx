import { HeroPaint } from "@/components/sections/paintHero";

export default function Home() {
  return (
    <>
      <HeroPaint>
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-display text-5xl md:text-7xl">Bem-vindo</h1>
        </div>
      </HeroPaint>

      <section className="bg-foreground text-background"></section>
    </>
  );
}
