import React from 'react';
import cl from './CartPage.module.css';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RegularBtn } from '../../components/ui/buttons/RegularBtn';
import { useNavigate } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { idList, totalCount } = useTypedSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <div className={cl.page_wrapper}>
      <div>
        <div>totalCount: {totalCount}</div>
        <div>
          Product Id List:
          {idList.map((item) => {
            return <span key={item}> id = {item} | </span>;
          })}
        </div>
      </div>
      <RegularBtn green onClick={() => navigate(-1)}>
        вернуться
      </RegularBtn>
    </div>
  );
};

export default CartPage;
