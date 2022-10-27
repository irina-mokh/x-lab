import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { SideBar } from '../SideBar';
import { useState } from 'react';

export interface IMenuProps {
  isOpened: boolean;
  toggleMenu: () => void;
}

export function Layout() {
  const [isOpened, setIsOpened] = useState(true);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      <Header isOpened={isOpened} toggleMenu={toggleMenu} />
      <main className="main">
        <SideBar />
        {isOpened && (
          <div className="burger-menu">
            <Menu />
          </div>
        )}
        <div className="page">
          <Outlet />
        </div>
      </main>
    </>
  );
}
