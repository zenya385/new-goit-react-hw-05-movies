import { NavLink } from 'react-router-dom';
import s from './AppNav.module.css';

const AppNav = () => {
  return (
    <header className={s.header}>
      <NavLink exact to="/" className={s.link}>
        Home
      </NavLink>
      <NavLink to="/movis" className={s.link}>
        Movies
      </NavLink>
    </header>
  );
};

export default AppNav;
