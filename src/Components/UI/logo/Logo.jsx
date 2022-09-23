import { NavLink } from 'react-router-dom';
import cl from './Logo.module.css';

function Logo() {
  return (
    <NavLink to="/" className={cl.logo_wrapper}>
      <h1 className={cl.first_line}>Чайная.</h1>
      <div className={cl.second_line}>
        <h3>Коллеционный китайский чай</h3>
        <h1>
          <span>Дом</span>
          <span>чая.</span>
        </h1>
      </div>
    </NavLink>
  );
}

export default Logo;
