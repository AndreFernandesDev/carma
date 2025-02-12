import Header from "@/components/header/Header";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <div className="fixed inset-x-0 top-0 z-10">
        <Header />
      </div>

      <main>
        <Hero />
      </main>
    </div>
  );
}
