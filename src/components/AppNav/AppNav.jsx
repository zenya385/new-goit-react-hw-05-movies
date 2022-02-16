import { NavLink } from 'react-router-dom';
import s from './AppNav.module.css';

const AppNav = () => {
  return (
    <header className={s.header}>
      <NavLink exact to="/" className={s.link} activeClassName={s.active}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.active}>
        Movies
      </NavLink>
    </header>
  );
};

export default AppNav;
