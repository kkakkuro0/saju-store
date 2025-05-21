import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import SajuInfo from "../components/SajuInfo";
import SajuInterpretation from "../components/SajuInterpretation";
import SajuBenefits from "../components/SajuBenefits";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SajuInfo />
        <SajuInterpretation />
        <SajuBenefits />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
