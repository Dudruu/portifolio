import Image from "next/image";
import Footer from "@/components/layout/footer";
import { HeroSpotlight } from "@/components/sections/spotlight";

export default function Home() {
  return (
    <>
      <HeroSpotlight>
        <div className="container mx-auto flex flex-col justify-between min-h-[85vh] px-6 py-12">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 my-auto">
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
                <strong className="font-semibold">HawkSec</strong>. Combino
                visão de produto, estratégia de mercado e desenvolvimento
                técnico para criar soluções web eficientes e completas.
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

          <div className="flex flex-col items-center justify-center text-center mt-8 gap-3">
            <p className="text-sm md:text-base font-medium opacity-75 tracking-wide">
              Veja abaixo mais sobre mim, meus projetos e minha stack
            </p>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1.5 transition-all group-hover:scale-105">
              <div className="w-1 h-2.5 bg-current rounded-full animate-scroll-wheel" />
            </div>
          </div>
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
