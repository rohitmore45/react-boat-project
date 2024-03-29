import "./App.css";
import HeroSection1 from "./components/Hero1/HeroSection1";
import HeroSection2 from "./components/Hero2/HeroSection2";
import HeroSection3 from "./components/Hero3/HeroSection3";
import Categories from "./components/categories/Categories";
import Footer from "./components/footer/Footer";
import Carousel from "./components/main/Carousel";
import BoatNavbar from "./components/navbar/BoatNavbar";
import OfferSection from "./components/offer/OfferSection";
function App() {
  return (
    <>
      <BoatNavbar />
      <Carousel />
      <HeroSection1 />
      <OfferSection />
      <HeroSection2 />
      <Categories />
      <HeroSection3 />
      <Footer />
    </>
  );
}

export default App;
