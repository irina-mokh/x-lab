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
        <div className="page">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
