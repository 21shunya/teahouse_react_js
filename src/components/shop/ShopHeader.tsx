import { ShopNavbar } from './ShopNavbar';
import { Logo } from '../ui/logo/Logo';
import cl from './Shop.module.css';
import React from 'react';

interface IShopHeader {
  productPage: boolean;
}

export const ShopHeader: React.FC<IShopHeader> = (props) => {
  const headerClasses = [cl.header];
  if (props.productPage) {
    headerClasses.push(cl.product_header);
  }

  return (
    <div className={headerClasses.join(' ')}>
      <Logo />
      <ShopNavbar productPage={props.productPage} />
    </div>
  );
};
