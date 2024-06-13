
import ProductCard from '../components/ProductCard/ProductCard';
import '../assets/styles/ProductsPage.scss';
import card1 from '../assets/images/t-shirt1.jpg'
import card2 from '../assets/images/sweather1.jpg'
import card3 from '../assets/images/hoodie1.jpg'
import card4 from '../assets/images/jeans1.jpg'
import card5 from '../assets/images/card1.jpg'
import card6 from '../assets/images/t-shirt4.jpg'
import card7 from '../assets/images/turki.jpg'
import card8 from '../assets/images/t-shirt3.jpg'
const products = [
  { id: 1, image: card2, name: 'Свитер', price: '$25' },
  { id: 2, image: card1, name: 'Футболка Коти', price: '$40' },
  { id: 3, image: card3, name: 'Куртка Japan vibe ', price: '$50' },
  { id: 4, image: card4, name: 'Джинсы потертые', price: '$25' },
  { id: 5, image: card5, name: 'Oversized Hoodie', price: '$40' },
  { id: 6, image: card6, name: 'Oversized Jeans', price: '$50' },
  { id: 7, image: card7, name: 'Oversized T-Shirt', price: '$25' },
  { id: 8, image: card8, name: 'Oversized Hoodie', price: '$40' },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="products">
      <h1 className="products__title">Коллекция</h1>
      <div className="products__list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
