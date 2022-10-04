/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom';
import { ComeBackAlive } from '../../assets/svg/logo_come_back_alive_ukr';
import Drawer from '../Drawer';
import cls from './index.module.scss';
import './index.scss';

const Header = () => {
  const logo = require('../../assets/img/logo1.jpeg');
  return (
    <header uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to={'/'}>
                <img className={cls.logo} src={logo} alt="logo" />
                React Store
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Drawer />
            </li>
            <li className="uk-active">
              <Link to={'/favoritePage'} uk-icon="heart"></Link>
            </li>
            <li className="uk-active">
              <a href="https://savelife.in.ua/">
                <ComeBackAlive />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
