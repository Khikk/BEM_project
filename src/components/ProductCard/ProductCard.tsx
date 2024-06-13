
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
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;