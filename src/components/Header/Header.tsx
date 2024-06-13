
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href='./'>Comfort Chic</a>
      </div>
      <nav className="header__nav">
        <Link to="/" className="header__nav-item">Home</Link>
        <Link to="/products" className="header__nav-item">Products</Link>
        <Link to="/about" className="header__nav-item">About</Link>
      </nav>
    </header>
  );
};

export default Header;