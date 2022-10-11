import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import cl from './CartPage.module.css';
import { RegularBtn } from '../../components/ui/buttons/RegularBtn';

const FavouritePage: React.FC = () => {
  const { idList, totalCount } = useTypedSelector((state) => state.favorite);
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

export default FavouritePage;
