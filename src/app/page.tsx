import Image from "next/image";
import Footer from "@/components/layout/footer";
import { HeroSpotlight } from "@/components/sections/paintHero";

export default function Home() {
  return (
    <>
      <HeroSpotlight>
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] px-6 py-12 gap-10">
          <div className="flex flex-col gap-5 text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
              Hello World!
            </h1>
            <h2 className="text-xl md:text-2xl font-bold opacity-90">
              Sou Eduardo Luiz Lima, Desenvolvedor FullStack
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-80">
              Atualmente, atuo como Desenvolvedor e Assessor de Marketing na{" "}
              <strong className="font-semibold">byron.solutions</strong>, além
              de integrar a área de Investigation na equipe de CTF{" "}
              <strong className="font-semibold">HawkSec</strong>. Combino visão
              de produto, estratégia de mercado e desenvolvimento técnico para
              criar soluções web eficientes e completas.
            </p>
          </div>

          <div className="relative w-56 h-56 md:w-80 md:h-80 shrink-0">
            <Image
              src="/images/fotoHome.jpg"
              alt="Foto de Eduardo Luiz Lima"
              fill
              className="rounded-full object-cover shadow-2xl border-4 border-background"
              priority
            />
          </div>
        </div>
        <div className="className ">
          <p>sajhdgsaghkagfjhagfhja</p>
          <div></div>
        </div>
      </HeroSpotlight>

      <section
        id="projetos"
        className="min-h-screen bg-foreground text-background py-16 px-6"
      ></section>

      <Footer />
    </>
  );
}
