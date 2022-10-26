import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Menu } from '../Menu';

export function Layout() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Menu />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
