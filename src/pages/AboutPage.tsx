import '../assets/styles/AboutPage.scss';
import { ReactComponent as Tg } from '../assets/icons/tg.svg'
import { ReactComponent as Vk } from '../assets/icons/vk.svg'
import { ReactComponent as Ytb } from '../assets/icons/ytb.svg'
const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <h1 className="about__title">About Comfort Chic</h1>
      <p className="about__description">
      Comfort Chic — московский магазин одежды, специализирующийся на последних тенденциях моды оверсайз. Мы работаем исключительно через доставку.
      </p>
      <p className="about__description">
      Наша миссия - предоставить удобную, но стильную одежду для всех типов телосложения. Мы считаем, что мода должна быть инклюзивной и доступной для всех.
      </p>
      <p className="about__description">
      Наша команда занимается отбором лучших модных вещей оверсайз, которые не только хорошо выглядят, но и приятны в носке. Мы закупаем нашу продукцию у проверенных поставщиков, которые разделяют нашу приверженность качеству и устойчивому развитию.
      </p>
      <p className="about__description">
      В Comfort Chic мы уделяем первостепенное внимание потребностям наших клиентов и стремимся предоставить исключительный сервис. Мы предлагаем бесперебойный опыт покупок в Интернете и гарантируем, что ваши заказы будут доставлены быстро и эффективно.
      </p>
      <p className="about__description">
      Спасибо, что выбрали Comfort Chic. Мы надеемся, что вам понравится наша коллекция так же, как нам понравилось курировать ее для вас.
      </p>
        <div className='about__community'>
          <h1>#COMFORTC_COMMUNITY</h1>
          <p>Мы создаем комьюнити из прогрессивных и творческих людей. 
          <br/>Из тех, кто смотрит в будущее и смело меняет мир, себя и окружающих.
          <br/>
          <br/>Присоединяйтесь!</p>
          <div className='about__icons'>
            <Tg/>
            <Vk/>
            <Ytb/>
          </div>
        </div>
    </div>

  );
};

export default AboutPage;
