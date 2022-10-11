import { RegularBtn } from '../ui/buttons/RegularBtn';
import { Link, useNavigate } from 'react-router-dom';
import { NumberIcon } from '../ui/icons/NumberIcon';
import cl from './Shop.module.css';
import ArrowIcon from '../ui/icons/ArrowIcon';
import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface IShopNavbar {
  productPage: boolean;
}

export const ShopNavbar: React.FC<IShopNavbar> = (props) => {
  const CartTotalCount = useTypedSelector((state) => state.cart.totalCount);
  const FavorTotalCount = useTypedSelector((state) => state.favorite.totalCount);
  const navigate = useNavigate();
  const buttonsList = [
    { name: 'Корзина', value: CartTotalCount, path: '/cart' },
    { name: 'Избранное', value: FavorTotalCount, path: '/favourite' },
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
        <Link key={btn.path} to={'/shop' + btn.path}>
          <RegularBtn green={false}>
            {btn.name}
            {btn.name !== 'Профиль' ? <NumberIcon filled>{btn.value}</NumberIcon> : null}
          </RegularBtn>
        </Link>
      ))}
    </div>
  );
};
