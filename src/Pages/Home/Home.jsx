import "./HomeStyle.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className="home-page-container">
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
