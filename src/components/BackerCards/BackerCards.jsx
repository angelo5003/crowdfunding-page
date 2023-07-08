import "./BackerCards.css";
import {
  infoArrayPropTypes,
  infoPropTypes,
} from "../../utils/PropTypes/PropTypes";

const BackerCards = ({ info, infoDataArray }) => {
  console.log(`infoData:`, infoDataArray);

  return (
    <div className="backercards-outer-container">
      <article
        className={`${
          info.id === 4
            ? "backercards-out-of-stock"
            : "backercards-info-container"
        }`}
      >
        <div className="backercards-title-container">
          <h4 className="product-name">{info.productTitle}</h4>
          <p className="product-pledge">{info.pledge}</p>
        </div>

        <p className="backercard-product-description">
          {info.productDescription}
        </p>
        <p className="backercard-product-description">
          {info.productsLeft} left
        </p>
        <button className="backercard-product-btn" disabled>
          {info.productButton}
        </button>
      </article>
    </div>
  );
};

BackerCards.propTypes = infoArrayPropTypes;
BackerCards.propTypes = infoPropTypes;

export default BackerCards;
