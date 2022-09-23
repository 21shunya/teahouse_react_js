import RegularBtn from '../UI/buttons/RegularBtn';
import { Link, useNavigate } from 'react-router-dom';
import NumberIcon from '../UI/icons/NumberIcon';
import cl from './Shop.module.css';
import ArrowIcon from '../UI/icons/ArrowIcon';

function ShopNavbar(props) {
  const navigate = useNavigate();
  const buttonsList = [
    { name: 'Корзина', value: 0, path: '/cart' },
    { name: 'Избранное', value: 0, path: '/favourite' },
    { name: 'Профиль', value: '', path: '/profile' },
  ];

  const navbarClasses = [cl.navbar];
  if (props.productPage) {
    navbarClasses.push(cl.product_navbar);
  }

  return (
    <div className={navbarClasses.join(' ')}>
      {props.productPage && (
        <RegularBtn green onClick={() => navigate(-1)}>
          <ArrowIcon left />
          Каталог
        </RegularBtn>
      )}
      {buttonsList.map((btn) => (
        <Link key={btn.path} to={btn.path}>
          <RegularBtn>
            {btn.name}
            {btn.name !== 'Профиль' ? <NumberIcon filled>{btn.value}</NumberIcon> : null}
          </RegularBtn>
        </Link>
      ))}
    </div>
  );
}
export default ShopNavbar;
