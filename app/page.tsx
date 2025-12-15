import Hero from "@/components/Hero";
import Book from "@/components/Book";
import Detail from "@/components/Detail";
import About from "@/components/About";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main>
      <Loader />
      <Hero />
      <Book />
      <Detail />
      <About />
      <Work />
      <Footer />
    </main>
  );
}
