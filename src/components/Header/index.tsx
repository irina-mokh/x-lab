import logo from '../../assets/icons/logo.svg';
import user from '../../assets/icons/user.svg';
import { Link } from 'react-router-dom';
import { Hamburger } from '../Hamburger';
import { IMenuProps } from '../Layout';

export const Header = (props: IMenuProps) => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="logo">
          <img src={logo} className="logo__img" alt="logo" />
          <span className="logo__text">Wrench CRM</span>
        </Link>
        <Link to="user" className="user">
          <div className="user__img">
            <img src={user} alt="avatar" />
          </div>
          <span className="user__name">Имя Фамилия</span>
        </Link>
        <Hamburger isOpened={props.isOpened} toggleMenu={props.toggleMenu} />
      </nav>
    </header>
  );
};
