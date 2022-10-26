import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { IMenuLink } from '../Menu';
export const MenuItem = (props: IMenuLink) => {
  const { title, route, ico, sub } = props;

  const content = (
    <>
      <img src={require(`../../assets/icons/${ico}.svg`)} className="menu-item__ico" />
      <p className="menu-item__text">{title}</p>
    </>
  );

  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  };
  const [isOpened, setIsOpened] = useState(false);

  const subs = sub?.map((item) => (
    <li key={item.index}>
      <MenuItem {...item} />
    </li>
  ));
  return !sub ? (
    <NavLink
      end
      to={route}
      className={({ isActive }: { isActive: boolean }) =>
        isActive ? 'menu-item menu-item_active' : 'menu-item'
      }
    >
      {content}
    </NavLink>
  ) : (
    <>
      <div className="menu-item menu-item_parent" onClick={toggleDropdown}>
        <img src={require(`../../assets/icons/${ico}.svg`)} className="menu-item__ico" />
        <p className="menu-item__text">{title}</p>
        <button
          className={`menu-item__dropdown ${isOpened ? 'menu-item__dropdown_opened' : ''}`}
          id="dropdown"
          onClick={toggleDropdown}
        ></button>
      </div>
      {isOpened && <ul className="menu__sublist">{subs}</ul>}
    </>
  );
};
