import "./App.css";
import HeroSection1 from "./components/Hero1/HeroSection1";
import HeroSection2 from "./components/Hero2/HeroSection2";
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
    </>
  );
}

export default App;
