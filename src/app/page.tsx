import Footer from "@/components/layout/footer";
import { HeroPaint } from "@/components/sections/paintHero";

export default function Home() {
  return (
    <>
      <HeroPaint>
        <div className="flex flex-row items-center w-full h-full gap-6 bg-red-700 text-center">
          <div className="h-100 bg-amber-100 w-100"></div>
          <div className="h-100 w-100 bg-amber-600"></div>
        </div>
      </HeroPaint>

      <section className="h-1000 bg-foreground text-background"></section>

      <Footer></Footer>
    </>
  );
}
