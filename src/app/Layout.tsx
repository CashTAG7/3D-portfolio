import { Outlet } from 'react-router-dom';
import Menu from '../components/layoutComponents/Menu';

export default function Layout() {
  return (
    <body>
      <Menu />
      <Outlet />
    </body>
  );
}
