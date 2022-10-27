import { MenuItem } from '../MenuItem';

export interface IMenuLink {
  index: number;
  title: string;
  route: string;
  ico: string;
  sub?: Array<IMenuLink>;
}

const menu: Array<IMenuLink> = [
  {
    index: 0,
    title: 'Главная',
    route: '/',
    ico: 'home',
  },
  {
    index: 1,
    title: 'Поиск адресов',
    route: 'address',
    ico: 'search',
  },
  {
    index: 2,
    title: 'Таблицы',
    route: 'tables',
    ico: 'tables',
  },
  {
    index: 3,
    title: 'Календарь',
    route: 'calendar',
    ico: 'calendar',
  },
  {
    index: 4,
    title: 'Карты',
    route: 'maps',
    ico: 'map',
  },
  {
    index: 5,
    title: 'Виджеты',
    route: 'widgets',
    ico: 'widget',
  },
  {
    index: 6,
    title: 'Настройки',
    route: 'settings',
    ico: 'settings',
    sub: [
      {
        index: 0,
        title: 'Настройки профиля',
        route: 'settings-user',
        ico: 'user-menu',
      },
      {
        index: 1,
        title: 'Управление финансами',
        route: 'settings-finance',
        ico: 'finance',
      },
    ],
  },
  {
    index: 7,
    title: 'Выход',
    route: 'logout',
    ico: 'exit',
  },
];

const items = menu.map((item) => (
  <li key={item.index} className="menu__li">
    <MenuItem {...item}></MenuItem>
  </li>
));

export const Menu = () => {
  return (
    <nav className="menu">
      <h3 className="menu__header">Меню</h3>
      <ul>{items}</ul>
    </nav>
  );
};
