import "./HeroSectionStyle.css";
import ProductImg from "../../assets/images/image-hero-mobile.jpg";

const HeroSection = () => {
  return (
    <div className="background-img-container">
      <img
        src={ProductImg}
        alt="product-image"
        className="product-background"
      />
    </div>
  );
};

export default HeroSection;
