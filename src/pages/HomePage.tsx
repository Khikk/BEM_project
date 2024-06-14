
import '../assets/styles/HomePage.scss';
import AboutImage from '../assets/images/about_page.jpg';
import WhyImage from '../assets/images/why_page.jpg';
const HomePage: React.FC = () => {
  return (
    <div className="home">
      <section className="home__intro">
        <h1>Добро пожаловать в Comfort Chic!</h1>
        <p>Ваш идеальный магазин для ваших лучших находок</p>
        <button className="home__intro-order-button">Заказать сейчас</button>
      </section>
      {/* <section className="home__featured">
        <h2>Featured Products</h2>
      </section> */}
      <section className="home__position">
        <div className="home__about">
          <div className="home__about-text">
            <h2>О нас</h2>
            <p>Comfort Chic стремится предложить вам последние новинки моды оверсайз. Базируясь в Москве, мы предлагаем эксклюзивные услуги по доставке.</p>
            <p>Наша миссия - предоставить удобную, но стильную одежду для всех типов телосложения. Мы считаем, что мода должна быть инклюзивной и доступной для всех.</p>
            <p>Наша команда занимается отбором лучших модных вещей оверсайз, которые не только хорошо выглядят, но и приятны в носке. Мы закупаем нашу продукцию у проверенных поставщиков, которые разделяют нашу приверженность качеству и устойчивому развитию.</p>
            <p>В Comfort Chic мы уделяем первостепенное внимание потребностям наших клиентов и стремимся предоставить исключительный сервис. Мы предлагаем бесперебойный опыт покупок в Интернете и гарантируем, что ваши заказы будут доставлены быстро и эффективно.</p>
            <p>Спасибо, что выбрали Comfort Chic. Мы надеемся, что вам понравится наша коллекция так же, как нам понравилось создавать ее для вас.</p>
          </div>
          <img src={AboutImage} alt="About Comfort Chic" className="home__about-image" />
        </div>
      </section>
      <section className="home__coupon">
        <h2>Special Discount</h2>
        <p>Используй код <strong>CHIC20</strong> при оформлении и получи скидку в 20% на первый заказ!</p>
        <form className="home__form">
          <input type="email" id="email" className="home__form-input" placeholder="Ваш e-mail" />
          <button type="submit" className="home__form-button">Get Coupon</button>
        </form>
      </section>
      <div className="home__add-info">
          <img src={WhyImage} alt="About Comfort Chic" className="home__add-info-why-image" />
        <div className="home__add-info-text">
          <h2>Почему Comfort Chic?</h2>
          <p>В Comfort Chic мы верим, что мода должна быть удобной, но стильной. Наша коллекция оверсайз гарантирует, что вы будете выглядеть шикарно, чувствуя себя непринужденно.</p>
          <p>Мы гордимся тем, что предлагаем широкий диапазон размеров для всех типов телосложения. Покупайте у нас, чтобы получить безупречный и приятный опыт.</p>
          <p>Компания Comfort Chic, расположенная в Москве, стремится предложить вам лучшее в моде оверсайз. Мы предлагаем эксклюзивные услуги доставки, гарантируя, что ваши заказы будут доставлены вам быстро и безопасно.</p>
          <p>Удовлетворение потребностей клиентов является нашим приоритетом. Наша преданная команда готова помочь вам с любыми вопросами или проблемами. Спасибо, что выбрали Comfort Chic!</p>
          <div className='home__add-info-link-products'>
            <a href='/products'> <h3>Посмотреть новую коллекция</h3>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
