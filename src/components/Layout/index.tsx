import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

export function Layout() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
