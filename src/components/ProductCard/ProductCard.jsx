import "./ProductCardStyle.css";
import BrandLogo from "../../assets/images/logo-mastercraft.svg";
import BookMark from "../../assets/images/icon-bookmark.svg";

const ProductCard = () => {
  return (
    <>
      <div className="brand-logo-container">
        <img src={BrandLogo} alt="brand-logo" />
      </div>
      <article className="product-card-container">
        <h2 className="product-title">Mastercraft Bamboo Monitor Riser</h2>
        <p className="product-info">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="button-container">
          <button className="green-btn">Back this project</button>
          <button className="bookmark-btn">
            <img src={BookMark} alt="bookmark-image" />
          </button>
        </div>
      </article>
    </>
  );
};

export default ProductCard;
