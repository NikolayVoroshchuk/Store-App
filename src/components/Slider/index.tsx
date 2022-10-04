/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import './index.scss';

const Slider = () => {
  const adidasAd = require('../../assets/img/adidasAd.png');
  const nikeAd = require('../../assets/img/nikeAd.jpeg');
  const adidasAd2 = require('../../assets/img/adidasAd2.jpeg');
  const fashionClothing = require('../../assets/img/fashion_clothing.png');
  const reebokAd = require('../../assets/img/reebokAd.jpeg');
  const blackFriday = require('../../assets/img/black_friday_clothes.jpeg');
  const reebokAd2 = require('../../assets/img/reebokAd2.jpeg');
  const creativeBannerPoster = require('../../assets/img/creative_banner_poster.jpeg');
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabIndex={-1}
      uk-slider="center: true"
    >
      <ul className="uk-slider-items uk-grid uk-width-1-1">
        <li>
          <img src={adidasAd} width="960" height="300" alt="" />
        </li>
        <li>
          <img src={nikeAd} width="960" height="300" alt="" />
        </li>
        <li>
          <img src={adidasAd2} width="960" height="300" alt="" />
        </li>
        <li>
          <img src={fashionClothing} width="960" height="300" alt="" />
        </li>
        <li>
          <img src={reebokAd} width="960" height="300" alt="" />
        </li>
        <li>
          <img src={blackFriday} width="960" height="300" alt="" />
        </li>
        <li>
          <img src={reebokAd2} width="960" height="300" alt="" />
        </li>
        <li>
          <img src={creativeBannerPoster} width="960" height="300" alt="" />
        </li>
      </ul>

      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-previous
        uk-slider-item="previous"
      ></a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        data-uk-slidenav-next
        uk-slider-item="next"
      ></a>
    </div>
  );
};

export default Slider;
