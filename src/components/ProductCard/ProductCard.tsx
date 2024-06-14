
import './ProductCard.scss';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
  <div className="product-card">
        <img src={image} alt={name} className="product-card__image" /> 
      <div className="product-card__content">
        <h3 className="product-card__content-name">{name}</h3>
        <p className="product-card__content-price">{price}</p>
        <button className="product-card__content-btn-cart">В корзину</button>
      </div>
  </div>
  );
};

export default ProductCard;